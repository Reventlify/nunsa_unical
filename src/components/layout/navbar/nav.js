import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import nunsaLogoBg from "../../../images/NunsalogoBg.png";

const Nav = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [toggle, setToggle] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 95) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  const refresh = () => {
    return window.location.reload();
  };
  const toggler = () => {
    return toggle ? setToggle(false) : setToggle(true);
  };
  const scrollToTop = () => {
    return window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top bg-try"
        style={
          colorChange || toggle
            ? { opacity: 0.7601, backgroundColor: "#000000e8" }
            : { height: "auto" }
        }
      >
        <div className="container">
          <div className="hover" onClick={refresh}>
            <motion.div
              whileInView={{ rotate: 360 }}
              transition={{ from: 0, duration: 1 }}
            >
              <img
                // src="https://nunsa.org.ng/wp-content/uploads/2021/01/NUNSA_NORTH_NG-scale-1._20200703_023930-scale-1-removebg-preview-1.png"
                src={nunsaLogoBg}
                alt="nunsaLogo"
                width="65px"
              />
            </motion.div>
          </div>
          <div
            className="navbar-toggler noBorder"
            // type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=" bold" onClick={toggler}>
              <motion.div
                whileTap={{ rotate: 360 }}
                transition={{ from: 0, duration: 1 }}
              >
                {!toggle ? (
                  <i className="fa-solid fa-bars atGrabNormal"></i>
                ) : (
                  <i className="fa-solid fa-xmark atGrabNormal-1"></i>
                )}
              </motion.div>
            </span>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <motion.div
                  className="container"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <NavLink
                    to="/"
                    className="nav-link onPhoneNav"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#61CE70",
                            borderBottom: "2px solid #61CE70",
                          }
                        : { color: "white", borderBottom: "none" }
                    }
                  >
                    Home
                  </NavLink>
                </motion.div>
              </li>
              <li className="nav-item bottomShadow smallScreen">
                <motion.div
                  className="container"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <NavLink
                    to="/login"
                    className="nav-link onPhoneNav"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#61CE70",
                            borderBottom: "2px solid #61CE70",
                          }
                        : { color: "white", borderBottom: "none" }
                    }
                  >
                    Login
                  </NavLink>
                </motion.div>
              </li>
              <li className="nav-item">
                <motion.div
                  className="container"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <NavLink
                    to="/about"
                    className="nav-link onPhoneNav"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#61CE70",
                            borderBottom: "2px solid #61CE70",
                          }
                        : { color: "white", borderBottom: "none" }
                    }
                  >
                    About
                  </NavLink>
                </motion.div>
              </li>
              <li className="nav-item">
                <motion.div
                  className="container"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <NavLink
                    to="/executives"
                    className="nav-link onPhoneNav"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#61CE70",
                            borderBottom: "2px solid #61CE70",
                          }
                        : { color: "white", borderBottom: "none" }
                    }
                  >
                    Executives
                  </NavLink>
                </motion.div>
              </li>
              <li className="nav-item">
                <motion.div
                  className="container"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <NavLink
                    to="/blog"
                    className="nav-link onPhoneNav"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#61CE70",
                            borderBottom: "2px solid #61CE70",
                          }
                        : { color: "white", borderBottom: "none" }
                    }
                  >
                    Blog
                  </NavLink>
                </motion.div>
              </li>
              <li className="nav-item boxShadow bigScreen">
                <motion.div
                  className="container"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <NavLink
                    to="/login"
                    className="nav-link onPhoneNav"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#61CE70",
                            borderBottom: "2px solid #61CE70",
                          }
                        : { color: "white", borderBottom: "none" }
                    }
                  >
                    Login
                  </NavLink>
                </motion.div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {colorChange ? (
        <div className="fixed-bottom" onClick={scrollToTop}>
          <button className="btn btn-success  float-right">
            <i className="fa-solid fa-chevron-up"></i>
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Nav;
