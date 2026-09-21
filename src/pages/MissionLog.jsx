import { motion } from "motion/react";

function MissionLog() {
  const logs = [
    ["01", "LAUNCH"],
    ["02", "SATURN ORBIT"],
    ["03", "WORMHOLE APPROACH"],
    ["04", "GARGANTUA"],
  ];

  return (
    <section className="page">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <span className="eyebrow">
          04 / CHRONOLOGY
        </span>

        <h1 className="page-title">
          MISSION LOG
        </h1>
      </motion.div>

      <div className="log-list">
        {logs.map(([number, title], index) => (
          <motion.div
            className="log-item"
            key={number}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.1,
            }}
          >
            <span>{number}</span>
            <strong>{title}</strong>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default MissionLog;