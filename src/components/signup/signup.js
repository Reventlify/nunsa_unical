import classes from "../login/login.module.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { api } from "../../link/API";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";
import nunsaLogo from "../../images/Nunsalogo.jpg";
import trim from "lodash.trim";
import OnSuccess from "../success/onSuccess";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // values inputed in the form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [mName, setMName] = useState("");
  const [lName, setLName] = useState("");
  const [matNo, setMatNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  // email
  const [success, setSuccess] = useState(false);
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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (localStorage.getItem("verification_code") === "Sent") {
      setVerifyEmail(true);
      setLoginError(
        "If you don't see the verification code in your inbox, check your spam folder."
      );
      setDip("block");
    } else if (localStorage.getItem("verification_code") === "Verified") {
      setVerifyEmail(true);
      setEmailVerified(true);
    }
  }, []);

  const toLogin = () => {
    navigate("/login");
  };
  //password visibility handler
  const showPassword = () => {
    setshow(!show);
    show ? setEye("fa-eye-slash") : setEye("fa-eye");
    pass.current.type = show ? "password" : "text";
  };

  // takes user back to homepage
  const handlePostBack = () => {
    localStorage.clear("verification_code");
    localStorage.clear("email");
    localStorage.clear("first_name");
    localStorage.clear("middle_name");
    localStorage.clear("last_name");
    return navigate("/");
  };

  // verification code sender api
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
          fName,
        }),
      }).then(async (res) => {
        const data = await res.json();
        if (res.status !== 200) {
          setDip("block");
          setLoading(false);
          setButton(false);
          return setLoginError(data);
        } else if (res.status === 200) {
          localStorage.setItem("verification_code", "Sent");
          localStorage.setItem("email", email);
          localStorage.setItem("first_name", fName);
          localStorage.setItem("middle_name", mName);
          localStorage.setItem("last_name", lName);
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

  // email verifier api
  const onEmailVerify = async (e) => {
    e.preventDefault();
    setDip("none");
    setLoginError("");
    try {
      setLoading(true);
      setButton(true);
      //api call for sending the user data to the backend
      await fetch(`${api}/auth/verifyemail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          verificationCode,
        }),
      }).then(async (res) => {
        const data = await res.json();
        if (res.status !== 200) {
          setDip("block");
          setLoading(false);
          setButton(false);
          return setLoginError(data);
        } else if (res.status === 200) {
          localStorage.setItem("verification_code", "Verified");
          setEmailVerified(true);
          setButton(false);
          return setLoading(false);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const formDisplay = () => {
    if (!verifyEmail && !emailVerified) {
      return (
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
            <div className="mb-3">
              <label htmlFor="fName" className="form-label">
                First name
              </label>
              <motion.input
                type="text"
                className="form-control"
                autoComplete="off"
                id="fName"
                maxLength={30}
                minLength={2}
                required
                onChange={(e) => setFName(trim(e.target.value))}
                whileFocus={{ scale: 1.1 }}
              ></motion.input>
            </div>
          </motion.div>

          <motion.div
            className=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.0 }}
          >
            <div className="mb-3">
              <label htmlFor="mName" className="form-label">
                Middle name
              </label>
              <motion.input
                type="text"
                className="form-control"
                autoComplete="off"
                id="mName"
                maxLength={30}
                minLength={2}
                required
                onChange={(e) => setMName(trim(e.target.value))}
                whileFocus={{ scale: 1.1 }}
              ></motion.input>
            </div>
          </motion.div>

          <motion.div
            className=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.0 }}
          >
            <div className="mb-3">
              <label htmlFor="lName" className="form-label">
                Last name
              </label>
              <motion.input
                type="text"
                className="form-control"
                autoComplete="off"
                id="lName"
                maxLength={30}
                minLength={2}
                required
                onChange={(e) => setLName(trim(e.target.value))}
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
      );
    } else if (verifyEmail && !emailVerified) {
      return (
        <form className="container" onSubmit={onEmailVerify}>
          <motion.div
            className=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.0 }}
          >
            <div className="mb-3">
              <label htmlFor="vcode" className="form-label">
                verification code
              </label>
              <motion.input
                type="text"
                className="form-control"
                autoComplete="off"
                maxLength={5}
                id="vcode"
                required
                onChange={(e) => setVerificationCode(e.target.value)}
                whileFocus={{ scale: 1.1 }}
              />
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
                  <>Verify Email</>
                )}
              </button>
            </div>
          </motion.div>
        </form>
      );
    } else {
      return (
        <form className="container">
          <motion.div
            className=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.0 }}
          >
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Matric no
              </label>
              <motion.input
                type="text"
                className="form-control"
                id="mat_no"
                autoComplete="off"
                pattern="\d{2}/\d{9}(TR)?"
                title="Please enter a valid value in the format xx/xxxxxxxxx"
                onChange={(e) => setMatNo(e.target.value)}
                whileFocus={{ scale: 1.1 }}
                required
              />
            </div>
          </motion.div>
          <motion.div
            className=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.0 }}
          >
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone no
              </label>
              <motion.input
                type="tell"
                className="form-control"
                id="phone"
                autoComplete="off"
                minLength="11"
                maxLength="11"
                pattern="[0-9]+"
                onChange={(e) => setPhoneNo(e.target.value)}
                whileFocus={{ scale: 1.1 }}
                required
              />
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
                  <>Register</>
                )}
              </button>
            </div>
          </motion.div>
        </form>
      );
    }
  };

  if (!success) {
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
                {formDisplay()}
              </div>
            </div>
          </div>
        </motion.div>
      </>
    );
  } else {
    return <OnSuccess time={3500} to={toLogin} />;
  }
};

export default Signup;
