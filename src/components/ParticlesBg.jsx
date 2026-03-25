import { useCallback, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {
  const [mode, setMode] = useState("dev");

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMode((prev) => (prev === "dev" ? "data" : "dev"));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const options =
    mode === "dev"
      ? {
          particles: {
            number: { value: 100 },
            color: { value: "#a855f7" },
            links: {
              enable: true,
              distance: 140,
              color: "#a855f7",
              opacity: 0.6,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
            },
            opacity: { value: 0.9 },
            size: { value: { min: 2, max: 4 } },
          },
        }
      : {
          particles: {
            number: { value: 70 },
            color: { value: "#38bdf8" },
            links: {
              enable: true,
              distance: 160,
              color: "#38bdf8",
              opacity: 0.4,
            },
            move: {
              enable: true,
              speed: 1,
            },
            opacity: { value: 0.6 },
            size: { value: { min: 1, max: 3 } },
          },
        };

  return (
    <Particles
      init={particlesInit}
      options={options}
      className="absolute inset-0 z-0"
    />
  );
}