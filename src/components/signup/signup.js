import classes from "../login/login.module.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { api } from "../../link/API";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";
import nunsaLogo from "../../images/Nunsalogo.jpg";
import trim from "lodash.trim";

const Signup = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const location = useLocation();
  // values inputed in the form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // email
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  // handle loading on submit
  const [loading, setLoading] = useState(false);
  const [disableButton, setButton] = useState(false);

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

  // takes user back to homepage
  const handlePostBack = () => {
    return navigate("/");
  };

  const onSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setButton(true);
      //api call for sending the user data to the backend
      await fetch(`${api}/auth/sendcode`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
        }),
      }).then(async (res) => {
        const data = await res.json();
        if (res.status !== 200) {
          setDip("block");
          setLoading(false);
          setButton(false);
          return setLoginError(data);
        } else if (res.status === 200) {
          setLoginError(
            "A code has been sent to your email. If you don't see the verification code in your inbox, please check your spam folder."
          );
          setLoading(false);
          setButton(false);
          return setVerifyEmail(true);
        }
      });
    } catch (error) {
      console.error(error);
    }
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
              src={nunsaLogo}
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
              <form className="container" onSubmit={onSubmitEmail}>
                <motion.div
                  className=""
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.0 }}
                >
                  <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">
                      Email address
                    </label>
                    <motion.input
                      // inputMode="numeric"
                      // pattern="[0-9]{9,10}"
                      // className="form-control"
                      // id="idInput"
                      // autoComplete="off"
                      // aria-describedby="idHelp"
                      // onChange={(e) => setEmail(trim(e.target.value))}
                      // required
                      // whileFocus={{ scale: 1.1 }}
                      type="email"
                      className="form-control"
                      id="emailInput"
                      autoComplete="off"
                      aria-describedby="emailHelp"
                      onChange={(e) => setEmail(trim(e.target.value))}
                      required
                      whileFocus={{ scale: 1.1 }}
                    ></motion.input>
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
                        !disableButton
                          ? `btn bottomShadow ${classes.login}`
                          : "btnct btn  btn-secondary"
                      }
                      type="submit"
                      disabled={disableButton}
                    >
                      {loading ? (
                        <>
                          <BeatLoader color="#fff" loading={true} size={"12"} />
                        </>
                      ) : (
                        <>Send Verification Code</>
                      )}
                    </button>
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

export default Signup;
