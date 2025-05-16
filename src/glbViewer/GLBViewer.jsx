/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Text,
  Billboard,
  Html,
} from "@react-three/drei";
import { AccesibilityContext } from "../contexts/AccesibilityContext";
import * as THREE from "three";
import { theme } from "../utils/theme/ThemeProviderWrapper";
import MarkerTooltip from "../ui/MarkerTooltip";

export default function GLBViewer({
  model,
  rotateModel = true,
  turnLight = true,
  zoomLevel = 5,
  selectedLayer = "both",
  onReady,
}) {
  const { highContrast } = useContext(AccesibilityContext);

  return (
    <Canvas style={{ filter: highContrast ? "invert(1)" : "none" }}>
      <CameraController zoomLevel={zoomLevel} />
      <ambientLight intensity={turnLight ? 2.1 : 1.2} />
      <directionalLight
        position={[5, 50, 5]}
        intensity={turnLight ? 0.8 : 0.2}
      />
      <Model
        model={model}
        selectedLayer={selectedLayer}
        key={model.url}
        onReady={onReady}
      />
      <OrbitControls
        autoRotate={rotateModel}
        autoRotateSpeed={2}
        maxDistance={15}
        minDistance={5}
      />
    </Canvas>
  );
}

function Model({ model, selectedLayer, onReady }) {
  const { scene } = useGLTF(model.url);
  const { camera } = useThree();
  const [selectedMarker, setSelectedMarker] = useState(null);
  const { highContrast, fontScale } = useContext(AccesibilityContext);

  if (scene.children.length > 1 && selectedLayer) {
    scene.children[0].visible = selectedLayer !== "first";
    scene.children[1].visible = selectedLayer !== "second";
  }

  useEffect(() => {
    // Temporarily store and remove invisible children
    // const invisibleChildren = [];
    // scene.children.forEach((child) => {
    //   if (!child.visible) {
    //     invisibleChildren.push(child);
    //     scene.remove(child);
    //   }
    // });

    // Compute bounding box
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    const distance = Math.abs(maxDim / Math.sin(fov / 2));

    scene.position.sub(center);
    camera.position.set(0, 1.4, distance / 2);
    camera.lookAt(0, 0, 0);

    // Restore invisible children
    // invisibleChildren.forEach((child) => scene.add(child));

    if (onReady) onReady();
  }, [model, selectedLayer, scene, camera]);

  const selectedMarkerData = model.markers.find(
    (marker) => marker.id === selectedMarker
  );

  return (
    <group>
      <primitive object={scene} scale={[1, 1, 1]} />
      {model.markers?.map((marker) => (
        <Marker3D
          key={marker.id}
          position={marker.position}
          text={marker.id}
          onClick={() => setSelectedMarker(marker.id)}
          highContrast={highContrast}
          scale={model.markerScale}
        />
      ))}
      <Html
        key={selectedMarkerData?.id}
        position={[
          selectedMarkerData?.position[0],
          selectedMarkerData?.position[1] * 0.8,
          selectedMarkerData?.position[2],
        ]}
        style={{
          filter: highContrast ? "invert(1)" : "none",
          position: "relative",
          display: selectedMarker ? "block" : "none",
        }}
      >
        <MarkerTooltip
          image={selectedMarkerData?.image}
          imagePOIs={selectedMarkerData?.imagePOIs}
          title={selectedMarkerData?.title}
          description={selectedMarkerData?.description}
          list={selectedMarkerData?.list}
          onClose={() => setSelectedMarker(null)}
          // Context passed as props cause Html element creates a separete React tree
          highContrastProp={highContrast}
          fontScaleProp={fontScale}
          // AI says : The <Html> component from @react-three/drei creates a portal to render HTML content outside the normal React Three Fiber component tree. This creates a disconnect in the React context chain, so components inside the Html portal can't access contexts from the parent tree.
        />
      </Html>
    </group>
  );
}

function Marker3D({ position, text, onClick, highContrast, scale }) {
  const [hovered, setHovered] = useState(false);

  // Offset the marker slightly from the model surface
  const markerPosition = position.map((coord) => coord * 1.05);

  return (
    <group position={markerPosition} scale={[scale, scale, scale]}>
      {/* Billboard ensures the marker always faces the camera */}
      <Billboard>
        {/* Circle background */}
        <mesh
          onClick={onClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <circleGeometry args={[0.15, 32]} />
          <meshBasicMaterial
            color={
              hovered
                ? theme.palette.primary.light
                : highContrast
                ? "#ffffff"
                : theme.palette.primary.main
            }
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Text */}
        <Text
          position={[0, 0, 0.01]} // Slightly in front of the circle
          fontSize={0.2}
          color={highContrast ? "#000000" : "#ffffff"}
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      </Billboard>
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
