import CustomLoader from "../../loader/customLoader/CustomLoader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import classes from "../chat/chat.module.css";

const Chat = ({ openChat }) => {
  return (
    <div className={`${classes.chat}`}>
      <div className="container">
        <div
          className="limiter hover inline-block"
          onClick={() => {
            localStorage.clear("nunsaChat");
            openChat(true);
          }}
        >
          <span className="hover">
            <ArrowBackIcon />
          </span>
          &nbsp;
          <span className="bolder">Back</span>
        </div>
        <span className="float-right bolder">
          Chat {localStorage.getItem("nunsaChat")}
        </span>
      </div>
      <CustomLoader height={"80vh"} size={"30px"} />
    </div>
  );
};

export default Chat;
