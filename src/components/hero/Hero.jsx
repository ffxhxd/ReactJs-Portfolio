import "./hero.scss";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const handleDownload = () => {
    // Change the file path to the location of your resume PDF
    const resumeFilePath = "../../../public/FhdRes.pdf";
    // Trigger the file download
    saveAs(resumeFilePath, "resume.pdf");
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Fahad Farooq</motion.h2>
          <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <motion.a onClick={handleDownload}>Download Resume</motion.a>
            </motion.button>
            <motion.button variants={textVariants}>
              <motion.a href={"#Contact"}>Contact</motion.a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        UI DEVELOPER, DESIGNER, FRONTEND DEVELOPER
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
