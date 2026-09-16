import Particles from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import { useEffect, useState, useMemo } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function ParticlesBg() {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const loadParticles = async () => {
      const { tsParticles } = await import("@tsparticles/engine");
      await loadStarsPreset(tsParticles);
      setInit(true);
    };
    loadParticles();
  }, []);

  const particleOptions = useMemo(
    () => ({
      preset: "stars",
      background: {
        color: { value: "transparent" },
      },
      particles: {
        color: {
          value:
            theme === "dark"
              ? ["#ffffff", "#58a6ff", "#93c5fd"]
              : ["#1d4ed8", "#2563eb", "#3b82f6"],
        },
        opacity: {
          value: theme === "dark" ? { min: 0.2, max: 0.9 } : { min: 0.35, max: 0.8 },
        },
        size: {
          value: { min: 1, max: 2.5 },
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
    }),
    [theme]
  );

  if (!init) return null;

  return (
    <Particles
      key={theme}
      id="tsparticles"
      style={{ pointerEvents: "none" }}
      options={particleOptions}
    />
  );
}
