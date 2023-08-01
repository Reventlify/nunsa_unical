import classes from "../dashboard/studentDash.module.css";
import Box from "@mui/material/Box";
import president from "../../images/president.jpg";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MobileDashboard from "./mobile/mobile";
import DashSearchAndNotifications from "./dashSearch&Not/dashSearch&Not";

const StudentDash = ({}) => {
  const [details, setDetails] = useState("");
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open, stuff) => (event) => {
    setDetails(stuff);
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const listBottom = (anchor) => (
    <Box
      sx={{
        height: "60vh",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        overflowY: "auto",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="container">
        <h1 className="mt-2 mb-3">Comments</h1>
        <h5>{details}</h5>
      </div>
    </Box>
  );
  return (
    <>
      <DashSearchAndNotifications />
      <div className={`${classes.layHelp} ${classes.dashGrid}`}>
        <div className={`${classes.content} container`}>
          <div className={`${classes.post} margAuto boxShadow`}>
            <div className={`${classes.postImg}`}>
              <img
                src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/313336548_674588254185403_964964941295928814_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0S5BynH3rDfPLEnYRKNIyU1JeqTLUwvJTUl6pMtTC8q63DFX2hW9EDQpZ-421ZUchU68Eyh9xz4MOHyZc_hxs&_nc_ohc=8WNPXV6yNF0AX_-7dgq&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&oh=00_AfDk4GuES7kMlVHdKo6i7kaBZxBkjnQDLYWNkNS1FE7dHw&oe=64CE266C"
                width="100%"
                height="100%"
                alt="blog post image"
              />
            </div>
            <div className="blogText">
              <div className={`container mt-3 ${classes.opinion}`}>
                <div className={`${classes.like} container`}>
                  <ThumbUpAltIcon className="hover nunsa" />
                  &nbsp;
                  <span className="">563</span>{" "}
                </div>
                <div className={`${classes.comment} centerDivH`}>
                  <div onClick={toggleDrawer("bottom", true, "Eze Chinaza")}>
                    {" "}
                    <ChatBubbleOutlineIcon className="hover" />
                  </div>
                  &nbsp;
                  <span className="">32</span>{" "}
                </div>
                <div className={`${classes.dislike} centerDivR container`}>
                  <ThumbDownOffAltIcon className="hover" />
                  &nbsp;
                  <span className="">23</span>{" "}
                </div>
              </div>
              <div className="container">
                <p className="container mt-3 blogText">
                  <span className="bold">Eze Chinaza</span>&nbsp; The President
                  of NUNSA UNICAL and his Executives, recognizing the importance
                  of...
                  <br />
                  <span className={`hover ${classes.blogFoot} blogFoot`}>
                    more
                  </span>
                  <span className={`mt-2 block ${classes.blogFoot}`}>
                    August 10, 2023
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={`${classes.post} margAuto boxShadow`}>
            <div className={`${classes.postImg}`}>
              <img
                src="https://nigerianfinder.com/wp-content/uploads/2021/04/Best-Universities-for-Nursing-in-Nigeria.jpg"
                width="100%"
                height="100%"
                alt="blog post image"
              />
            </div>
            <div className="blogText">
              <div className={`container mt-3 ${classes.opinion}`}>
                <div className={`${classes.like} container`}>
                  <ThumbUpOffAltIcon className="hover" />
                  &nbsp;
                  <span className="">708</span>{" "}
                </div>
                <div className={`${classes.comment} centerDivH`}>
                  <ChatBubbleOutlineIcon
                    className="hover"
                    onClick={toggleDrawer("bottom", true, "Idang Confidence")}
                  />
                  &nbsp;
                  <span className="">93</span>{" "}
                </div>
                <div className={`${classes.dislike} centerDivR container`}>
                  <ThumbDownAltIcon className="hover nunsa" />
                  &nbsp;
                  <span className="">15</span>{" "}
                </div>
              </div>
              <div className="container">
                <p className="container mt-3 blogText">
                  <span className="bold">Idang Confidence</span>&nbsp; The
                  President of NUNSA UNICAL and his Executives, recognizing the
                  importance of...
                  <br />
                  <span className={`hover ${classes.blogFoot} blogFoot`}>
                    more
                  </span>
                  <span className={`mt-2 block ${classes.blogFoot}`}>
                    August 10, 2023
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={`${classes.post} margAuto boxShadow`}>
            <div className={`${classes.postImg}`}>
              <img
                src={president}
                width="100%"
                height="100%"
                alt="blog post image"
              />
            </div>
            <div className="blogText">
              <div className={`container mt-3 ${classes.opinion}`}>
                <div className={`${classes.like} container`}>
                  <ThumbUpOffAltIcon className="hover" />
                  &nbsp;
                  <span className="">108</span>{" "}
                </div>
                <div className={`${classes.comment} centerDivH`}>
                  <ChatBubbleOutlineIcon
                    className="hover"
                    onClick={toggleDrawer("bottom", true, "Etuku Theophilus")}
                  />
                  &nbsp;
                  <span className="">3</span>{" "}
                </div>
                <div className={`${classes.dislike} centerDivR container`}>
                  <ThumbDownOffAltIcon className="hover" />
                  &nbsp;
                  <span className="">300</span>{" "}
                </div>
              </div>
              <div className="container">
                <p className="container mt-3 blogText">
                  <span className="bold">Etuku Theophilus</span>&nbsp; The
                  President of NUNSA UNICAL and his Executives, recognizing the
                  importance of...
                  <br />
                  <span className={`hover ${classes.blogFoot} blogFoot`}>
                    more
                  </span>
                  <span className={`mt-2 block ${classes.blogFoot}`}>
                    August 10, 2023
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={`${classes.noContent} ${classes.sidebarDis}`}></div> */}
      </div>
      <SwipeableDrawer
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
        onOpen={toggleDrawer("bottom", true)}
      >
        {listBottom("bottom")}
      </SwipeableDrawer>
    </>
  );
};

export default StudentDash;
