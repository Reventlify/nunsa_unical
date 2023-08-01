import * as React from "react";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
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
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import AppBar from "@mui/material/AppBar";

export default function MobileDashboard({ children }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
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
        {[
          "Dashboard",
          "Class",
          "Messages",
          "Notifications",
          "Courses",
          "Election",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <NavLink
              to={`/student/${text.toLowerCase()}`}
              className="nav-link onPhoneNav"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#61CE70",
                    }
                  : {}
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <NavLink
                    to={`/student/${text.toLowerCase()}`}
                    className="nav-link onPhoneNav"
                    style={({ isActive }) =>
                      isActive
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
                    ) : (
                      <HowToRegIcon />
                    )}
                  </NavLink>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Support", "Logout"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "#61ce70" }} position="fixed">
        <Toolbar>
          <img
            src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/313336548_674588254185403_964964941295928814_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0S5BynH3rDfPLEnYRKNIyU1JeqTLUwvJTUl6pMtTC8q63DFX2hW9EDQpZ-421ZUchU68Eyh9xz4MOHyZc_hxs&_nc_ohc=8WNPXV6yNF0AX_-7dgq&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&oh=00_AfDk4GuES7kMlVHdKo6i7kaBZxBkjnQDLYWNkNS1FE7dHw&oe=64CE266C"
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
      <main>{children}</main>
      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </Box>
  );
}
