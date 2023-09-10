import { useCallback, useState } from "react";
import classes from "../profile/profile.module.css";
import truncate from "lodash.truncate";
import { startWithCase } from "../../utilities/text";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { authActions } from "../../store/auth-slice";
import { useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";
import { api } from "../../link/API";

const NameAndAbout = ({ user_name, about, level, role, edit, token }) => {
  let about_me = about;
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const [showEditor, setShowEditor] = useState(false);
  const [editing, setEditing] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const view = () => {
    seeMore ? setSeeMore(false) : setSeeMore(true);
  };
  const editor = () => {
    showEditor ? setShowEditor(false) : setShowEditor(true);
  };
  const truncateHandler = (text) => {
    if (seeMore) {
      return text;
    } else {
      const newText = truncate(text, {
        length: 180,
        // separator: /,? +/,
      });
      return newText;
    }
  };

  const updateAbout = useCallback(
    async (e) => {
      e.preventDefault();
      setEditing(true);
      try {
        //api call for sending the user data to the backend
        await fetch(`${api}/user/edit_about`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            msg,
          }),
        }).then(async (res) => {
          const data = await res.json();
          if (res.status === 401 || res.status === 403) {
            setEditing(false);
            return dispatch(authActions.logout());
          } else if (res.status === 200) {
            dispatch(authActions.updateAbout(data));
            setMsg("");
            setShowEditor(false);
            return setEditing(false);
          } else {
            // setLoading(false);
            // setError(data);
            // setImg(null);
            return setEditing(false);
          }
        });
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch, msg, token]
  );

  return (
    <div className={`container mt-2`}>
      <div>
        <span className={`${classes.name}`}>{user_name}</span>
      </div>
      <div>
        <span className={`${classes.class} nunsa bold`}>
          {level === null || level === undefined
            ? ""
            : level.toLowerCase() !== "alumni"
            ? `Year ${level.slice(0, 1)}`
            : level}
        </span>
      </div>
      {role === "member" ? (
        ""
      ) : (
        <div className="reventlify bold">{`( ${startWithCase(role)} )`}</div>
      )}
      {about_me === null ? (
        ""
      ) : (
        <div className="mt-2">
          <span className={`${classes.about} blogText`}>
            {truncateHandler(about_me)}&nbsp;&nbsp;
            <span className="nunsa hover" onClick={view}>
              {about_me.length >= 180
                ? seeMore
                  ? "See less..."
                  : "See more..."
                : ""}
            </span>
          </span>{" "}
          {edit ? <EditNoteIcon className="hover" onClick={editor} /> : ""}
        </div>
      )}
      {about_me === null && edit ? (
        <span className="hover" onClick={editor}>
          <span className="blogText">About me</span>&nbsp;&nbsp;
          <EditNoteIcon />
        </span>
      ) : (
        ""
      )}
      {showEditor ? (
        <div className={`fixed-bottom bg-white`} style={{ width: "100%" }}>
          <div className="container">
            <form className={`d-flex mb-2 mt-2`} onSubmit={updateAbout}>
              <textarea
                placeholder="Tell us how amazing you are..."
                id="IdOfeditor"
                className={`form-control me-2 b`}
                autoComplete="off"
                autoCorrect="off"
                rows="2"
                aria-describedby="regimeDescriptionHelp"
                value={msg}
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
                required
              />
              <button
                className="btn bottomShadow btnct btnct-nunsa"
                type="submit"
              >
                {editing ? (
                  <BeatLoader color="#fff" size={12} />
                ) : (
                  <EditNoteIcon />
                )}
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NameAndAbout;
