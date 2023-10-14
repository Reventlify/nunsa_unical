import moment from "moment";
import { startWithCase } from "../../utilities/text";
import screenSize from "../../utilities/screenSize";
import { useEffect, useState } from "react";
import classes from "./strip.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";

export const MainStrip = ({ details }) => {
  const navigate = useNavigate();
  const { election, electionCo } = useSelector(
    (state) => state.auth.user.user_permissions
  );
  const [screenWidth, setScreenWidth] = useState(screenSize());

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(screenSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const create = () => {
    if (election) {
      navigate("creation");
    } else {
      return;
    }
  };
  const supplier = details.length !== 0 ? details[0] : "";
  const start_date =
    details.length !== 0
      ? moment(supplier.start_date).format("MMM D, YYYY")
      : "";

  const isToday = (date) => {
    const theDay = moment(date).format("MMM D, YYYY");
    // const tomorrow = moment(date).add(1, "days").format("MMM D, YYYY");
    const today = moment().format("MMM D, YYYY");
    const yesterday = moment(date).subtract(1, "days").format("MMM D, YYYY");

    if (theDay === today) {
      return "Today";
    } else if (theDay === yesterday) {
      return "Yesterday";
    } else {
      return theDay;
    }
  };

  const timeHandler = () => {
    const theTime = supplier.election_time;
    const start_time = theTime.split(":");
    const newTime = `${start_time[0]}${start_time[1]}${start_time[2]}`;
    return newTime;
  };

  const divHeight = screenWidth > 750 ? "130px" : "200px";

  const toDashboard = () => {
    navigate("dashboard");
  };
  const apply = () => {
    navigate("apply");
  };
  const approve = () => {
    navigate("approve");
  };
  if (details.length === 0) {
    return (
      <div
        className={`boxShadow container centerDiv roborobo-1 ${
          election ? "hover" : ""
        }`}
        style={{ height: divHeight }}
        onClick={create}
      >
        <h2 className="blogText">No Current Election</h2>
        {election ? (
          <p className="nunsa">Create new election..</p>
        ) : (
          <p>Check back later..</p>
        )}
      </div>
    );
  } else {
    return (
      <div className="blogText boxShadow container roborobo-1 pt-3 pb-3">
        <h4 className="bolder">
          Election Details&nbsp;
          {electionCo ? (
            <span className="float-right reventlify hover" onClick={approve}>
              <SettingsIcon />
            </span>
          ) : (
            ""
          )}
        </h4>
        <div>
          <div>
            <span className="nunsa bold">Election Session</span>
            &nbsp;&nbsp;—&nbsp;&nbsp;
            {supplier.sch_session}
          </div>
          <div>
            <span className="black bold">Eleco</span>&nbsp;&nbsp;—&nbsp;&nbsp;
            {startWithCase(
              `${supplier.student_fname} ${supplier.student_lname}`
            )}
          </div>
        </div>
        <div>
          <div>
            <span className="black bold">Election Status</span>
            &nbsp;&nbsp;—&nbsp;&nbsp;
            {startWithCase(supplier.election_status)}
          </div>
          <div>
            <span className="black bold">Election Date</span>
            &nbsp;&nbsp;—&nbsp;&nbsp;
            {isToday(supplier.election_date)}
          </div>
          <div>
            <span className="black bold">Time</span>&nbsp;&nbsp;—&nbsp;&nbsp;
            {moment(timeHandler(), "hmmss").format("h:mm a")}
          </div>
        </div>
        <div
          className="reventlify mt-2 hover limiter"
          // onClick={toDashboard}
        >
          Election dashboard
        </div>
        <div className="reventlify mt-2 hover limiter" onClick={apply}>
          Candidate application
        </div>
      </div>
    );
  }
};
