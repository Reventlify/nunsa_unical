import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AppBar from "@mui/material/AppBar";
import { useLocation, useNavigate } from "react-router-dom";
import one from "../../../images/one.jpg";
import nunsaLogo from "../../../images/Nunsalogo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/auth-slice";
// import socket from "../../../socket";
import { socket } from "../../../App";
import { startWithCase } from "../../../utilities/text";
import { postsActions } from "../../../store/posts-slice";

export default function MobileDashboard({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const parentPath = pathname.slice(0, 8);
  const childPath = pathname.slice(9, pathname.length);
  const logout = (text) => {
    if (text === "logout") {
      socket.emit(
        "request_disconnect",
        `${user.user_fname} ${user.user_lname}`
      );
      socket.disconnect();
      dispatch(postsActions.clearAllPosts());
      dispatch(authActions.logout());
      dispatch(authActions.tokenExpiry({ tokenExpiry: null }));
      return navigate("/");
    }
    return;
  };
  const linkArr = () => {
    if (user.user_permissions.viewStudents) {
      return [
        "Dashboard",
        "Class",
        "Messages",
        "Notifications",
        "Courses",
        "Election",
        "Students",
      ];
    } else {
      return [
        "Dashboard",
        "Class",
        "Messages",
        "Notifications",
        "Courses",
        "Election",
      ];
    }
  };
  const myProfile = () => {
    navigate(`${parentPath}/profile/${user.user_id}`);
  };
  const pageDerivative = () => {
    if (childPath.indexOf(`/`) === -1) {
      return childPath;
    } else {
      return childPath.substring(0, childPath.indexOf(`/`));
    }
  };
  const [page, setPage] = React.useState(pageDerivative());
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const navMaker = (text) => {
    if (
      text.toLowerCase() === "notifications" ||
      text.toLowerCase() === "election"
    ) {
      return;
    } else {
      return navigate(`${parentPath}/${text}`);
    }
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    // display ? setDisplay(false) : setDisplay(true);
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      // sx={() =>
      //   display
      //     ? {
      //         display: "block",
      //         width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      //       }
      //     : { display: "none" }
      // }
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        className="hover"
        onClick={myProfile}
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "12px",
          paddingLeft: "12px",
        }}
      >
        {user.photo === null ? (
          <AccountCircleIcon
            className="circle"
            style={{
              fontSize: "45px",
              color: "#adadad",
              backgroundColor: "white",
            }}
          />
        ) : (
          <img
            src={user.photo}
            alt="nunsaLogo"
            width="45px"
            height="45px"
            className="round"
          />
        )}{" "}
        &nbsp;&nbsp;&nbsp;
        <div style={{ display: "flex", alignItems: "center" }}>
          <h5
            style={
              page === "profile"
                ? {
                    color: "#61CE70",
                  }
                : {}
            }
          >
            {startWithCase(`${user.user_fname} ${user.user_lname}`)}
          </h5>{" "}
        </div>
      </div>
      <List>
        {linkArr().map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                navMaker(text.toLowerCase());
              }}
            >
              <ListItemIcon
                sx={() =>
                  page === text.toLowerCase()
                    ? {
                        color: "#61CE70",
                      }
                    : {}
                }
              >
                {index === 0 ? (
                  <DashboardIcon />
                ) : index === 1 ? (
                  <SchoolIcon />
                ) : index === 2 ? (
                  <MailIcon />
                ) : index === 3 ? (
                  <NotificationsIcon />
                ) : index === 4 ? (
                  <PictureAsPdfIcon />
                ) : index === 5 ? (
                  <HowToRegIcon />
                ) : (
                  <Diversity3Icon />
                )}
              </ListItemIcon>
              <ListItemText
                sx={() =>
                  page === text.toLowerCase()
                    ? {
                        color: "#61CE70",
                      }
                    : {}
                }
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Support", "Logout"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                logout(text.toLowerCase());
              }}
            >
              <ListItemIcon>
                {index === 0 ? <ContactSupportIcon /> : <LogoutIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    // <Box sx={{ display: "flex" }}>
    <>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "#61ce70" }} position="fixed">
        <Toolbar>
          {user.photo === null ? (
            <AccountCircleIcon
              className="circle"
              style={{
                fontSize: "45px",
                color: "#adadad",
                backgroundColor: "white",
              }}
            />
          ) : (
            <img
              src={user.photo}
              alt="nunsaLogo"
              width="45px"
              height="45px"
              className="round"
            />
          )}
          <Typography
            variant="h6"
            noWrap
            sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}
            component="div"
          >
            <img
              // src="https://nunsa.org.ng/wp-content/uploads/2023/03/download-2.jpeg"
              src={nunsaLogo}
              alt="nunsaLogo"
              width="45px"
              height="45px"
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
      <main>{children}</main>
      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
      {/* </Box> */}
    </>
  );
}
