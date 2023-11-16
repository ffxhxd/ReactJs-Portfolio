import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Craftsy",
    link: "https://craftsy.netlify.app/",
    img: "https://i.pinimg.com/originals/e9/4c/ab/e94cabbb920fde45639aec91bac309ce.jpg",
    desc: "ECommerce app for Handmade items with MongoDB for storage, Express for HTTP, React for frontend, Node.js runtime, JWT for auth, Stripe for payments, featuring product filtering, sorting, search, and efficient traffic handling. https://craftsy.netlify.app",
  },
  {
    id: 2,
    title: "Tesla.com CLONE",
    link: "https://cloneofteslabyfahad.netlify.app/",
    img: "https://c4.wallpaperflare.com/wallpaper/20/1004/36/car-tesla-motors-tesla-roadster-supercars-wallpaper-preview.jpg",
    desc: "Using ReactJs and Styled Components. ---https://cloneofteslabyfahad.netlify.app",
  },
  {
    id: 3,
    title: "Omnifood",
    link: "https://ffxhxd.github.io/omnifood/",
    img: "https://media.istockphoto.com/id/1409236261/photo/healthy-food-healthy-eating-background-fruit-vegetable-berry-vegetarian-eating-superfood.jpg?b=1&s=612x612&w=0&k=20&c=2zneB18UvroqNeKhG13kCT-jgMuxvHHpEcWKhNDFxBk=",
    desc: "Food delivery website using Vanilla JS, HTML and CSS. --- https://ffxhxd.github.io/omnifood",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
        <a href={item.link}>View</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
