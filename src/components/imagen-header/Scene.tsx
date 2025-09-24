import { Stats } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import { type FC, useLayoutEffect, useState } from "react";
import WebGPU from "three/examples/jsm/capabilities/WebGPU.js";
import { type WebGPURendererParameters } from "three/src/renderers/webgpu/WebGPURenderer.js";
import * as THREE from "three/webgpu";

import CameraControls from "./CameraControls";
import ImageRevealPlane from "./ImageRevealPlane";
import NotSupported from "./NotSupported";

// Import image assets from public directory
import bladeRunnerImg from "/blade-runner.jpeg";
import coupleCoffeeImg from "/couple-coffee.jpeg";
import daliParrotsImg from "/dali-parrots.jpeg";
import deepmindImg from "/deepmind.jpeg";
import owlImg from "/owl.jpeg";
import scientistsImg from "/scientists.jpeg";
import utopiaImg from "/utopia.jpeg";
import yachtsImg from "/yachts.jpeg";

declare module "@react-three/fiber" {
  interface ThreeElements {
    [key: string]: any;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
extend(THREE as any);

type Props = {
  replayTime: string;
};

const Scene: FC<Props> = ({ replayTime }) => {
  const [isWebGPUSupported, setIsWebGPUSupported] = useState<boolean | null>(
    null
  );

  useLayoutEffect(() => {
    setIsWebGPUSupported(WebGPU.isAvailable());
  }, []);

  if (isWebGPUSupported === null) return null;
  if (isWebGPUSupported === false) return <NotSupported />;

  return (
    <Canvas
      className="!absolute inset-0 !h-full !w-full"
      camera={{ position: [0, 0, 6], fov: 70, far: 20 }}
      flat={true}
      gl={async (props) => {
        const renderer = new THREE.WebGPURenderer(
          props as WebGPURendererParameters
        );
        await renderer.init();
        return renderer;
      }}
    >
      <color attach="background" args={["#000"]} />
      <CameraControls />

      {/* Left Top */}
      <ImageRevealPlane
        position={[-7, 2, -2.5]}
        width={5}
        height={4}
        imageSrc={deepmindImg}
        isBlurred={true}
        delay={0.32}
        replayTime={replayTime}
      />
      <ImageRevealPlane
        position={[-4, 3, -1]}
        width={3.8}
        height={3}
        imageSrc={utopiaImg}
        delay={0.16}
        replayTime={replayTime}
      />
      {/* Top */}
      <ImageRevealPlane
        position={[1, 3, 0]}
        width={2.4}
        height={3.2}
        imageSrc={owlImg}
        delay={0.12}
        replayTime={replayTime}
      />
      <ImageRevealPlane
        position={[6, 3.5, -3]}
        width={4}
        height={4}
        isBlurred={true}
        imageSrc={bladeRunnerImg}
        delay={0.2}
        replayTime={replayTime}
      />
      {/* Right */}
      <ImageRevealPlane
        position={[5, -0.25, 0]}
        width={3.5}
        height={2.5}
        imageSrc={coupleCoffeeImg}
        delay={0}
        replayTime={replayTime}
      />
      {/* Left */}
      <ImageRevealPlane
        position={[-4, -2, -0.5]}
        width={2.8}
        height={2.8}
        imageSrc={daliParrotsImg}
        delay={0.48}
        replayTime={replayTime}
      />
      <ImageRevealPlane
        position={[-6.5, -4, -2]}
        width={6}
        height={4}
        isBlurred={true}
        imageSrc={yachtsImg}
        delay={0.3}
        replayTime={replayTime}
      />
      {/* Bottom */}
      <ImageRevealPlane
        position={[1, -3.8, -1]}
        width={4.5}
        height={3}
        imageSrc={scientistsImg}
        delay={0.6}
        replayTime={replayTime}
      />
      {process.env.NODE_ENV === "development" && <Stats />}
    </Canvas>
  );
};

export default Scene;
