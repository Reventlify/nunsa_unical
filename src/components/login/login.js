import classes from "../login/login.module.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { api } from "../../link/API";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";
import { login } from "../../store/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import trim from "lodash.trim";

const LoginView = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (isLoggedIn) {
      // If you want to navigate after successful login
      if (pathname === "/login") {
        return navigate("/student/dashboard");
      }
      return;
    }
  }, [isLoggedIn, navigate, pathname]);
  const dispatch = useDispatch();
  // handle loading on submit
  const loading = useSelector((state) => state.auth.loading);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const error = useSelector((state) => state.auth.error);
  // values inputed in the form
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  //password visibility state
  const [show, setshow] = useState(false);
  const [eye, setEye] = useState("fa-eye-slash");
  const pass = useRef();
  // const emailfoc = useRef();


  const handleSignUp = () => {
    navigate("/signup");
  };
  //password visibility handler
  const showPassword = () => {
    setshow(!show);
    show ? setEye("fa-eye-slash") : setEye("fa-eye");
    pass.current.type = show ? "password" : "text";
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      dispatch(login(values));
    } catch (error) {
      console.error(error);
    }
    // .then(() => {
    //   // toast.success("Login Successfully");
    //   navigate("/student/dashboard");
    // });
    // .then(() => {
    //   toast.success("Login Successfully");
    //   navigate("/home");
    // })
    // .catch((error) => {
    //   toast.error("Failed to login");
    // });
    // setErrors(Validate(values))
  };

  // takes user back to homepage
  const handlePostBack = () => {
    return navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: trim(value),
    });
  };

  return (
    <>
      <div className="container">
        <div className="limiter" onClick={handlePostBack}>
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
              {errorMessage && ( // then if changed flag is false show error message.
                <div
                  className="container"
                  style={{ color: "red", display: error ? "block" : "none" }}
                >
                  <span>{errorMessage}</span>
                </div>
              )}
              <form className="container" onSubmit={onSubmitForm}>
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
                      {/* <input
                    type="email"
                    ref={emailfoc}
                    className="form-control"
                    id="exampleInputEmail1"
                    autoComplete="off"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  /> */}
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
                        onClick={showPassword}
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
                      className={`btn bottomShadow ${classes.login}`}
                      type="submit"
                    >
                      {loading ? (
                        <>
                          <BeatLoader color="#fff" loading={true} size={"12"} />
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
                    onClick={handleSignUp}
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
