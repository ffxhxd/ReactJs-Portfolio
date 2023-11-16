import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Fahad Farooq
        </motion.span>
        <div className="social">
          <a href="https://github.com/ffxhxd">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/fxhxd/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://leetcode.com/ffxhxd">
            <img src="/leetcode.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
