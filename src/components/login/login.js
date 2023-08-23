import classes from "../login/login.module.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";
import { login } from "../../store/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import trim from "lodash.trim";

const LoginView = () => {
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { isLoggedIn, errorMessage, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    setDisplayErrorMessage(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (isLoggedIn && pathname === "/login") {
      navigate("/student/dashboard");
    }
  }, [isLoggedIn, navigate, pathname]);

  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [eye, setEye] = useState("fa-eye-slash");
  const pass = useRef();

  // takes user back to homepage
  const toHome = () => {
    return navigate("/");
  };
  const toSignupPage = () => {
    navigate("/signup");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setEye(showPassword ? "fa-eye-slash" : "fa-eye");
    pass.current.type = showPassword ? "password" : "text";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(values));
    setDisplayErrorMessage(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: trim(value),
    });
  };

  const errorMessageStyle = {
    color: "red",
    display: displayErrorMessage ? "block" : "none",
  };
  return (
    <>
      <div className="container">
        <div className="limiter" onClick={toHome}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ from: 0, duration: 1 }}
          >
            <div className="limiter">
              <h5 className="nunsa hover">
                <i className="fa-solid mt-2 fa-chevron-left"></i> Home
              </h5>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="centerDiv fullscreen-10">
          <div className={` mt-2 smartContainer ${classes.bod}`}>
            <img
              className={`block margAuto mb-3`}
              src="https://nunsa.org.ng/wp-content/uploads/2023/03/download-2.jpeg"
              alt="nunsaLogo"
              width="120px"
            />
            <div className="container">
              {errorMessage &&
                displayErrorMessage && ( // then if changed flag is false show error message.
                  <div className="container" style={errorMessageStyle}>
                    <span>{errorMessage}</span>
                  </div>
                )}
              <form className="container" onSubmit={handleSubmit}>
                <motion.div
                  className=""
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.0 }}
                >
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <motion.input
                      name="email"
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      autoComplete="off"
                      aria-describedby="emailHelp"
                      onChange={handleChange}
                      required
                      whileFocus={{ scale: 1.1 }}
                    >
                    </motion.input>
                  </div>
                </motion.div>

                <motion.div
                  className=""
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.0 }}
                >
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <span className={`d-flex ${classes.white}`}>
                      <input
                        name="password"
                        type="password"
                        className="form-control me-2"
                        id="exampleInputPassword1"
                        autoComplete="off"
                        ref={pass}
                        onChange={handleChange}
                        required
                      />
                      <button
                        className={`btn ${classes.eye}`}
                        onClick={togglePasswordVisibility}
                        type="button"
                      >
                        <i className={`fa-regular ${eye}`}></i>
                      </button>
                    </span>
                    <div id="emailHelp" className="form-text">
                      min. 8 characters
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className=""
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.0 }}
                >
                  <div className="d-grid gap-2">
                    <button
                      className={
                        !loading
                          ? `btn bottomShadow ${classes.login}`
                          : "btnct btn  btn-secondary"
                      }
                      type="submit"
                      disabled={loading ? true : false}
                    >
                      {loading ? (
                        <>
                          <BeatLoader
                            color="#fff"
                            loading={true}
                            size={"12px"}
                          />
                        </>
                      ) : (
                        <>Login</>
                      )}
                    </button>
                  </div>
                </motion.div>

                <Link className={`${classes.forgot}`} to="/reset">
                  Forgotten password?
                </Link>

                <hr />
                <h4 className="center mb-3">or</h4>
                <motion.div
                  className=""
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.0 }}
                >
                  <div
                    className={`d-grid gap-2 bottomShadow btn ${classes.signup}`}
                    onClick={toSignupPage}
                  >
                    Signup
                  </div>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LoginView;
