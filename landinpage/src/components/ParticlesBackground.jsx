import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground({ theme }) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Configurações dinâmicas baseadas no tema
  const getParticlesOptions = useCallback(() => ({
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: theme === 'dark' ? "#00ffff" : "#2563eb" // Cores que combinam com seu tema
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: theme === 'dark' ? 0.5 : 0.3
      },
      size: {
        value: 3
      },
      move: {
        enable: true,
        speed: 1.5,
        outModes: {
          default: "bounce"
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: false
        },
        onClick: {
          enable: false
        }
      }
    },
    background: {
      color: "transparent"
    }
  }), [theme]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={getParticlesOptions()}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
    />
  );
}