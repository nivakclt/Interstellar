import { motion } from "motion/react";

function Archive() {
  const locations = [
    "EARTH",
    "MILLER'S PLANET",
    "MANN'S PLANET",
    "EDMUNDS' PLANET",
    "GARGANTUA",
    "WORMHOLE",
  ];

  return (
    <section className="page" style={{
    paddingTop: "150px",
    paddingRight: "80px",
    paddingBottom: "100px",
    paddingLeft: "80px",
  }}>
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
          05 / CLASSIFIED DATABASE
        </span>

        <h1 className="page-title">
          ARCHIVE
        </h1>
      </motion.div>

      <div className="archive-grid">
        {locations.map((location, index) => (
          <motion.div
            className="archive-card"
            key={location}
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.06,
            }}
          >
            <span>
              0{index + 1}
            </span>

            <strong>{location}</strong>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Archive;