import { useState } from "react";
import classes from "../profile/profile.module.css";
import truncate from "lodash.truncate";
import { startWithCase } from "../../utilities/text";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const text = `Proin faucibus pretium nisl. Pellentesque ut exvel metus laculis
vulputate. In sagittis lectus sed massa pulvinar efficitur. Sed a
dictum magna, id volutpat est. Morbi ullamcorper mauris.`;
const NameAndAboutExco = ({ user_name, about, nos_cleared, level, role }) => {
  const navigate = useNavigate();
  const { clearDues } = useSelector(
    (state) => state.auth.user.user_permissions
  );
  const [seeMore, setSeeMore] = useState(false);
  const view = () => {
    seeMore ? setSeeMore(false) : setSeeMore(true);
  };
  const truncateHandler = (text) => {
    if (seeMore) {
      return text;
    } else {
      const newText = truncate(text, {
        length: 180,
        // separator: /,? +/,
      });
      return newText;
    }
  };
  return (
    <div className={`container mt-2`}>
      <div>
        <span className={`${classes.name}`}>{user_name}</span>
      </div>
      <div>
        <span className={`${classes.class} nunsa bold`}>
          {level === null || level === undefined
            ? ""
            : level.toLowerCase() !== "alumni"
            ? `Year ${level.slice(0, 1)}`
            : level}
        </span>
      </div>
      <div className="reventlify bold">{`( ${startWithCase(role)} )`}</div>
      {about === null || about === undefined ? (
        ""
      ) : (
        <div className="mt-2">
          <span className={`${classes.about} blogText`}>
            {truncateHandler(text)}&nbsp;&nbsp;
            <span className="nunsa hover" onClick={view}>
              {text.length >= 180
                ? seeMore
                  ? "See less..."
                  : "See more..."
                : ""}
            </span>
          </span>
        </div>
      )}
      <div className="fixed-bottom container bg-white greatOpacity">
        {!clearDues ? (
          <h4
            className="hover limiter"
            onClick={() => {
              navigate("dues");
            }}
          >
            No Of Sessions Cleared: {nos_cleared}
          </h4>
        ) : (
          <h4 className="">No Of Sessions Cleared: {nos_cleared}</h4>
        )}
      </div>
    </div>
  );
};

export default NameAndAboutExco;
