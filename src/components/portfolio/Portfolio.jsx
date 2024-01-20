import { useRef } from "react";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { items } from "../../../Utils/Constants";

const Single = ({ item }) => {
  return (
    <section className="w-full flex items-center justify-center bg-slate-950 ">
      <div className="container mx-auto">
        <div className="wrapper flex flex-col md:flex-row items-center bg-[#0b1032] shadow-lg md:rounded-md overflow-hidden">
          <div className="imageContainer md:w-1/2">
            <img
              src={item.img}
              alt={item.title}
              className="w-full md:h-full object-cover rounded-rt-md"
            />
          </div>
          <motion.div className="textContainer md:w-1/2  p-12 ">
            <h2 className="text-3xl font-bold mb-2 text-[orange]">
              {item.title}
            </h2>
            <p className="mt-2 text-[orange] text-xl font-semibold  ">
              {item.tech}
            </p>
            <p className="text-white mb-4 mt-2 text-[8px] md:text-base ">
              {item.desc}
            </p>
            <div className="flex space-x-4">
              <a
                href={item.link}
                className="bg-orange-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
              <a
                href={item.githubLink}
                className="bg-orange-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  return (
    <div className="portfolio" ref={ref}>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
