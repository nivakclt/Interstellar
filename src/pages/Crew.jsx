import { motion } from "motion/react";

function Crew() {
  const crew = [
    
    {
      name: "JOSEPH COOPER",
      role: "COMMANDER",
      code: "ED-01",
    },
    {
      name: "AMELIA BRAND",
      role: "SCIENCE OFFICER",
      code: "ED-02",
    },
    {
      name: "ROMILLY",
      role: "ASTROPHYSICS",
      code: "ED-03",
    },
    {
      name: "DOYLE",
      role: "MISSION SPECIALIST",
      code: "ED-04",
    },
  ];

  return (
    <section className="page" style={{ marginTop: "150px", marginLeft:"30px"}}>
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
          03 / PERSONNEL
        </span>

        <h1 className="page-title">
          CREW
        </h1>
      </motion.div>

      <div className="crew-grid" style={{marginTop:"10px", marginBottom:"30px"}}>
        {crew.map((member, index) => (
          <motion.div
            className="crew-card"
            key={member.name}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
          >
            <span className="crew-code">
              {member.code}
            </span>

            <div>
              <strong>{member.name}</strong>
              <span>{member.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Crew;