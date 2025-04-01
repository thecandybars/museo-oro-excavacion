/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Suspense, useContext, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Html, OrbitControls, useGLTF } from "@react-three/drei";
import Marker3D from "../ui/Marker3D";
import { AccesibilityContext } from "../contexts/AccesibilityContext";
import * as THREE from "three";
import { Box } from "@mui/material";

export default function GLBViewer({
  model,
  rotateModel = true,
  turnLight = true,
  zoomLevel = 5,
  selectedLayer = "both",
}) {
  const { highContrast } = useContext(AccesibilityContext);
  return (
    <Canvas style={{ filter: highContrast ? "invert(1)" : "none" }}>
      <CameraController zoomLevel={zoomLevel} />
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={turnLight ? 0.8 : 0.2}
      />
      <Suspense fallback={null}>
        <Model model={model} selectedLayer={selectedLayer} key={model.url} />
        <OrbitControls
          autoRotate={rotateModel}
          autoRotateSpeed={2}
          // onChange={(event) => {
          //   const { x, y, z } = event.target.object.position;
          //   console.log(`Camera Position: x=${x}, y=${y}, z=${z}`);
          // }}
        />
      </Suspense>
    </Canvas>
  );
}

function Model({ model, selectedLayer }) {
  const { highContrast } = useContext(AccesibilityContext);
  const { scene } = useGLTF(model.url);
  console.log("🚀 ~ Model ~ scene:", scene);
  const { camera } = useThree();
  const [selectedMarker, setSelectedMarker] = useState(null);

  if (scene.children.length > 1 && selectedLayer) {
    scene.children[0].visible = selectedLayer !== "first";
    scene.children[1].visible = selectedLayer !== "second";
  }

  useEffect(() => {
    // Compute the bounding box and its center
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    const distance = Math.abs(maxDim / Math.sin(fov / 2));

    // Shift the scene so the center of the bounding box is at (0, 0, 0)
    scene.position.sub(center);

    // Position the camera so the model fits nicely in view (centered at origin)
    camera.position.set(0, 0, distance / 2);
    camera.lookAt(0, 0, 0);
  }, [scene, camera, model.url]);

  const handleOnClick = (marker) => {
    marker.onClick();
    setSelectedMarker(marker.id);
  };

  return (
    <group>
      <primitive
        object={scene}
        scale={[model.defaultScale, model.defaultScale, model.defaultScale]}
      />
      {model.markers?.map((marker) => (
        <Html
          key={marker.id}
          position={marker.position}
          distanceFactor={5}
          style={{ filter: highContrast ? "invert(1)" : "none" }}
        >
          <Box
            id="container"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Marker3D
              caption={`${marker.id + 1}`}
              onClick={() => handleOnClick(marker)}
              onClose={marker.onClose}
            />
          </Box>
        </Html>
      ))}
    </group>
  );
}

function CameraController({ zoomLevel }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.zoom = zoomLevel;
    camera.updateProjectionMatrix();
  }, [zoomLevel, camera]);

  return null;
}
