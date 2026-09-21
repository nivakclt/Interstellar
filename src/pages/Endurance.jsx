import { motion } from "framer-motion";
import {
  Activity,
  Radio,
  Shield,
  Zap,
} from "lucide-react";
import { useRef } from "react";

function Endurance() {
  const spacecraftRef = useRef(null);

  const systems = [
    {
      title: "PROPULSION",
      value: "NOMINAL",
      icon: Zap,
      level: 94,
    },
    {
      title: "CRYOGENICS",
      value: "STABLE",
      icon: Shield,
      level: 87,
    },
    {
      title: "COMMUNICATION",
      value: "98.7%",
      icon: Radio,
      level: 98,
    },
    {
      title: "LIFE SUPPORT",
      value: "NOMINAL",
      icon: Activity,
      level: 91,
    },
  ];

  const handleMouseMove = (e) => {
    const el = spacecraftRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 8;
    const rotateX = (0.5 - y) * 6;

    el.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(15px)
    `;
  };

  const handleMouseLeave = () => {
    if (!spacecraftRef.current) return;

    spacecraftRef.current.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      translateZ(0)
    `;
  };

  return (
    <section className="endurance-page page">
      <motion.div
        className="endurance-glass"
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* TOP HEADER */}
        <div className="endurance-top">
          <div>
            <span className="section-label ">
              01 — SPACECRAFT / ENDURANCE
            </span>
            <h1>ENDURANCE</h1>
            <p>
              INTERSTELLAR TRANSPORT VEHICLE / DEEP SPACE EXPEDITION SYSTEM
            </p>
          </div>

          <div className="ship-status">
            <span className="ship-status-dot" />
            <div>
              <small>SHIP STATUS</small>
              <strong>NOMINAL</strong>
            </div>
          </div>
        </div>

        {/* MAIN VISUAL */}
        <div
          className="endurance-main-visual"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="spacecraft-stage" ref={spacecraftRef}>
            {/* ORBITS */}
            <div className="ship-orbit ship-orbit-1" />
            <div className="ship-orbit ship-orbit-2" />
            <div className="ship-orbit ship-orbit-3" />

            <div className="ship-ring ship-ring-a" />
            <div className="ship-ring ship-ring-b" />

            {/* SCAN GRID */}
            <div className="ship-scan-grid" />

            {/* SPACECRAFT CENTER CORE */}
            <div className="ship-core-hub">
              <div className="hub-center">ENDURANCE</div>
            </div>
          </div>
        </div>

        {/* SYSTEM READOUTS */}
        <div className="endurance-systems-grid">
          {systems.map((sys) => {
            const Icon = sys.icon;
            return (
              <div key={sys.title} className="system-card">
                <div className="system-card-header">
                  <Icon size={16} />
                  <span>{sys.title}</span>
                </div>
                <div className="system-card-body">
                  <strong>{sys.value}</strong>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${sys.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Endurance;