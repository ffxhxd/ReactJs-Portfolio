import "./services.scss";
import { easeInOut, motion, useInView } from "framer-motion";


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
    x: "0%",
  },
  animate: {
    x: "-80%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
      ease: "linear",
    },
  },
};


const smallScreenSliderVariants = {
  initial: {
    x: "50%",
  },
  animate: {
    x: "-200vw", 
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
      ease: "linear",
    },
  },
};


const sliderTextVariants = {
  initial: {
    x: "0%",
  },
  animate: {
    x: "70%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
      ease: "linear",
    },
  },
};
const smallScreenSliderTextVariants = {
  initial: {
    x: "-50%",
  },
  animate: {
    x: "230vw", // Modify the animation for small screens
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
      ease: "linear",
    },
  },
};

const Services = () => {

  return (


<div className="text-container">
     
      
      <motion.div
    className="slidingTextContainer"
    variants={window.innerWidth <= 600 ? smallScreenSliderVariants : sliderVariants}
    initial="initial"
    animate="animate"
  >
    <img src="/html.png" alt="logos"/>
    <img src="/css.png" alt="logos"/>
    <img src="/javascript.png" alt="logos"/>
    <img src="/react.png" alt="logos"/>
    <img src="/tailwind.png" alt="logos"/>
    <img src="/sass.png" alt="logos"/>
    <img src="/nodejs.png" alt="logos"/>
    <img src="/mongo-db.png" alt="logos"/>
    <img src="/sql.png" alt="logos"/>
    <img src="/npm.png" alt="logos"/>
    <img src="/c-language-logo.png" alt="logos"/>
  </motion.div>
  <motion.div className="skills">
    SKILLS
  </motion.div>
     <motion.div
     className="slidingSkills"
      variants={window.innerWidth <= 600 ? smallScreenSliderTextVariants : sliderTextVariants}
      initial="initial"
      animate="animate"
     >
     HTML, CSS, Javascript, React.js, Tailwind CSS, Bootstrap, SCSS, Redux Toolkit, Jest, Node.js, Express.js, MongoDB, SQL, C++
     </motion.div>
  </div>
  
  
 
  );
};

export default Services;
