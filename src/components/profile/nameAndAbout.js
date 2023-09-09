import { useState } from "react";
import classes from "../profile/profile.module.css";
import truncate from "lodash.truncate";
const text = `Proin faucibus pretium nisl. Pellentesque ut exvel metus laculis
vulputate. In sagittis lectus sed massa pulvinar efficitur. Sed a
dictum magna, id volutpat est. Morbi ullamcorper mauris.`;
const NameAndAbout = ({ user_name, about, sch_session }) => {
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
        <span className={`${classes.name}`}>Edidiong Obodom</span>
      </div>
      <div>
        <span className={`${classes.class} nunsa bold`}>Year 3</span>
      </div>
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
    </div>
  );
};

export default NameAndAbout;
