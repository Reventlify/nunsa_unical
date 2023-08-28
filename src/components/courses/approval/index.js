import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import { startWithCase } from "../../../utilities/text";
import Typography from "@mui/material/Typography";
import MobileDashboard from "../../dashboard/mobile/mobile";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { testCourses } from "../../../testData/tesData";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { api } from "../../../link/API";
import { authActions } from "../../../store/auth-slice";
import FullLoader from "../../loader/fullLoader/FullLoader";

const Approval = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { year } = useParams();
  // const courses = testCourses;
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { level, token } = useSelector((state) => state.auth.user);
  // const filterer = (level) => {
  //   courses.filter((element) => {
  //   const isDuplicate = uniqueYear.includes(element.session);

  //   if (!isDuplicate) {
  //     uniqueYear.push(element.session);

  //     return true;
  //   }

  //   return false;
  // })
  // };
  const getPendingMaterials = useCallback(async () => {
    try {
      //api call for sending the user data to the backend
      await fetch(`${api}/user/pending_materials/${level}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          setCourses(data);
          return setLoading(false);
        } else if (res.status === 401 || res.status === 403) {
          return dispatch(authActions.logout());
        } else {
          setCourses(data);
          return setLoading(false);
        }
      });
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  useEffect(() => {
    getPendingMaterials();
  }, [getPendingMaterials]);

  const numberOfMaterialsPerAbbr = (abbr, code) => {
    const theLength = courses.filter(
      (item) => item.course_abbr === abbr && item.course_code === code
    ).length;
    return theLength;
  };

  const realFil = (session) => {
    const filt = courses.filter((obj, i) => {
      if (obj.sch_session === session) {
        return (
          i ===
          courses.findIndex(
            (o) =>
              obj.course_abbr === o.course_abbr &&
              obj.course_code === o.course_code
          )
        );
      }
    });
    return filt;
  };
  const filterer = (level) => {
    const filt = courses.filter((obj, index) => {
      return (
        index ===
        courses.findIndex(
          (o) =>
            // obj.year.slice(0, obj.year.length) === level &&
            obj.sch_session === o.sch_session
        )
      );
    });
    return filt;
  };

  const renderer = () => {
    if (typeof courses === "string") {
      return (
        <>
          <MobileDashboard>
            <div className="container margingTopOutrageous">
              <h3>
                <ArrowBackIcon
                  className="hover"
                  onClick={() => {
                    navigate("/student/courses");
                  }}
                />{" "}
                &nbsp;{startWithCase(year.replace("_", " "))} materials awaiting
                approval
              </h3>
              <div className="centerDiv fullscreen-30 container">
                <h4 className="blogText center">{courses}</h4>
              </div>
            </div>
          </MobileDashboard>
        </>
      );
    } else {
      return (
        <MobileDashboard>
          <div className="container margingTopOutrageous">
            <h3>
              <ArrowBackIcon
                className="hover"
                onClick={() => {
                  navigate("/student/courses");
                }}
              />{" "}
              &nbsp;{startWithCase(year.replace("_", " "))} materials awaiting
              approval
            </h3>
          </div>
          {filterer(year.slice(year.length - 1, year.length)).length > 0 ? (
            filterer(year.slice(year.length - 1, year.length)).map(
              (item, i) => {
                return (
                  <>
                    <div className="container" key={item.courseTopicId}>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>{item.sch_session}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {realFil(item.sch_session).map((it, id) => {
                            return (
                              <>
                                <div key={`${it.courseTopicId}ddd`}>
                                  <Typography
                                    className={
                                      id === 0 ? "hover" : "mt-2 hover"
                                    }
                                    // onClick={() => {
                                    //   toPageInitiator("view", "Year_1");
                                    // }}
                                  >
                                    <span className="blogText">
                                      {it.course_abbr.toUpperCase()}&nbsp;
                                      {it.course_code}{" "}
                                      <span className="float-right red">
                                        {numberOfMaterialsPerAbbr(
                                          it.course_abbr,
                                          it.course_code
                                        )}
                                      </span>
                                    </span>
                                  </Typography>
                                </div>
                              </>
                            );
                          })}
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </>
                );
              }
            )
          ) : (
            <>
              <div className="centerDiv fullscreen-30 container">
                <h4 className="blogText center">
                  No material has been uploaded
                </h4>
              </div>
            </>
          )}
        </MobileDashboard>
      );
    }
  };
  if (loading) {
    return <FullLoader />;
  } else {
    return <>{renderer()}</>;
  }
};

export default Approval;
