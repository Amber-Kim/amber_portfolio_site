import React from "react";

// png
import avatar1 from "images/avatar1.png";

// Animation
import { Link } from "react-scroll";
import { motion } from "framer-motion";

// CSS
import "./home.css";

const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },

  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

const Home = () => {
  return (
    <section className="home-container" id="home" name="home">
      <motion.div
        className="content"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h1>Hi!<br />I’m Jeong eun Kim</h1>
        <p><br />Thank you for coming to my corner on the internet.</p>
        <Link
          className="home-btn"
          to={"portfolio"}
          hashSpy={true}
          spy={true}
          smooth={true}
          delay={100}
          offset={-100}
          duration={500}
        >
          See My Projects
        </Link>
      </motion.div>

      <motion.div
        className="png"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img src={avatar1} alt="Developer" />
      </motion.div>
    </section>
  );
};

export default Home;
