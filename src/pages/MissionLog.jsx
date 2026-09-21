import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const LOG_DATA = [
  {
    id: "01",
    title: "LAUNCH",
  },
  {
    id: "02",
    title: "SATURN ORBIT",
  },
  {
    id: "03",
    title: "WORMHOLE APPROACH",
  },
  {
    id: "04",
    title: "GARGANTUA",
  },
];

function MissionLog() {
  return (
    <main className="mission-log-page page">
      <motion.header
        className="mission-log-header"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-50px",
        }}
        variants={headerVariants}
      >
        <span className="eyebrow">04 / CHRONOLOGY</span>
        <h1 className="page-title">MISSION LOG</h1>
      </motion.header>

      <motion.ul
        className="log-list"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-50px",
        }}
        variants={containerVariants}
      >
        {LOG_DATA.map(({ id, title }) => (
          <motion.li
            key={id}
            className="log-item"
            variants={itemVariants}
          >
            <span>{id}</span>
            <strong>{title}</strong>
          </motion.li>
        ))}
      </motion.ul>
    </main>
  );
}

export default MissionLog;