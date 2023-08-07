import BottomSpace from "../../../bottomSpace";
import CustomLoader from "../../../loader/customLoader/CustomLoader";
import classes from "../conversation/convo.module.css";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";

const Conversation = () => {
  return (
    <>
      <div className={` ${classes.display} mt-2`}>
        <div className="container">
          <div className={classes.leftHelper}>
            <div className={`${classes.convoLeft} paddFull-1 mt-3`}>
              <p>
                The President of NUNSA UNICAL and his Executives, recognizing
                the importance of staying technologically up-to-date, took a
                proactive step by commissioning a developer to create a custom
                web application for the association. Understanding that the
                digital landscape plays a crucial role in modernizing
                organizations, the President's forward-thinking approach aimed
                to ensure that NUNSA would not lag behind in technology. By
                investing in this web app, the association can streamline its
                operations, enhance communication with members, and provide more
                efficient services to the community they serve. This strategic
                move demonstrates the President's commitment to keeping NUNSA
                relevant and responsive in the ever-evolving digital age.
              </p>
            </div>
          </div>
          <div>
            <div className={classes.rightHelper}>
              <div className={`${classes.convoRight} paddFull-1 mt-3`}>
                <p>
                  The President of NUNSA UNICAL and his Executives, recognizing
                  the importance of staying technologically up-to-date, took a
                  proactive step by commissioning a developer to create a custom
                  web application for the association. Understanding that the
                  digital landscape plays a crucial role in modernizing
                  organizations, the President's forward-thinking approach aimed
                  to ensure that NUNSA would not lag behind in technology. By
                  investing in this web app, the association can streamline its
                  operations, enhance communication with members, and provide
                  more efficient services to the community they serve. This
                  strategic move demonstrates the President's commitment to
                  keeping NUNSA relevant and responsive in the ever-evolving
                  digital age.
                </p>
              </div>
            </div>
            <div className={classes.rightHelper}>
              <div className={`${classes.convoRight} paddFull-1 mt-3`}>
                <p>
                  The President of NUNSA UNICAL and his Executives, recognizing
                  the importance of staying technologically up-to-date, took a
                  proactive step by commissioning a developer to create a custom
                  web application for the association. Understanding that the
                  digital landscape plays a crucial role in modernizing
                  organizations, the President's forward-thinking approach aimed
                  to ensure that NUNSA would not lag behind in technology. By
                  investing in this web app, the association can streamline its
                  operations, enhance communication with members, and provide
                  more efficient services to the community they serve. This
                  strategic move demonstrates the President's commitment to
                  keeping NUNSA relevant and responsive in the ever-evolving
                  digital age.
                </p>
              </div>
            </div>
            <div className={classes.leftHelper}>
              <div className={`${classes.convoLeft} paddFull-1 mt-3`}>
                <p>
                  The President of NUNSA UNICAL and his Executives, recognizing
                  the importance of staying technologically up-to-date, took a
                  proactive step by commissioning a developer to create a custom
                  web application for the association. Understanding that the
                  digital landscape plays a crucial role in modernizing
                  organizations, the President's forward-thinking approach aimed
                  to ensure that NUNSA would not lag behind in technology. By
                  investing in this web app, the association can streamline its
                  operations, enhance communication with members, and provide
                  more efficient services to the community they serve. This
                  strategic move demonstrates the President's commitment to
                  keeping NUNSA relevant and responsive in the ever-evolving
                  digital age.
                </p>
              </div>
            </div>
          </div>
        </div>
        <BottomSpace />
      </div>

      <div className={`fixed-bottom bg-white`} style={{ width: "100%" }}>
        <div className="container">
          <form className={`d-flex mb-2 mt-2`} role="search">
            {/* <input
              className={`form-control me-2 b`}
              type="search"
              //   placeholder={search}
              aria-label="Search"
            /> */}
            <textarea
              placeholder="Add a comment..."
              id="IdOfCommentArea"
              //   onBlur={() => {
              //     setStudentOpinion("");
              //     document.getElementById(`IdOfCommentArea`).value = "";
              //   }}
              className={`form-control me-2 b`}
              autoComplete="off"
              autoCorrect="off"
              rows="2"
              aria-describedby="regimeDescriptionHelp"
              // value={regimeDescription}
              //   onChange={(e) => setStudentOpinion(e.target.value)}
              required
            />
            <button
              className="btn bottomShadow btnct btnct-nunsa"
              type="button"
            >
              <SendIcon />
            </button>
          </form>
        </div>
      </div>
      {/* <CustomLoader height={"80vh"} size={"30px"} /> */}
    </>
  );
};

export default Conversation;
