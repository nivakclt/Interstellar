import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Clock3,
  Globe2,
  Radio,
  Orbit,
  ScanLine,
  Shield,
  Gauge,
} from "lucide-react";
import { useNavigate } from "react-router";

function Mission() {
  const navigate = useNavigate();

  const worlds = [
    {
      id: "01",
      name: "MILLER",
      distance: "1.30 LY",
      status: "HIGH GRAVITY",
      type: "OCEAN WORLD",
      score: "72",
    },
    {
      id: "02",
      name: "MANN",
      distance: "1.52 LY",
      status: "ICE ENVIRONMENT",
      type: "FROZEN PLANET",
      score: "64",
    },
    {
      id: "03",
      name: "EDMUNDS",
      distance: "1.63 LY",
      status: "VIABLE",
      type: "TERRESTRIAL",
      score: "91",
    },
  ];

  const telemetry = [
    ["MISSION TIME", "142 : 08 : 31"],
    ["CURRENT VELOCITY", "28,491 KM/S"],
    ["DISTANCE TRAVELLED", "7.84 LY"],
    ["SIGNAL", "98.7%"],
  ];

  return (
    <section className="mission-page page">
      <motion.div
        className="mission-glass"
        initial={{ opacity: 0, y: 35, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="mission-noise" />

        {/* HERO */}

        <div className="mission-hero">
          <div className="mission-hero-copy">
            <span className="section-label">
              00 — ENDURANCE MISSION / DEEP SPACE PROGRAM
            </span>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              INTERSTELLAR
            </motion.h1>

            <p className="mission-tagline">
              BEYOND THE KNOWN
              <span />
              INTO THE UNKNOWN
            </p>

            <p className="mission-description">
              HUMANITY'S LAST HORIZON.
              <br />
              A DEEP SPACE EXPEDITION THROUGH
              UNKNOWN GRAVITATIONAL SYSTEMS.
            </p>

            <div className="mission-actions">
              <button
                onClick={() => navigate("/endurance")}
                className="mission-primary-btn"
              >
                ENTER MISSION CONTROL
                <ArrowUpRight size={16} />
              </button>

              <button
                onClick={() => navigate("/wormhole")}
                className="mission-secondary-btn"
              >
                GARGANTUA
                <Orbit size={15} />
              </button>
            </div>
          </div>

          <div className="mission-hero-side">
            <div className="mission-side-status">
              <span className="status-pulse" />

              <div>
                <small>MISSION STATUS</small>
                <strong>ACTIVE</strong>
              </div>
            </div>

            <div className="mission-clock">
              <span>LOCAL MISSION TIME</span>
              <strong>21 : 47 : 09</strong>
            </div>

            <div className="mission-coordinate">
              <span>COORDINATES</span>
              <strong>00.481° / 07.421°</strong>
            </div>
          </div>
        </div>

        {/* TELEMETRY */}

        <div className="mission-telemetry">
          {telemetry.map(([label, value], index) => (
            <motion.div
              key={label}
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.07,
              }}
            >
              <span>{label}</span>
              <strong>{value}</strong>
            </motion.div>
          ))}
        </div>

        {/* MISSION STATEMENT */}

        <div className="mission-statement">
          <div className="statement-line" />

          <div>
            <span className="section-label">
              PRIMARY OBJECTIVE
            </span>

            <h2>
              FIND A NEW HOME
              <br />
              FOR HUMANITY.
            </h2>
          </div>

          <div className="statement-meta">
            <div>
              <span>OBJECTIVE</span>
              <strong>07 / 12</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>NOMINAL</strong>
            </div>
          </div>
        </div>

        {/* WORLDS */}

        <div className="mission-worlds">
          <div className="mission-section-head">
            <div>
              <span className="section-label">
                DESTINATION DATABASE
              </span>
              <h2>CANDIDATE WORLDS</h2>
            </div>

            <span className="mission-index">
              03 TARGETS FOUND
            </span>
          </div>

          <div className="world-grid">
            {worlds.map((world, index) => (
              <motion.article
                className="world-card"
                key={world.name}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                }}
              >
                <div className="world-card-top">
                  <span>{world.id}</span>
                  <ScanLine size={14} />
                </div>

                <div className="world-orb">
                  <span />
                </div>

                <span className="world-type">
                  {world.type}
                </span>

                <h3>{world.name}</h3>

                <div className="world-data">
                  <div>
                    <span>DISTANCE</span>
                    <strong>{world.distance}</strong>
                  </div>

                  <div>
                    <span>CONDITION</span>
                    <strong>{world.status}</strong>
                  </div>
                </div>

                <div className="world-score">
                  <div>
                    <span>VIABILITY INDEX</span>
                    <strong>{world.score}%</strong>
                  </div>

                  <div className="score-bar">
                    <span
                      style={{
                        width: `${world.score}%`,
                      }}
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* GARGANTUA */}

        <div className="mission-gargantua">
          <div className="gargantua-copy">
            <span className="section-label">
              GRAVITATIONAL ANOMALY / 01
            </span>

            <h2>GARGANTUA</h2>

            <p>
              SUPERMASSIVE BLACK HOLE.
              <br />
              WORMHOLE ANCHOR.
              <br />
              PRIMARY TRANSIT GATE.
            </p>

            <button
              onClick={() => navigate("/wormhole")}
            >
              VIEW ANOMALY
              <ArrowUpRight size={15} />
            </button>
          </div>

          <div className="gargantua-mini">
            <div className="gargantua-ring ring-a" />
            <div className="gargantua-ring ring-b" />
            <div className="gargantua-core" />

            <span className="gargantua-tag tag-a">
              09.481 G
            </span>

            <span className="gargantua-tag tag-b">
              ACTIVE
            </span>
          </div>
        </div>

        {/* FINAL STATUS */}

        <div className="mission-bottom">
          <div>
            <Radio size={15} />
            DEEP SPACE NETWORK
            <strong>LINK STABLE</strong>
          </div>

          <div>
            <Shield size={15} />
            HULL INTEGRITY
            <strong>99.8%</strong>
          </div>

          <div>
            <Gauge size={15} />
            DRIVE EFFICIENCY
            <strong>94.2%</strong>
          </div>

          <div className="scroll-indicator">
            <ArrowDown size={14} />
            SCROLL TO EXPLORE
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Mission;