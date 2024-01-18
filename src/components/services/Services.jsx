import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { MdSwipe } from "react-icons/md";
import jsIMG from "../../../public/javascript.png"
import cssIMG from "../../../public/css-logo.png"
import htmlIMG from "../../../public/html-logo.png"
import nodeIMG from "../../../public/nodejs.png"
import reactIMG from "../../../public/react.png"
import mongoIMG from "../../../public/mongo-db.png"
import npmIMG from "../../../public/npm.png"
import sassIMG from "../../../public/sass.png"
import sqlIMG from "../../../public/sql.png"
import tailwindIMG from "../../../public/tailwind.png"
import cppIMG from "../../../public/c-language-logo.png"

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Frontend</motion.b> developer
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}> looking for a </motion.b>role 
          </h1>  
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        
         <img src={htmlIMG} alt="skills-images" className="imageList" />
          <img src={cssIMG} alt="skills-images" className="imageList"/>
          <img src={jsIMG} alt="skills-images" className="imageList"/>
          <img src={reactIMG} alt="skills-images" className="imageList"/>
          <img src={tailwindIMG} alt="skills-images" className="imageList"/>
          <img src={sassIMG} alt="skills-images" className="imageList"/>
          <img src={nodeIMG} alt="skills-images" className="imageList"/>
          <img src={sqlIMG} alt="skills-images" className="imageList"/>
          <img src={npmIMG} alt="skills-images" className="imageList"/>
          <img src={mongoIMG} alt="skills-images" className="imageList"/>
          <img src={cppIMG} alt="skills-images" className="imageList"/>
        
      </motion.div>

      <MdSwipe size={20}/>
      <motion.div className="educationContainer" variants={variants}>
      <div className="ecflexbox">
         <h1>About ME</h1>
          <div>A hardworking individual with excellent academic record desiring to apply for
an entry-level software development role. As a fresher software engineer, my
objective is to leverage my technical skills, problem-solving abilities, and
passion for coding to contribute to the success of a dynamic and innovative
software development team. I aim to gain valuable industry experience,
collaborate with experienced professionals, and continuously enhance my
programming skills to develop cutting-edge software solutions.</div>
         </div>
         <div className="ecflexbox2">
         <h1>Education</h1>
          <div>B. Tech - Computer Science and Engineering</div>
          <div>Islamic University of Science and Technology</div>
         </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
