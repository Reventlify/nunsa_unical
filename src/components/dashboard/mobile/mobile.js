import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import classes from "../mobile/mobile.module.css";
import president from "../../../images/president.jpg";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import AppBar from "@mui/material/AppBar";

export default function MobileDashboard() {
  const [drawerOpen, setDrawer] = React.useState(false);
  const [details, setDetails] = React.useState("");
  const [state, setState] = React.useState({
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

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <IconButton onClick={toggleDrawer(anchor, false)}>
          <ChevronRightIcon sx={{ fontSize: "40px" }} />
        </IconButton>
        <div style={{ paddingTop: "12px" }}>
          <h3>Ezra Madu</h3>{" "}
        </div>
      </div>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const listBottom = (anchor) => (
    <Box
      sx={{
        height: "60vh",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <h1>check</h1> */}
      <h1>{details}</h1>
    </Box>
  );

  const handleCommentDrawer = () => {
    //  if (drawerOpen) {
    //    setDrawer(false);
    //  } else {
    //   setDrawer(true);
    //  }

    return setDrawer(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "#61ce70" }} position="fixed">
        <Toolbar>
          <img
            src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/313336548_674588254185403_964964941295928814_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0S5BynH3rDfPLEnYRKNIyU1JeqTLUwvJTUl6pMtTC8q63DFX2hW9EDQpZ-421ZUchU68Eyh9xz4MOHyZc_hxs&_nc_ohc=cnYXGcrFsx4AX-61MTX&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&oh=00_AfDVA002Qwp8reA6WNbH7_t_0Xcoa3gEaOLriqq9o5ml-w&oe=64C837AC"
            alt="nunsaLogo"
            width="45px"
            className="round"
          />
          <Typography
            variant="h6"
            noWrap
            sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}
            component="div"
          >
            <img
              src="https://nunsa.org.ng/wp-content/uploads/2023/03/download-2.jpeg"
              alt="nunsaLogo"
              width="45px"
              className="round"
            />
          </Typography>
          <IconButton
            color="inherit"
            // aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer("right", true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main>
        <div className={`${classes.sideBar}`}>
          <div className="container">
            <div className={`container ${classes.foc} shadowB roboroboS edit`}>
              <form className={`d-flex`} role="search">
                <input
                  className={`form-control me-2 b`}
                  type="search"
                  placeholder="Search NUNSA UNICAL..."
                  aria-label="Search"
                />
                <button
                  className="btn bottomShadow btnct btnct-nunsa"
                  type="button"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>

            <div className={`${classes.sidebarDis} container mt-2`}>
              <div className="lineForHeader">
                <h4 className="bolder">Notifications</h4>
                <div className="theLine"></div>
              </div>
              {/* notifications */}
              <div className={`${classes.notP} mt-3 container bg-white`}>
                <div className={`${classes.notification}`}>
                  <div className={`${classes.notIMG}`}>
                    <img
                      src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/313336548_674588254185403_964964941295928814_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0S5BynH3rDfPLEnYRKNIyU1JeqTLUwvJTUl6pMtTC8q63DFX2hW9EDQpZ-421ZUchU68Eyh9xz4MOHyZc_hxs&_nc_ohc=cnYXGcrFsx4AX-61MTX&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&oh=00_AfDVA002Qwp8reA6WNbH7_t_0Xcoa3gEaOLriqq9o5ml-w&oe=64C837AC"
                      alt="nunsaLogo"
                      width="55px"
                      className="round"
                    />
                  </div>
                  <div className={`${classes.notText} hover blogText`}>
                    <span className="block">
                      <span className="bold">Eze Chinaza</span> made a new post
                      recently.
                    </span>
                    <span className={`block ${classes.notTime}`}>
                      <span className="nunsa">17 hours ago</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className={`${classes.notP} mt-3 container bg-white`}>
                <div className={`${classes.notification}`}>
                  <div className={`${classes.notIMG}`}>
                    <img
                      src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/313336548_674588254185403_964964941295928814_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0S5BynH3rDfPLEnYRKNIyU1JeqTLUwvJTUl6pMtTC8q63DFX2hW9EDQpZ-421ZUchU68Eyh9xz4MOHyZc_hxs&_nc_ohc=cnYXGcrFsx4AX-61MTX&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&oh=00_AfDVA002Qwp8reA6WNbH7_t_0Xcoa3gEaOLriqq9o5ml-w&oe=64C837AC"
                      alt="nunsaLogo"
                      width="55px"
                      className="round"
                    />
                  </div>
                  <div className={`${classes.notText} hover blogText`}>
                    <span className="block">
                      <span className="bold">Eze Chinaza</span> made a new post
                      recently.
                    </span>
                    <span className={`block ${classes.notTime}`}>
                      <span className="nunsa">17 hours ago</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className={`${classes.notP} mt-3 container bg-white`}>
                <div className={`${classes.notification}`}>
                  <div className={`${classes.notIMG}`}>
                    <img
                      src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/313336548_674588254185403_964964941295928814_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0S5BynH3rDfPLEnYRKNIyU1JeqTLUwvJTUl6pMtTC8q63DFX2hW9EDQpZ-421ZUchU68Eyh9xz4MOHyZc_hxs&_nc_ohc=cnYXGcrFsx4AX-61MTX&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&oh=00_AfDVA002Qwp8reA6WNbH7_t_0Xcoa3gEaOLriqq9o5ml-w&oe=64C837AC"
                      alt="nunsaLogo"
                      width="55px"
                      className="round"
                    />
                  </div>
                  <div className={`${classes.notText} hover blogText`}>
                    <span className="block">
                      <span className="bold">Eze Chinaza</span> made a new post
                      recently.
                    </span>
                    <span className={`block ${classes.notTime}`}>
                      <span className="nunsa">17 hours ago</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${classes.layHelp} ${classes.dashGrid}`}>
          <div className={`${classes.content} container`}>
            <div className={`${classes.post} margAuto boxShadow`}>
              <div className={`${classes.postImg}`}>
                <img
                  src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/313336548_674588254185403_964964941295928814_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0S5BynH3rDfPLEnYRKNIyU1JeqTLUwvJTUl6pMtTC8q63DFX2hW9EDQpZ-421ZUchU68Eyh9xz4MOHyZc_hxs&_nc_ohc=cnYXGcrFsx4AX-61MTX&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&oh=00_AfDVA002Qwp8reA6WNbH7_t_0Xcoa3gEaOLriqq9o5ml-w&oe=64C837AC"
                  width="100%"
                  height="100%"
                  alt="blog post image"
                />
              </div>
              <div className="blogText">
                <div className={`container mt-3 ${classes.opinion}`}>
                  <div className={`${classes.like} container`}>
                    <ThumbUpAltIcon className="hover bottomShadowHover nunsa" />
                    &nbsp;
                    <span className="">563</span>{" "}
                  </div>
                  <div className={`${classes.comment} centerDivH`}>
                    <div onClick={toggleDrawer("bottom", true, "Eze Chinaza")}>
                      {" "}
                      <ChatBubbleOutlineIcon className="hover bottomShadowHover" />
                    </div>
                    &nbsp;
                    <span className="">32</span>{" "}
                  </div>
                  <div className={`${classes.dislike} centerDivR container`}>
                    <ThumbDownOffAltIcon className="hover bottomShadowHover" />
                    &nbsp;
                    <span className="">23</span>{" "}
                  </div>
                </div>
                <div className="container">
                  <p className="container mt-3 blogText">
                    <span className="bold">Eze Chinaza</span>&nbsp; The
                    President of NUNSA UNICAL and his Executives, recognizing
                    the importance of...
                    <br />
                    <span className={`hover ${classes.blogFoot} blogFoot`}>
                      more
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
                    <ThumbUpOffAltIcon className="hover bottomShadowHover" />
                    &nbsp;
                    <span className="">708</span>{" "}
                  </div>
                  <div className={`${classes.comment} centerDivH`}>
                    <ChatBubbleOutlineIcon
                      className="hover bottomShadowHover"
                      onClick={toggleDrawer("bottom", true, "Idang Confidence")}
                    />
                    &nbsp;
                    <span className="">93</span>{" "}
                  </div>
                  <div className={`${classes.dislike} centerDivR container`}>
                    <ThumbDownAltIcon className="hover bottomShadowHover nunsa" />
                    &nbsp;
                    <span className="">15</span>{" "}
                  </div>
                </div>
                <div className="container">
                  <p className="container mt-3 blogText">
                    <span className="bold">Idang Confidence</span>&nbsp; The
                    President of NUNSA UNICAL and his Executives, recognizing
                    the importance of...
                    <br />
                    <span className={`hover ${classes.blogFoot} blogFoot`}>
                      more
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
                    <ThumbUpOffAltIcon className="hover bottomShadowHover" />
                    &nbsp;
                    <span className="">108</span>{" "}
                  </div>
                  <div className={`${classes.comment} centerDivH`}>
                    <ChatBubbleOutlineIcon
                      className="hover bottomShadowHover"
                      onClick={toggleDrawer("bottom", true, "Etuku Theophilus")}
                    />
                    &nbsp;
                    <span className="">3</span>{" "}
                  </div>
                  <div className={`${classes.dislike} centerDivR container`}>
                    <ThumbDownOffAltIcon className="hover bottomShadowHover" />
                    &nbsp;
                    <span className="">300</span>{" "}
                  </div>
                </div>
                <div className="container">
                  <p className="container mt-3 blogText">
                    <span className="bold">Etuku Theophilus</span>&nbsp; The
                    President of NUNSA UNICAL and his Executives, recognizing
                    the importance of...
                    <br />
                    <span className={`hover ${classes.blogFoot} blogFoot`}>
                      more
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${classes.noContent} ${classes.sidebarDis}`}></div> */}
        </div>
      </main>
      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
        onOpen={toggleDrawer("bottom", true)}
      >
        {listBottom("bottom")}
      </SwipeableDrawer>
    </Box>
  );
}
