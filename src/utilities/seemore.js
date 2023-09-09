import ParagraphText from "./paragraph";
import truncate from "lodash.truncate";
import { useState } from "react";

const SeeMore = ({ text }) => {
  const [seeMore, setSeeMore] = useState(false);
  const view = () => {
    seeMore ? setSeeMore(false) : setSeeMore(true);
  };
  const truncateHandler = () => {
    if (text.length > 259) {
      if (seeMore) {
        return text;
      } else {
        const newText = truncate(text, {
          length: 260,
          // separator: /,? +/,
        });
        return newText;
      }
    } else {
      return text;
    }
  };

  return (
    <>
      <ParagraphText text={truncateHandler(text)} />
      &nbsp;&nbsp;
      <span className="nunsa hover" onClick={view}>
        {text.length >= 260 ? (seeMore ? "See less..." : "See more...") : ""}
      </span>
    </>
  );
};

export default SeeMore;
