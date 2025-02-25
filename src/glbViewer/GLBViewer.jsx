/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Suspense, useContext, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Html, OrbitControls, useGLTF } from "@react-three/drei";
import Marker3D from "../ui/Marker3D";
import { AccesibilityContext } from "../contexts/AccesibilityContext";
import * as THREE from "three";

function Model({ model }) {
  const { highContrast } = useContext(AccesibilityContext);

  const { scene } = useGLTF(model.url);
  const { camera } = useThree();
  // const [target, setTarget] = useState(new THREE.Vector3());

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

  return (
    <group>
      <primitive
        object={scene}
        scale={[model.defaultScale, model.defaultScale, model.defaultScale]}
      />
      {model.tooltips.map((tooltip) => (
        <Html
          key={tooltip.id}
          position={tooltip.position}
          distanceFactor={5}
          style={{ filter: highContrast ? "invert(1)" : "none" }}
        >
          <Marker3D caption={`${tooltip.id + 1}`} />
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

export default function GLBViewer({
  model,
  rotateModel = true,
  turnLight = true,
  zoomLevel = 5,
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
        <Model model={model} />
      </Suspense>
      <OrbitControls
        autoRotate={rotateModel}
        autoRotateSpeed={2}
        // onChange={(event) => {
        //   const { x, y, z } = event.target.object.position;
        //   console.log(`Camera Position: x=${x}, y=${y}, z=${z}`);
        // }}
      />
    </Canvas>
  );
}
