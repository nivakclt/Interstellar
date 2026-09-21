import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  Crosshair,
  Gauge,
  Radio,
  Scan,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router";

function WormholePage() {
  const navigate = useNavigate();

  return (
    <section className="wormhole-page page">

      {/* TOP LABEL */}
      <motion.div
        className="wormhole-header"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <div className="wormhole-title-block">

          <span className="eyebrow">
            02 / GRAVITATIONAL PHENOMENON
          </span>

          <h1>
            GARGANTUA
          </h1>

          <p>
            SUPERMASSIVE BLACK HOLE / PRIMARY WORMHOLE ANCHOR
          </p>

        </div>

        <div className="wormhole-live">
          <span></span>
          LIVE ANALYSIS
        </div>

      </motion.div>


      {/* MAIN VISUAL */}
      <div className="wormhole-stage">


        {/* LEFT INFORMATION */}
        <motion.aside
          className="wormhole-left-panel"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >

          <div className="panel-kicker">
            <Scan size={13} />
            EVENT HORIZON SCAN
          </div>


          <div className="big-readout">
            <span>DISTANCE</span>

            <strong>
              0.287
              <small> AU</small>
            </strong>
          </div>


          <div className="big-readout">
            <span>GRAVITY</span>

            <strong>
              09.481
              <small> G</small>
            </strong>
          </div>


          <div className="big-readout">
            <span>FIELD STABILITY</span>

            <strong>
              87.4
              <small> %</small>
            </strong>
          </div>


          <div className="panel-divider"></div>


          <div className="technical-list">

            <div>
              <span>ROTATION</span>
              <strong>0.042 RAD/S</strong>
            </div>

            <div>
              <span>HORIZON TEMP</span>
              <strong>1.17 × 10⁹ K</strong>
            </div>

            <div>
              <span>MASS CLASS</span>
              <strong>SUPERMASSIVE</strong>
            </div>

          </div>

        </motion.aside>


        {/* CENTRAL WORMHOLE VISUAL */}
        <motion.div
          className="wormhole-core-stage"
          initial={{
            opacity: 0,
            scale: 0.82,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="wormhole-radar">

            <div className="radar-circle radar-one"></div>

            <div className="radar-circle radar-two"></div>

            <div className="radar-circle radar-three"></div>

            <div className="radar-circle radar-four"></div>

            <div className="radar-horizontal"></div>

            <div className="radar-vertical"></div>

            <div className="radar-center"></div>

            <div className="radar-orbit orbit-a"></div>

            <div className="radar-orbit orbit-b"></div>

            <div className="radar-sweep"></div>

          </div>


          <div className="wormhole-name">
            <Crosshair size={12} />
            GARGANTUA
          </div>


          <div className="wormhole-distance">
            EVENT HORIZON
          </div>

        </motion.div>


        {/* RIGHT PANEL */}
        <motion.aside
          className="wormhole-right-panel"
          initial={{
            opacity: 0,
            x: 25,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
        >

          <div className="panel-kicker">
            <Gauge size={13} />
            APPROACH VECTOR
          </div>


          <div className="vector-display">

            <span>VECTOR</span>

            <strong>
              07.42°
            </strong>

          </div>


          <div className="vector-line">
            <span></span>
          </div>


          <div className="right-stat">
            <div>
              <span>VELOCITY</span>
              <strong>28,491 KM/S</strong>
            </div>

            <div>
              <span>RELATIVE ANGLE</span>
              <strong>−03.18°</strong>
            </div>

            <div>
              <span>TRAJECTORY</span>
              <strong>STABLE</strong>
            </div>
          </div>


          <div className="panel-divider"></div>


          <div className="system-check">

            <div className="system-check-title">
              <Shield size={12} />
              SYSTEM CHECK
            </div>

            <div className="check-row">
              <span>NAVIGATION</span>
              <strong>NOMINAL</strong>
            </div>

            <div className="check-row">
              <span>PROPULSION</span>
              <strong>NOMINAL</strong>
            </div>

            <div className="check-row">
              <span>HULL INTEGRITY</span>
              <strong>99.8%</strong>
            </div>

          </div>

        </motion.aside>

      </div>


      {/* BOTTOM CONTROLS */}
      <motion.div
        className="wormhole-controls"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.8,
        }}
      >

        <button
          className="control-back"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={14} />
          BACK TO MISSION
        </button>


        <div className="wormhole-command">

          <div className="command-status">
            <Radio size={13} />
            <span>DEEP SPACE LINK</span>
            <strong>98.7%</strong>
          </div>


          <button
            className="enter-wormhole"
            onClick={() => navigate("/endurance")}
          >
            <span>VIEW ENDURANCE</span>
            <ArrowUpRight size={15} />
          </button>

        </div>

      </motion.div>

    </section>
  );
}

export default WormholePage;