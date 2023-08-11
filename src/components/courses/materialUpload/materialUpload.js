import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { BeatLoader } from "react-spinners";
import classes from "../materialUpload/mUpload.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { startWithCase } from "../../../utilities/text";
import MobileDashboard from "../../dashboard/mobile/mobile";
import { useCallback, useEffect, useRef, useState } from "react";
import Four0Four from "../../error/404error";

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
  const drop = useRef();
  const [error, setError] = useState("");
  const [dip, setDip] = useState("none");
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);
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
      if (
        Number(fileUploaded.size) <= 10 * 1024 * 1024 &&
        handleError.slice(
          Number(handleError.length) - 3,
          Number(handleError.length)
        ) === "pdf"
      ) {
        setError("");
        setDip("none");
        setActualName(fileUploaded.name);
        setTopic(startWithCase(fileName));
        setPdf(fileUploaded);
        setLoading(false);
        return setPermision(false);
      } else if (
        Number(fileUploaded.size) > 10 * 1024 * 1024 &&
        handleError.slice(
          Number(handleError.length) - 3,
          Number(handleError.length)
        ) === "pdf"
      ) {
        setError("Your file size is larger than 10mb");
        return setDip("block");
      } else {
        setError("Please choose a pdf file");
        return setDip("block");
      }
    }
  };

  const uploadMat = async (e) => {
    e.preventDefault();
    try {
      if (
        Number(courseCode.slice(0, 1)) !==
        Number(year.slice(year.length - 1, year.length))
      ) {
        setError(`Please enter a ${year} course`);
        return setDip("block");
      } else {
        setError(`Success!`);
        return setDip("block");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const dropChangeIdentifier = useCallback(() => {
    drop.current.addEventListener("dragover", handleDragOver);
    drop.current.addEventListener("drop", handleDrop);
    return () => {
      drop.current.removeEventListener("dragover", handleDragOver);
      drop.current.removeEventListener("drop", handleDrop);
    };
  });
  useEffect(() => {
    dropChangeIdentifier();
  }, [dropChangeIdentifier]);

  // handles drag over
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // hadndles drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer;
    const fileUploaded = files[0];
    const fileName = files[0].name;

    // if there are files and the file is a pdf drop
    if (
      files &&
      files.length &&
      fileName.slice(Number(fileName.length) - 3, Number(fileName.length)) ===
        "pdf"
    ) {
      setError("");
      setDip("none");
      setActualName(fileName);
      setTopic(startWithCase(fileName));
      setPdf(fileUploaded);
      setLoading(false);
      return setPermision(false);
    } else {
      return;
    }
  };
  if (
    year === "Year_1" ||
    year === "Year_2" ||
    year === "Year_3" ||
    year === "Year_4" ||
    year === "Year_5"
  ) {
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
          ref={drop}
          onClick={handleClick}
        >
          <div className={`${classes.upDisplay}`}>
            <div className="margAuto limiter">
              <PictureAsPdfIcon className={`${classes.sweet} ${classes.pdf}`} />
            </div>
            {actualName.length < 1 ? (
              <>
                <p
                  className={`${classes.sweet} ${classes.info} limiter center margAuto`}
                >
                  <span className={`${classes.big}`}>
                    Drag and drop a {startWithCase(year.replace("_", " "))} PDF,
                    or browse files.
                  </span>
                  <span className={`${classes.small}`}>
                    Select a {startWithCase(year.replace("_", " "))} PDF
                  </span>
                </p>
                <p
                  className={`${classes.sweet} ${classes.infoSm} limiter margAuto`}
                >
                  Maximum file size 10mb
                </p>
              </>
            ) : (
              <p
                className={`${classes.sweet} ${classes.info} center limiter margAuto`}
              >
                Selected {actualName.slice(0, 6)}.pdf
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
            <form onSubmit={uploadMat}>
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
              <div className="d-grid gap-2">
                <button
                  className={
                    !loading
                      ? `btn bottomShadow ${classes.login}`
                      : "btnct btn  btn-secondary"
                  }
                  type="submit"
                  disabled={loading}
                >
                  {loader ? (
                    <>
                      <BeatLoader color="#fff" loading={loader} size={"12"} />
                    </>
                  ) : (
                    <>Upload Material</>
                  )}
                </button>
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
  } else {
    return <Four0Four />;
  }
};

export default MaterialUpload;
