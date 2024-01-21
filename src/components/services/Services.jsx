import "./services.scss";
import { motion } from "framer-motion";

// const variants = {
//   initial: {
//     x: -500,
//     y: 100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

const sliderVariants = {
  initial: {
    x: "85%",
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
      ease: "linear",
    },
  },
};

const smallScreenSliderVariants = {
  initial: {
    x: "90%",
  },
  animate: {
    x: "-300vw",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
      ease: "linear",
    },
  },
};

const sliderTextVariants = {
  initial: {
    x: "-70%",
  },
  animate: {
    x: "68%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
      ease: "linear",
    },
  },
};
const smallScreenSliderTextVariants = {
  initial: {
    x: "-55%",
  },
  animate: {
    x: "280vw", // Modify the animation for small screens
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 16,
      ease: "linear",
    },
  },
};

const Services = () => {
  return (
    <div className="text-container">
      <motion.div
        className="slidingTextContainer flex"
        variants={
          window.innerWidth <= 600 ? smallScreenSliderVariants : sliderVariants
        }
        initial="initial"
        animate="animate"
      >
        <img src="/html.png" alt="logos" />
        <img src="/css.png" alt="logos" />
        <img src="/javascript.png" alt="logos" />
        <img src="/react.png" alt="logos" />
        <img src="/tailwind.png" alt="logos" />
        <img src="/sass.png" alt="logos" />
        <img src="/nodejs.png" alt="logos" />
        <img src="/mongo-db.png" alt="logos" />
        <img src="/sql.png" alt="logos" />
        <img src="/npm.png" alt="logos" />
        <img src="/visual-studio-code.png" alt="logos" />
        <img src="/git.png" alt="logos" />
        <img src="/c-language-logo.png" alt="logos" />
        <img src="/c-sharp.png" alt="logos" />
      </motion.div>
      <motion.div className="skills">SKILLS</motion.div>
      <motion.div
        className="slidingSkills"
        variants={
          window.innerWidth <= 600
            ? smallScreenSliderTextVariants
            : sliderTextVariants
        }
        initial="initial"
        animate="animate"
      >
        HTML, CSS, Javascript, React.js, Tailwind CSS, Bootstrap, SCSS, Redux
        Toolkit, Jest, React Testing Library, Figma, Node.js, Express.js,
        MongoDB, SQL, C++, C#
      </motion.div>
      <div className="about-des">
        <h1>
          A hardworking individual with excellent academic record desiring to
          apply for an entry-level software development role. As a fresher
          software engineer, my objective is to leverage my technical skills,
          problem-solving abilities, and passion for coding to contribute to the
          success of a dynamic and innovative software development team. I aim
          to gain valuable industry experience, collaborate with experienced
          professionals, and continuously enhance my programming skills to
          develop cutting-edge software solutions.
        </h1>
        <h1>
          Education:{" "}
          <span className="text-[orange] font-bold">
            B. Tech - Computer Science and Engineering
          </span>{" "}
          - Islamic University Of Science and Technology{" "}
          <span className="text-[orange]">(2019 - 2023)</span>
        </h1>
      </div>
    </div>
  );
};

export default Services;
