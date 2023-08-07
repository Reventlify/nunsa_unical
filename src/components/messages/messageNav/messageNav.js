import classes from "../messageNav/messageNav.module.css";

const MessageNav = ({ navAction, currentPage }) => {
  return (
    <div className={classes.navFixer}>
      <div className={`${classes.nav} container`}>
        <div
          className={`${classes.navChild} nunsa hover`}
          onClick={() => {
            navAction("chats");
          }}
          style={
            currentPage === "chats"
              ? { borderBottom: "2px solid #61ce70", fontWeight: "bold" }
              : {}
          }
        >
          <span>Chats</span>
        </div>
        <div
          className={`${classes.navChild} nunsa hover`}
          onClick={() => {
            navAction("people");
          }}
          style={
            currentPage === "people"
              ? { borderBottom: "2px solid #61ce70", fontWeight: "bold" }
              : {}
          }
        >
          <span>People</span>
        </div>
      </div>
    </div>
  );
};

export default MessageNav;
