import CustomLoader from "../../loader/customLoader/CustomLoader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Chat = ({ openChat }) => {
  return (
    <div style={{ marginTop: "60px" }}>
      <div className="container">
        <div
          className="limiter inline-block"
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
        <span className="float-right bolder">Chat {localStorage.getItem("nunsaChat")}</span>
      </div>
      <CustomLoader height={"80vh"} size={"30px"} />
    </div>
  );
};

export default Chat;
