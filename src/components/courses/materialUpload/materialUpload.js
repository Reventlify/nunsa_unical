import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import classes from "../materialUpload/mUpload.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { startWithCase } from "../../../utilities/text";
import MobileDashboard from "../../dashboard/mobile/mobile";
import { useRef, useState } from "react";

const ControlledInput = ({ value, onChange, disabled }) => (
  <input
    value={value}
    onChange={(e) => onChange(e.target.value)}
    id="topic"
    className="form-control boxShadow"
    type="text"
    maxLength="50"
    autoComplete="off"
    disabled={disabled}
    required
  />
);

const MaterialUpload = () => {
  const navigate = useNavigate();
  const { year } = useParams();
  const hiddenFileInput = useRef();
  const [error, setError] = useState("");
  const [dip, setDip] = useState("none");
  const [permittedToType, setPermision] = useState(true);
  const [pdf, setPdf] = useState("");
  const [actualName, setActualName] = useState("");
  const [topic, setTopic] = useState("");
  const [session, setSession] = useState("2021/2022");
  const [courseCode, setCourseCode] = useState("");
  const [lecturer, setLecturer] = useState("");

  // Programatically click the hidden file input element
  // when the Div component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = async (event) => {
    const fileUploaded = event.target.files[0];
    const handleError = fileUploaded.name;
    if (typeof handleError === "undefined") {
      return;
    } else {
      const fileName = fileUploaded.name.slice(0, fileUploaded.name.length - 4);
      console.log(fileUploaded.name);
      if (Number(fileUploaded.size) <= 10 * 1024 * 1024) {
        setActualName(fileUploaded.name);
        setTopic(startWithCase(fileName));
        setPdf(fileUploaded);
        return setPermision(false);
      } else {
        setError("Your file size is larger than 10mb");
        return setDip("block");
      }
    }
  };

  return (
    <MobileDashboard>
      <div className="container margingTopOutrageous">
        <h3>
          <ArrowBackIcon
            className="hover"
            onClick={() => {
              navigate("/student/courses");
            }}
          />
        </h3>
      </div>
      <div
        className={`${classes.upload} container hover`}
        onClick={handleClick}
      >
        <div className={`${classes.upDisplay}`}>
          <div className="margAuto limiter">
            <PictureAsPdfIcon className={`${classes.sweet} ${classes.pdf}`} />
          </div>
          {actualName.length < 1 ? (
            <>
              <p
                className={`${classes.sweet} ${classes.info} limiter margAuto`}
              >
                Select a {startWithCase(year.replace("_", " "))} PDF
              </p>
              <p
                className={`${classes.sweet} ${classes.infoSm} limiter margAuto`}
              >
                Maximum file size 10mb
              </p>
            </>
          ) : (
            <p className={`${classes.sweet} ${classes.info} limiter margAuto`}>
              Selected {actualName}
            </p>
          )}
        </div>
      </div>

      <div className={`${classes.bod} smartContainer`}>
        <div className="container">
          {error && ( // then if changed flag is false show error message.
            <div className="mb-2" style={{ color: "red", display: { dip } }}>
              <span>{error}</span>
            </div>
          )}
          <form>
            <div className="mb-3">
              <label htmlFor="topic" className="form-label">
                Enter PDF Topic
              </label>
              <ControlledInput
                value={topic}
                disabled={permittedToType}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="course_code" className="form-label">
                Enter Course Code
              </label>
              <input
                id="course_code"
                className="form-control boxShadow"
                inputMode="numeric"
                pattern="[0-9]{3,3}"
                maxLength="3"
                autoComplete="off"
                disabled={permittedToType}
                onChange={(e) => setCourseCode(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="topic" className="form-label">
                Enter Lecturers name
              </label>
              <input
                id="topic"
                className="form-control boxShadow"
                type="text"
                maxLength="50"
                autoComplete="off"
                disabled={permittedToType}
                onChange={(e) => setLecturer(e.target.value)}
                required
              />
            </div>
            <div className={`mb-3`}>
              <label htmlFor="session" className="form-label">
                Select Session
              </label>
              <select
                className="form-control boxShadow"
                id="session"
                aria-label="sessionHelp"
                disabled={permittedToType}
                onChange={(e) => setSession(e.target.value)}
              >
                <option defaultValue>2021/2022</option>
                <option>2020/2021</option>
                <option>2019/2020</option>
                <option>2018/2019</option>
                <option>2017/2018</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      {/* hidden input */}
      <input
        type="file"
        accept="application/pdf"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </MobileDashboard>
  );
};

export default MaterialUpload;
