import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { BeatLoader } from "react-spinners";
import classes from "../materialUpload/mUpload.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { startWithCase } from "../../../utilities/text";
import MobileDashboard from "../../dashboard/mobile/mobile";
import { useCallback, useEffect, useRef, useState } from "react";
import Four0Four from "../../error/404error";
import { api } from "../../../link/API";
import { useSelector, useDispatch } from "react-redux";
import OnSuccess from "../../success/onSuccess";
import { authActions } from "../../../store/auth-slice";
import trim from "lodash.trim";
import truncate from "lodash.truncate";
import CourseAbbrSelector from "./courseAbbrSelector";

const ControlledInput = ({ value, disabled, onChange }) => (
  <input
    value={value}
    onChange={(e) => {
      onChange(e);
    }}
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
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth.user);
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
  const [courseAbbr, setCourseAbbr] = useState("NSC");
  const [lecturer, setLecturer] = useState("");
  const [success, setSuccess] = useState(false);
  const level_year = year;
  const toCourses = () => {
    navigate("/student/courses");
  };
  const handleControlledTopic = (event) => {
    setTopic(event.target.value);
  };
  const course_abbr = (abbr) => {
    setCourseAbbr(abbr);
  };
  // Programatically click the hidden file input element
  // when the Div component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  // converts pdf to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleChange = async (event) => {
    const file = event.target.files[0];
    const converter = await convertToBase64(file);
    const fileUploaded = converter;
    const handleError = file.name;
    if (typeof handleError === "undefined") {
      return;
    } else {
      const fileName = trim(file.name.slice(0, file.name.length - 4));
      if (
        Number(file.size) <= 10 * 1024 * 1024 &&
        handleError.slice(
          Number(handleError.length) - 3,
          Number(handleError.length)
        ) === "pdf"
      ) {
        setError("");
        setDip("none");
        setActualName(file.name);
        setTopic(startWithCase(fileName));
        setPdf(fileUploaded);
        setLoading(false);
        return setPermision(false);
      } else if (
        Number(file.size) > 10 * 1024 * 1024 &&
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
        setError(`Please enter a ${year} course code`);
        return setDip("block");
      } else {
        setLoader(true);
        setLoading(true);
        //api call for sending the user data to the backend
        await fetch(`${api}/user/upload_material`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            pdf,
            topic,
            session,
            courseCode,
            lecturer,
            level_year,
            courseAbbr,
          }),
        }).then(async (res) => {
          const data = await res.json();
          if (res.status === 401 || res.status === 403) {
            setLoader(false);
            setLoading(false);
            return dispatch(authActions.logout());
          } else if (res.status === 200) {
            setLoader(false);
            setLoading(false);
            return setSuccess(true);
          } else {
            setLoader(false);
            setLoading(false);
            setError(data);
            return setDip("block");
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const dropChangeIdentifier = useCallback(() => {
  //   drop.current.addEventListener("dragover", handleDragOver);
  //   drop.current.addEventListener("drop", handleDrop);
  //   return () => {
  //     drop.current.removeEventListener("dragover", handleDragOver);
  //     drop.current.removeEventListener("drop", handleDrop);
  //   };
  // });

  useEffect(() => {
    // handles drag over
    const handleDragOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    // hadndles drop
    const handleDrop = async (e) => {
      e.preventDefault();
      e.stopPropagation();

      const { files } = e.dataTransfer;
      const file = files[0];
      const converter = await convertToBase64(file);
      const fileUploaded = converter;
      const handleError = file.name;
      if (typeof handleError === "undefined") {
        return;
      } else {
        const fileName = trim(file.name.slice(0, file.name.length - 4));
        if (
          Number(file.size) <= 10 * 1024 * 1024 &&
          handleError.slice(
            Number(handleError.length) - 3,
            Number(handleError.length)
          ) === "pdf"
        ) {
          setError("");
          setDip("none");
          setActualName(file.name);
          setTopic(startWithCase(fileName));
          setPdf(fileUploaded);
          setLoading(false);
          return setPermision(false);
        } else if (
          Number(file.size) > 10 * 1024 * 1024 &&
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

    if (drop.current) {
      drop.current.addEventListener("dragover", handleDragOver);
      drop.current.addEventListener("drop", handleDrop);
    }
    return () => {
      if (drop.current) {
        drop.current.removeEventListener("dragover", handleDragOver);
        drop.current.removeEventListener("drop", handleDrop);
      }
    };
  }, []);

  if (!success) {
    // // handles upload
    if (
      year === "Year_1" ||
      year === "Year_2" ||
      year === "Year_3" ||
      year === "Year_4" ||
      year === "Year_5"
    ) {
      return (
        <MobileDashboard>
          <div className="container marginTopOutrageous">
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
                <PictureAsPdfIcon
                  className={`${classes.sweet} ${classes.pdf}`}
                />
              </div>
              {actualName.length < 1 ? (
                <>
                  <p
                    className={`${classes.sweet} ${classes.info} limiter center margAuto`}
                  >
                    <span className={`${classes.big}`}>
                      Drag and drop a {startWithCase(year.replace("_", " "))}{" "}
                      PDF, or browse files.
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
                  Selected{" "}
                  {truncate(trim(actualName), {
                    length: 20,
                    // separator: /,? +/,
                  })}
                </p>
              )}
            </div>
          </div>

          <div className={`${classes.bod} smartContainer`}>
            <div className="container">
              {error && ( // then if changed flag is false show error message.
                <div
                  className="mb-2"
                  style={{ color: "red", display: { dip } }}
                >
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
                    onChange={handleControlledTopic}
                  />
                </div>
                <CourseAbbrSelector
                  abbr={course_abbr}
                  permittedToType={permittedToType}
                />
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
                    <option>2022/2023</option>
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
                        <BeatLoader
                          color="#fff"
                          loading={loader}
                          size={"12px"}
                        />
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
  } else {
    return (
      <OnSuccess
        time={3500}
        to={toCourses}
        message={"Uploaded Successfully !"}
      />
    );
  }
};

export default MaterialUpload;
