import {
  Crosshair,
  Navigation,
  Radio,
  Activity,
  Orbit,
} from "lucide-react";

function HUD() {
  return (
    <div className="hud-layer">

      {/* CORNER MARKERS */}
      <div className="hud-corner hud-top-left" />
      <div className="hud-corner hud-top-right" />
      <div className="hud-corner hud-bottom-left" />
      <div className="hud-corner hud-bottom-right" />


      {/* TOP SYSTEM BAR */}
      <div className="hud-top-bar">

        <div className="hud-system">
          <Crosshair size={12} />
          <span>TARGET LOCK</span>
          <strong>GARGANTUA</strong>
        </div>

        <div className="hud-system">
          <Navigation size={12} />
          <span>VECTOR</span>
          <strong>07.42°</strong>
        </div>

        <div className="hud-system">
          <Radio size={12} />
          <span>UPLINK</span>
          <strong className="hud-green">98.7%</strong>
        </div>

      </div>


      {/* LEFT DATA */}
      <div className="hud-left-data">

        <div className="hud-data-block">

          <span>MISSION TIME</span>

          <strong>
            142 : 08 : 31
          </strong>

          <small>HRS / MIN / SEC</small>

        </div>


        <div className="hud-data-block">

          <span>VELOCITY</span>

          <strong>
            28,491
          </strong>

          <small>KM / S</small>

        </div>


        <div className="hud-data-block">

          <span>GRAVITY</span>

          <strong>
            09.481
          </strong>

          <small>G-FORCE</small>

        </div>

      </div>


      {/* CENTER TARGET */}
      <div className="hud-target">

        <div className="target-ring target-ring-outer" />

        <div className="target-ring target-ring-middle" />

        <div className="target-cross">

          <span className="cross-horizontal" />
          <span className="cross-vertical" />

        </div>

        <div className="target-dot" />

        <div className="target-label">
          GARGANTUA
        </div>

      </div>


      {/* RIGHT SYSTEM STATUS */}
      <div className="hud-right-data">

        <div className="hud-status-title">
          <Activity size={12} />
          FLIGHT SYSTEMS
        </div>


        <div className="hud-status-row">
          <span>PROPULSION</span>
          <strong className="hud-green">
            NOMINAL
          </strong>
        </div>


        <div className="hud-status-row">
          <span>HULL</span>
          <strong className="hud-green">
            99.8%
          </strong>
        </div>


        <div className="hud-status-row">
          <span>OXYGEN</span>
          <strong>
            87.4%
          </strong>
        </div>


        <div className="hud-status-row">
          <span>COMMS</span>
          <strong className="hud-green">
            ONLINE
          </strong>
        </div>

      </div>


      {/* BOTTOM BAR */}
      <div className="hud-bottom-bar">

        <div>
          <span>SENSOR ARRAY</span>
          <strong>ACTIVE</strong>
        </div>

        <div>
          <span>GRAVITATIONAL DISTORTION</span>
          <strong>HIGH</strong>
        </div>

        <div>
          <Orbit size={12} />
          <span>ORBITAL TRACKING</span>
        </div>

      </div>

    </div>
  );
}

export default HUD;