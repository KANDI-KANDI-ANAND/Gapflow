import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            className="absolute inset-0 z-0 pointer-events-none"
            options={{
                background: { color: { value: "transparent" } },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "grab" },
                    },
                    modes: { grab: { distance: 160, links: { opacity: 0.15 } } },
                },
                particles: {
                    color: { value: "#10B981" },
                    links: { color: "#10B981", distance: 150, enable: true, opacity: 0.25, width: 1 },
                    move: { enable: true, random: true, speed: 0.8, straight: false },
                    number: { density: { enable: true }, value: 60 },
                    opacity: { value: 0.6 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 2 } },
                },
                detectRetina: true,
            }}
        />
    );
}
