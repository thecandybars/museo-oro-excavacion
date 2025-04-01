/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";

import { forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router";

const GLBScene = forwardRef(function GLBScene(
  { url, targetProgress, isPlaying, onStop },
  ref
) {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const mixer = useRef();
  const action = useRef();
  const duration = useRef(0);

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(scene);
      action.current = mixer.current.clipAction(animations[0]);
      duration.current = animations[0].duration;
      action.current.play();
      action.current.paused = true;
    }
  }, [animations, scene]);

  useFrame((state, delta) => {
    const glbCamera = scene.getObjectByName("Camera");
    if (glbCamera) {
      state.camera.position.copy(glbCamera.position);
      state.camera.quaternion.copy(glbCamera.quaternion);
    }

    if (mixer.current && action.current && isPlaying) {
      action.current.paused = false;
      mixer.current.update(delta);

      const currentTime = action.current.time;
      const targetTime = duration.current * targetProgress;

      if (currentTime >= targetTime) {
        action.current.time = targetTime;
        action.current.paused = true;
        if (onStop) onStop();
      }
    }
  });

  // Expose reset function to parent
  useImperativeHandle(ref, () => ({
    reset: () => {
      if (action.current) {
        action.current.paused = true;
        action.current.time = 0;
        mixer.current.setTime(0);
      }
    },
  }));

  // eslint-disable-next-line react/no-unknown-property
  return <primitive ref={group} object={scene} />;
});

export default function GLBAnimation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [targetProgress, setTargetProgress] = useState(0.5);
  const sceneRef = useRef();

  const handlePlay = (time) => {
    setTargetProgress(time || 0.5);
    setIsPlaying(true);
  };

  const handleStop = () => setIsPlaying(false);

  const handleReset = () => {
    setIsPlaying(false);
    sceneRef.current?.reset();
  };

  const [step, setStep] = useState(1);
  console.log("🚀 ~ GLBAnimation ~ step:", step);
  const handleSteps = () => {
    if (step === 0) handleReset();
    if (step === 1) handlePlay(0.5);
    if (step === 2) handlePlay(0.96);
  };

  return (
    <>
      {step === 0 && (
        <button
          style={{
            position: "absolute",
            top: 170,
            left: 20,
            zIndex: 1,
            padding: "8px 12px",
          }}
        >
          <Link to="/piezas"> Explorar piezas</Link>
        </button>
      )}
      <button
        onClick={() => {
          handleSteps();
          setStep((prevStep) => (prevStep + 1) % 3);
        }}
        style={{
          position: "absolute",
          top: 220,
          left: 20,
          zIndex: 1,
          padding: "8px 12px",
        }}
      >
        Avanzar
      </button>

      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight />
        <GLBScene
          ref={sceneRef}
          url="/models/casa-3d-export-4.glb"
          isPlaying={isPlaying}
          targetProgress={targetProgress}
          onStop={handleStop}
        />
      </Canvas>
    </>
  );
}
