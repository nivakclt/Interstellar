import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  Crosshair,
  Gauge,
  Radio,
  Activity,
  Orbit,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router";

function WormholePage() {
  const navigate = useNavigate();

  const telemetry = [
    {
      label: "DISTANCE",
      value: "0.287",
      unit: "AU",
    },
    {
      label: "GRAVITY",
      value: "09.481",
      unit: "G",
    },
    {
      label: "FIELD STABILITY",
      value: "87.4",
      unit: "%",
    },
    {
      label: "VELOCITY",
      value: "28,491",
      unit: "KM/S",
    },
  ];

  const systems = [
    {
      icon: Orbit,
      label: "GRAVITATIONAL FIELD",
      value: "STABLE",
      level: 87,
    },
    {
      icon: Activity,
      label: "EVENT HORIZON",
      value: "MONITORED",
      level: 94,
    },
    {
      icon: Radio,
      label: "DEEP SPACE LINK",
      value: "98.7%",
      level: 99,
    },
    {
      icon: Zap,
      label: "APPROACH VECTOR",
      value: "07.42°",
      level: 91,
    },
  ];

  return (
    <section className="wormhole-page page">
      <motion.div
        className="wormhole-glass"
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
        {/* HEADER */}

        <div className="wormhole-top">
          <div>
            <span className="section-label">
              02 — GRAVITATIONAL PHENOMENON / WORMHOLE
            </span>

            <h1>GARGANTUA</h1>

            <p>
              SUPERMASSIVE BLACK HOLE /
              PRIMARY WORMHOLE ANCHOR
            </p>
          </div>

          <div className="wormhole-status">
            <span className="wormhole-status-dot" />

            <div>
              <small>PHENOMENON STATUS</small>
              <strong>ACTIVE</strong>
            </div>
          </div>
        </div>

        {/* MAIN VISUAL */}

        <div className="wormhole-main">

          <div className="wormhole-visual">

            <div className="wormhole-orbit orbit-one" />
            <div className="wormhole-orbit orbit-two" />
            <div className="wormhole-orbit orbit-three" />

            <div className="wormhole-ring ring-one" />
            <div className="wormhole-ring ring-two" />
            <div className="wormhole-ring ring-three" />

            <div className="wormhole-core">
              <div className="wormhole-core-glow" />
              <div className="wormhole-singularity" />
            </div>

            <div className="wormhole-target">
              <Crosshair size={22} />
            </div>

            <div className="wormhole-data data-top">
              <span>CLASSIFICATION</span>
              <strong>SUPERMASSIVE</strong>
            </div>

            <div className="wormhole-data data-left">
              <span>FIELD</span>
              <strong>09.481 G</strong>
            </div>

            <div className="wormhole-data data-right">
              <span>VECTOR</span>
              <strong>07.42°</strong>
            </div>

            <div className="wormhole-data data-bottom">
              <span>LINK</span>
              <strong>98.7%</strong>
            </div>

            <div className="wormhole-center-label">
              <Crosshair size={14} />
              TARGET LOCKED
            </div>

            <div className="wormhole-center-title">
              GARGANTUA
            </div>

            <div className="wormhole-center-subtitle">
              EVENT HORIZON / LIVE ANALYSIS
            </div>

          </div>
        </div>

        {/* TELEMETRY */}

        <div className="wormhole-telemetry">

          <div className="wormhole-section-heading">
            <div>
              <span className="section-label">
                LIVE TELEMETRY
              </span>

              <strong>
                GRAVITATIONAL ANALYSIS
              </strong>
            </div>

            <div className="wormhole-live">
              <span />
              STREAMING
            </div>
          </div>

          <div className="wormhole-telemetry-grid">
            {telemetry.map((item) => (
              <div
                className="wormhole-stat"
                key={item.label}
              >
                <span>{item.label}</span>

                <strong>
                  {item.value}
                  <small>{item.unit}</small>
                </strong>
              </div>
            ))}
          </div>
        </div>

        {/* SYSTEMS */}

        <div className="wormhole-systems">

          <div className="wormhole-section-heading systems-title">
            <div>
              <span className="section-label">
                FIELD MONITOR
              </span>

              <h2>
                WORMHOLE STATUS
              </h2>
            </div>

            <span>
              ALL PARAMETERS MONITORED
            </span>
          </div>

          <div className="wormhole-system-list">

            {systems.map((system, index) => {
              const Icon = system.icon;

              return (
                <motion.div
                  className="wormhole-system-row"
                  key={system.label}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  <div className="wormhole-system-name">
                    <Icon size={15} />
                    <span>{system.label}</span>
                  </div>

                  <strong>
                    {system.value}
                  </strong>

                  <div className="wormhole-progress">
                    <span
                      style={{
                        width: `${system.level}%`,
                      }}
                    />
                  </div>

                  <small>
                    {system.level}%
                  </small>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* FOOTER CONTROL */}

        <div className="wormhole-control">

          <div className="wormhole-control-info">

            <div>
              <span>EVENT HORIZON</span>
              <strong>0.287 AU</strong>
            </div>

            <div>
              <span>TRAJECTORY</span>
              <strong>STABLE</strong>
            </div>

            <div>
              <span>DEEP SPACE LINK</span>
              <strong>98.7%</strong>
            </div>

          </div>

          <div className="wormhole-buttons">

            <button
              className="wormhole-back"
              onClick={() => navigate("/")}
            >
              <ArrowLeft size={15} />
              BACK TO MISSION
            </button>

            <button
              className="wormhole-enter"
              onClick={() => navigate("/endurance")}
            >
              VIEW ENDURANCE
              <ArrowUpRight size={15} />
            </button>

          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default WormholePage;