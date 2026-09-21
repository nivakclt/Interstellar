import { motion } from "motion/react";

function NotFound() {
  return (
    <section className="page not-found">
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
          SYSTEM ERROR
        </span>

        <h1 className="page-title">
          404
        </h1>

        <p className="page-description">
          Mission coordinates not found.
        </p>
      </motion.div>
    </section>
  );
}

export default NotFound;