import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import classes from "../mobile/mobile.module.css";
import president from "../../../images/president.jpg";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function MobileDashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "#61ce70" }} position="fixed" open={open}>
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
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        <div className={`${classes.sideBar}`}>
          <div className="container">
            <div className={`container ${classes.foc} shadowB roboroboS edit`}>
              <form className={`d-flex `} role="search">
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
          </div>
        </div>
        <div className={`${classes.layHelp} ${classes.dashGrid}`}>
          <div className={`${classes.content}`}>
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
                <p className="container mt-3">
                  The President of NUNSA UNICAL and his Executives, recognizing
                  the importance of staying technologically up-to-date, took a
                  proactive step by commissioning a developer to create a custom
                  web application for the association. Understanding that the
                  digital ...
                  {/* landscape plays
                a crucial role in modernizing organizations, the President's
                forward-thinking approach aimed to ensure that NUNSA would not
                lag behind in technology. By investing in this web app, the
                association can streamline its operations, enhance communication
                with members, and provide more efficient services to the
                community they serve. This strategic move demonstrates the
                President's commitment to keeping NUNSA relevant and responsive
                in the ever-evolving digital age.*/}
                </p>
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
                <p className="container mt-3">
                  The President of NUNSA UNICAL and his Executives, recognizing
                  the importance of staying technologically up-to-date, took a
                  proactive step by commissioning a developer to create a custom
                  web application for the association. Understanding that the
                  digital ...
                  {/* landscape plays
                a crucial role in modernizing organizations, the President's
                forward-thinking approach aimed to ensure that NUNSA would not
                lag behind in technology. By investing in this web app, the
                association can streamline its operations, enhance communication
                with members, and provide more efficient services to the
                community they serve. This strategic move demonstrates the
                President's commitment to keeping NUNSA relevant and responsive
                in the ever-evolving digital age.*/}
                </p>
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
                <p className="container mt-3">
                  The President of NUNSA UNICAL and his Executives, recognizing
                  the importance of staying technologically up-to-date, took a
                  proactive step by commissioning a developer to create a custom
                  web application for the association. Understanding that the
                  digital ...
                  {/* landscape plays
                a crucial role in modernizing organizations, the President's
                forward-thinking approach aimed to ensure that NUNSA would not
                lag behind in technology. By investing in this web app, the
                association can streamline its operations, enhance communication
                with members, and provide more efficient services to the
                community they serve. This strategic move demonstrates the
                President's commitment to keeping NUNSA relevant and responsive
                in the ever-evolving digital age.*/}
                </p>
              </div>
            </div>
          </div>
          <div className={`${classes.noContent}`}></div>
        </div>
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <Typography className="hover" variant="h6" noWrap component="div">
            Ezra madu
          </Typography>
        </DrawerHeader>
        <Divider />
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
      </Drawer>
    </Box>
  );
}
