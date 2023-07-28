import classes from "../background/Background.module.css";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className={`${classes.background}`}>
      <div className={`${classes.mainFocus}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>
            NUNSA UNIVERSITY OF
            <br /> CALABAR CHAPTER
          </h1>
          <motion.div
            className="limiter margAuto"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
          >
            <button className="btn btn-lg mt-3 bold bottomShadow btnct btnct-nunsa">
              Signup
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Background;
