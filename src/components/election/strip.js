import moment from "moment";
import { startWithCase } from "../../utilities/text";
import screenSize from "../../utilities/screenSize";
import { useEffect, useState } from "react";
import classes from "./strip.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const MainStrip = ({ details }) => {
  const navigate = useNavigate();
  const { election } = useSelector((state) => state.auth.user.user_permissions);
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
    const tomorrow = moment().add(1, "days").format("MMM D, YYYY");
    const today = moment().format("MMM D, YYYY");
    const yesterday = moment().subtract(1, "days").format("MMM D, YYYY");

    if (date === today) {
      return "Today";
    } else if (date === yesterday) {
      return "Yesterday";
    } else {
      return date;
    }
  };

  const divHeight = screenWidth > 750 ? "130px" : "200px";

  if (details.length === 0) {
    return (
      <div
        className={`boxShadow centerDiv roborobo-1 ${election ? "hover" : ""}`}
        style={{ height: divHeight, marginTop: "20vh" }}
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
      <div className="boxShadow roborobo-1">
        <div>
          <div>{supplier.sch_session} Session</div>
          <div>
            {startWithCase(
              `${supplier.student_fname} ${supplier.student_lname}`
            )}
          </div>
        </div>
        <div>
          <div>{startWithCase(supplier.election_status)}</div>
          <div>{isToday(start_date)}</div>
        </div>
      </div>
    );
  }
};
