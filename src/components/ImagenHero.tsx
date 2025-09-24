import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import { Leva } from 'leva';
import Scene from './imagen-header/Scene';
// SVG imports removed - using inline SVG instead

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

interface GeminiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const GeminiButton: React.FC<GeminiButtonProps> = ({ children, ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      className="pointer-events-auto flex gap-2 rounded-full transition-all duration-200 px-7 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-600 hover:shadow-md hover:from-blue-700 hover:to-teal-700"
    >
      {children}
    </button>
  );
};

const GeminiParagraph: React.FC = () => {
  return (
    <div className="isolate size-fit bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text">
      <p className="max-w-4xl text-black text-balance font-medium text-xl md:text-4xl text-center tracking-tight leading-snug">
        Animated header based on the{" "}
        <span
          style={{
            WebkitTextFillColor: "transparent",
          }}
        >
          DeepMind Imagen
        </span>{" "}
        landing page. Taken to the next level with{" "}
        <span
          style={{
            WebkitTextFillColor: "transparent",
          }}
        >
          React Three Fiber
        </span>{" "}
        and{" "}
        <span
          style={{
            WebkitTextFillColor: "transparent",
          }}
        >
          Three.js Shading Language
        </span>
        . Supporting acts include GSAP and Tailwind CSS.
      </p>
    </div>
  );
};

const ImagenHero: React.FC = () => {
  const [replayTime, setReplayTime] = useState("");

  const onReplayClick = () => {
    setReplayTime(Date.now().toString());
  };

  return (
    <section className="relative w-full overflow-hidden h-screen">
      <Scene replayTime={replayTime} />
      <div className="relative w-full pointer-events-none h-full flex flex-col gap-6 items-center justify-center z-10">
        <img 
          src="/stickerverse-logo-correct.png" 
          alt="STICKERVERSE"
          className="max-w-4xl w-full h-auto object-contain mb-4"
        />
        <h1 className="text-3xl md:text-7xl font-medium tracking-tighter text-white text-center">
          These <em>are</em> the stickers<br />your looking for.
        </h1>
        <p className="text-white/90 text-xl md:text-2xl text-center max-w-3xl leading-relaxed font-medium">
        The highest quality stickers, printed fast. Delivered even faster with our lightspeed print and ship proccess. Create your stickers with our online sticker designer and get a free online proof.
        </p>
        <div className="flex gap-4">
          <GeminiButton onClick={onReplayClick}>
            Start Designing
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="-mr-2"
            >
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
              <path d="M21 3v5h-5"/>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
              <path d="M3 21v-5h5"/>
            </svg>
          </GeminiButton>

          <GeminiButton>
            Shop Stickers
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="-mr-2"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </GeminiButton>
        </div>
      </div>
      <Leva hidden={true} />
    </section>
  );
};

export default ImagenHero;