import { motion } from "motion/react";
import {
  Activity,
  ArrowUpRight,
  Gauge,
  Navigation,
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

    const x =
      (e.clientX - rect.left) / rect.width;

    const y =
      (e.clientY - rect.top) / rect.height;

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

        {/* =====================================
            TOP HEADER
        ===================================== */}

        <div className="endurance-top">

          <div>
            <span className="section-label">
              01 — SPACECRAFT / ENDURANCE
            </span>

            <h1>
              ENDURANCE
            </h1>

            <p>
              INTERSTELLAR TRANSPORT VEHICLE /
              DEEP SPACE EXPEDITION SYSTEM
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


        {/* =====================================
            MAIN VISUAL
        ===================================== */}

        <div
          className="endurance-main-visual"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >

          <div
            className="spacecraft-stage"
            ref={spacecraftRef}
          >

            {/* ORBITS */}

            <div className="ship-orbit ship-orbit-1" />
            <div className="ship-orbit ship-orbit-2" />
            <div className="ship-orbit ship-orbit-3" />

            <div className="ship-ring ship-ring-a" />
            <div className="ship-ring ship-ring-b" />


            {/* SCAN GRID */}

            <div className="ship-scan-grid" />


            {/* TARGET */}

            <div className="ship-target">
              <span />
            </div>


            {/* SPACECRAFT */}

            <div className="ship-core">

              <div className="ship-core-glow" />

              <div className="ship-hub">
                <div className="ship-hub-inner" />
              </div>

              <div className="ship-arm ship-arm-top">
                <div className="ship-module" />
              </div>

              <div className="ship-arm ship-arm-right">
                <div className="ship-module" />
              </div>

              <div className="ship-arm ship-arm-bottom">
                <div className="ship-module" />
              </div>

              <div className="ship-arm ship-arm-left">
                <div className="ship-module" />
              </div>

              <div className="ship-engine">

                <div className="engine-ring engine-ring-1" />

                <div className="engine-ring engine-ring-2" />

                <div className="engine-core" />

              </div>

            </div>


            {/* FLOATING DATA */}

            <div className="ship-data ship-data-top">
              <span>CLASS</span>
              <strong>DEEP SPACE</strong>
            </div>

            <div className="ship-data ship-data-left">
              <span>VELOCITY</span>
              <strong>28,491 KM/S</strong>
            </div>

            <div className="ship-data ship-data-right">
              <span>HULL</span>
              <strong>99.8%</strong>
            </div>

            <div className="ship-data ship-data-bottom">
              <span>REACTOR</span>
              <strong>ONLINE</strong>
            </div>

            <div className="visual-caption">
              <span>ED-0426</span>
              <strong>
                INTERSTELLAR TRANSPORT SYSTEM
              </strong>
            </div>

          </div>

        </div>


        {/* =====================================
            TELEMETRY
        ===================================== */}

        <div className="endurance-telemetry">

          <div className="telemetry-heading">

            <div>
              <span className="section-label">
                FLIGHT TELEMETRY
              </span>

              <strong>
                LIVE SYSTEM ANALYSIS
              </strong>
            </div>

            <div className="telemetry-live">
              <span />
              STREAMING
            </div>

          </div>


          <div className="telemetry-grid">

            <div>
              <span>MISSION TIME</span>
              <strong>142 : 08 : 31</strong>
            </div>

            <div>
              <span>GRAVITY</span>
              <strong>09.481 G</strong>
            </div>

            <div>
              <span>OXYGEN</span>
              <strong>87.4%</strong>
            </div>

            <div>
              <span>UPLINK</span>
              <strong>98.7%</strong>
            </div>

          </div>

        </div>


        {/* =====================================
            SYSTEM STATUS
        ===================================== */}

        <div className="endurance-systems">

          <div className="systems-heading">

            <div>
              <span className="section-label">
                SYSTEMS
              </span>

              <h2>
                SHIP STATUS
              </h2>
            </div>

            <span>
              ALL SYSTEMS MONITORED
            </span>

          </div>


          <div className="systems-grid">

            {systems.map((system, index) => {
              const Icon = system.icon;

              return (
                <motion.div
                  className="system-row"
                  key={system.title}
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

                  <div className="system-name">

                    <Icon size={15} />

                    <span>
                      {system.title}
                    </span>

                  </div>


                  <strong>
                    {system.value}
                  </strong>


                  <div className="system-progress">

                    <span
                      style={{
                        width:
                          `${system.level}%`,
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


        {/* =====================================
            BOTTOM CONTROL BAR
        ===================================== */}

        <div className="endurance-control">

          <div className="control-info">

            <Navigation size={15} />

            <div>
              <span>NAVIGATION VECTOR</span>
              <strong>
                07.42° / STABLE
              </strong>
            </div>

            <Gauge size={15} />

            <div>
              <span>DRIVE EFFICIENCY</span>
              <strong>
                94.2%
              </strong>
            </div>

          </div>

          <button>
            OPEN FLIGHT DATA
            <ArrowUpRight size={15} />
          </button>

        </div>

      </motion.div>

    </section>
  );
}

export default Endurance;