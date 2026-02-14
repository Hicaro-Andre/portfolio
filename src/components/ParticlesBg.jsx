import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import { useEffect, useState } from "react";

export default function ParticlesBg() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const loadParticles = async () => {
      const { tsParticles } = await import("@tsparticles/engine");
      await loadStarsPreset(tsParticles);
      setInit(true);
    };
    loadParticles();
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        preset: "stars",
        background: {
          color: { value: "#000" }, // 🔹 Cor do fundo
        },
        fullScreen: {
          enable: true, // 🔹 Faz ocupar a tela inteira
          zIndex: -1,   // 🔹 Coloca atrás do conteúdo
        },
      }}
    />
  );
}
