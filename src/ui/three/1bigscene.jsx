import { useEffect, useRef } from "react";
import * as THREE from "three";

// import your model file AS-IS
import initThreeScene from "./citymodel"; // we create this next

export default function HeroScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // initialize your existing scene
    const cleanup = initThreeScene(containerRef.current);

    // cleanup on unmount
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
    />
  );
}