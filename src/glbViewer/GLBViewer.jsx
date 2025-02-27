/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Html, OrbitControls, useGLTF } from "@react-three/drei";
import Marker3D from "../ui/Marker3D";
import { AccesibilityContext } from "../contexts/AccesibilityContext";
import * as THREE from "three";
import { Box } from "@mui/material";
import { useFrame } from "@react-three/fiber";

export default function GLBViewer({
  model,
  rotateModel = true,
  turnLight = true,
  zoomLevel = 5,
}) {
  console.log("🚀 ~ model:", model);
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
        <Model model={model} />
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

// function Model({ model }) {
//   const { scene } = useGLTF(model.url);
//   const { camera, size } = useThree(); // Get camera and canvas size
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [markerScreenPosition, setMarkerScreenPosition] = useState(null);
//   console.log("🚀 ~ Model ~ markerScreenPosition:", markerScreenPosition);

//   const markerRef = useRef();
//   console.log("🚀 ~ Model ~ markerRef:", markerRef);

//   const updateMarkerPosition = (marker) => {
//     const worldPosition = new THREE.Vector3(...marker.position);
//     const ndc = worldPosition.project(camera);
//     const x = ((ndc.x + 1) / 2) * size.width;
//     const y = ((1 - ndc.y) / 2) * size.height;
//     setMarkerScreenPosition({ x, y });
//   };

//   useFrame(() => {
//     if (selectedMarker) {
//       console.log("🚀 ~ Model ~ selectedMarker:", selectedMarker);
//       const marker = model.markers.find(
//         (marker) => marker.id === selectedMarker
//       );
//       if (marker) updateMarkerPosition(marker);
//     }
//   });

//   const handleOnClick = (marker) => {
//     setSelectedMarker(marker.id);
//     updateMarkerPosition(marker); // Initial calculation
//   };

//   return (
//     <>
//       <group>
//         <primitive
//           object={scene}
//           scale={[model.defaultScale, model.defaultScale, model.defaultScale]}
//         />
//         {model.markers?.map((marker) => (
//           <Html
//             key={marker.id}
//             position={marker.position}
//             distanceFactor={5}
//             ref={markerRef}
//           >
//             <Marker3D
//               caption={`${marker.id + 1}`}
//               onClick={() => handleOnClick(marker)}
//             />
//           </Html>
//         ))}
//       </group>
//     </>
//   );
// }

function Model({ model }) {
  const { highContrast } = useContext(AccesibilityContext);

  const { scene } = useGLTF(model.url);
  const { camera } = useThree();
  const [selectedMarker, setSelectedMarker] = useState(null);
  console.log("🚀 ~ Model ~ selectedMarker:", selectedMarker);

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    const distance = Math.abs(maxDim / Math.sin(fov / 2));

    camera.position.set(center.x, center.y, center.z + distance / 2);
    camera.lookAt(center.x, center.y, center.z);
    // setTarget(center.clone());
  }, [scene, camera]);

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
      {/* Helpers */}
      {/* <boxHelper args={[scene, 0xff0000]} /> */}
      {/* <mesh position={[target.x, target.y, target.z]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="blue" />
      </mesh> */}
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
