import classes from "../login/login.module.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { api } from "../../link/API";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";
import trim from "lodash.trim";

const LoginView = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const location = useLocation();
  // values inputed in the form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // handle loading on submit
  const [loading, setLoading] = useState(false);

  //password visibility state
  const [show, setshow] = useState(false);
  const [eye, setEye] = useState("fa-eye-slash");
  const pass = useRef();
  const emailfoc = useRef();
  // error messages and status
  const [loginError, setLoginError] = useState("");
  const [dip, setDip] = useState("none");

  const navigate = useNavigate();

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
      setLoading(true);
      //api call for sending the user data to the backend
      await fetch(`${api}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      }).then(async (res) => {
        const data = await res.json();
        if (res.status !== 200) {
          setDip("block");
          setLoading(false);
          return setLoginError(data);
        } else {
          setLoading(false);
          sessionStorage.setItem("token", "Bearer " + data.token);
          if (location.state === null) {
            return navigate("/dashboard");
          } else {
            return navigate(-1);
          }
          // return navigate("/dashboard");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  // takes user back to homepage
  const handlePostBack = () => {
    return navigate("/");
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
        <div className="centerDiv fullscreen">
          <div className={` mt-2 smartContainer ${classes.bod}`}>
            <img
              className={`block margAuto mb-3`}
              src="https://nunsa.org.ng/wp-content/uploads/2023/03/download-2.jpeg"
              alt="nunsaLogo"
              width="120px"
            />
            <div className="container">
              {loginError && ( // then if changed flag is false show error message.
                <div
                  className="container"
                  style={{ color: "red", display: { dip } }}
                >
                  <span>{loginError}</span>
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
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      autoComplete="off"
                      aria-describedby="emailHelp"
                      onChange={(e) => setEmail(trim(e.target.value))}
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
                        type="password"
                        className="form-control me-2"
                        id="exampleInputPassword1"
                        autoComplete="off"
                        ref={pass}
                        onChange={(e) => setPassword(trim(e.target.value))}
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
