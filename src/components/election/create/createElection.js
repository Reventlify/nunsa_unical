import { useState } from "react";
import MobileDashboard from "../../dashboard/mobile/mobile";
import StudentInput from "./createComponents/StudentInput";
import { motion } from "framer-motion";
import { BeatLoader } from "react-spinners";
import classes from "../../login/login.module.css";
import { api } from "../../../link/API";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/auth-slice";

const CreateElection = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [verified, setVerfied] = useState(false);
  const [eleco, setEleco] = useState("");
  const [elecoName, setElecoName] = useState("");
  const [session, setSession] = useState("");
  const [start_date, setDate] = useState("");
  const [start_time, setTime] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!verified) {
      setError(false);
      setErrorMessage("");
      setLoading(true);
      const newEleco = eleco.replace("/", "_");
      const response = await fetch(`${api}/user/verify_eleco/${newEleco}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        setElecoName(data);
        setVerfied(true);
        return setLoading(false);
      } else if (response.status === 401 || response.status === 403) {
        dispatch(authActions.logout());
      } else {
        setLoading(false);
        const data = await response.json();
        setErrorMessage(data);
        return setError(true);
      }
    } else {
      return;
    }
  };

  const setElecoFunc = (data) => {
    setEleco(data);
  };
  return (
    <MobileDashboard>
      <div className="marginTopOutrageous pt-4 container">
        <h4 className="blogText bolder limiter margAuto">CREATE ELECTION</h4>
        <div className="smartContainer">
          <div>
            {error && ( // then if changed flag is false show error message.
              <div className="red">
                <span>{errorMessage}</span>
              </div>
            )}
          </div>
          <form className="" onSubmit={handleSubmit}>
            <StudentInput
              onChange={setElecoFunc}
              verified={verified}
              eleco={eleco}
              elecoName={elecoName}
            />
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
                      <BeatLoader color="#fff" loading={true} size={"12px"} />
                    </>
                  ) : (
                    <>{verified ? "Create Election" : "Verify Eleco"}</>
                  )}
                </button>
              </div>
            </motion.div>
          </form>
        </div>
      </div>
    </MobileDashboard>
  );
};

export default CreateElection;
