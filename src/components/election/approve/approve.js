import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { startWithCase } from "../../../utilities/text";
import BottomSpace from "../../bottomSpace";
import MobileDashboard from "../../dashboard/mobile/mobile";
import Four0Four from "../../error/404error";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../../link/API";
import { useEffect, useState } from "react";
import { authActions } from "../../../store/auth-slice";
import FullLoader from "../../loader/fullLoader/FullLoader";
import { BeatLoader } from "react-spinners";

const ElectionApprove = () => {
  const dispatch = useDispatch();
  const [applying, setApplying] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [checking, setChecking] = useState(true);
  const [apply, setApply] = useState({});
  const { election, electionCo } = useSelector(
    (state) => state.auth.user.user_permissions
  );

  const approveHandler = async (approveFor) => {
    try {
      setApplying(true);
      //api call for sending the user data to the backend
      const response = await fetch(`${api}/user/candidate_approve`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          candidate_id: approveFor,
        }),
      });

      if (response.status === 401 || response.status === 403) {
        return dispatch(authActions.logout());
      } else if (response.status === 200) {
        const data = await response.json();
        setApply(data);
        return setApplying(false);
      } else {
        const data = await response.json();
        return setApplying(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const checkCurrentApplications = async () => {
      try {
        const response = await fetch(`${api}/user/get_candidate`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.token}`,
          },
        });
        if (response.status === 200) {
          const data = await response.json();
          setApply(data);
          return setChecking(false);
        } else if (response.status === 401 || response.status === 403) {
          dispatch(authActions.logout());
        } else {
          // const data = await response.json();
          setChecking(false);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    checkCurrentApplications();
  }, [dispatch, user.token]);

  if (checking) {
    return <FullLoader />;
  } else {
    if (electionCo) {
      return (
        <MobileDashboard>
          <div className="container marginTopOutrageous">
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{startWithCase("President")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {apply.president.map((details) => {
                  return (
                    <Typography
                      className="hover"
                      //   onClick={() => {
                      //     toPageInitiator("view", year.year);
                      //   }}
                    >
                      <span className="blogText">
                        {startWithCase(details.candidate_name)}
                        {details.candidate_status === "approved" ? (
                          <span className="float-right blogText">Approved</span>
                        ) : (
                          <>
                            {applying ? (
                              <span className="float-right">
                                <BeatLoader
                                  color="#61ce70"
                                  loading={applying}
                                  size={"12px"}
                                />
                              </span>
                            ) : (
                              <span
                                className="float-right nunsa"
                                onClick={() => {
                                  approveHandler(details.candidate_id);
                                }}
                              >
                                Approve
                              </span>
                            )}
                          </>
                        )}
                      </span>
                    </Typography>
                  );
                })}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{startWithCase("vice President")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {apply.vPresident.map((details) => {
                  return (
                    <Typography
                      className="hover"
                      //   onClick={() => {
                      //     toPageInitiator("view", year.year);
                      //   }}
                    >
                      <span className="blogText">
                        {startWithCase(details.candidate_name)}
                        {details.candidate_status === "approved" ? (
                          <span className="float-right blogText">Approved</span>
                        ) : (
                          <>
                            {applying ? (
                              <span className="float-right">
                                <BeatLoader
                                  color="#61ce70"
                                  loading={applying}
                                  size={"12px"}
                                />
                              </span>
                            ) : (
                              <span
                                className="float-right nunsa"
                                onClick={() => {
                                  approveHandler(details.candidate_id);
                                }}
                              >
                                Approve
                              </span>
                            )}
                          </>
                        )}
                      </span>
                    </Typography>
                  );
                })}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{startWithCase("financial secretary")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {apply.finSec.map((details) => {
                  return (
                    <Typography
                      className="hover"
                      //   onClick={() => {
                      //     toPageInitiator("view", year.year);
                      //   }}
                    >
                      <span className="blogText">
                        {startWithCase(details.candidate_name)}
                        {details.candidate_status === "approved" ? (
                          <span className="float-right blogText">Approved</span>
                        ) : (
                          <>
                            {applying ? (
                              <span className="float-right">
                                <BeatLoader
                                  color="#61ce70"
                                  loading={applying}
                                  size={"12px"}
                                />
                              </span>
                            ) : (
                              <span
                                className="float-right nunsa"
                                onClick={() => {
                                  approveHandler(details.candidate_id);
                                }}
                              >
                                Approve
                              </span>
                            )}
                          </>
                        )}
                      </span>
                    </Typography>
                  );
                })}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{startWithCase("general secretary")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {apply.genSec.map((details) => {
                  return (
                    <Typography
                      className="hover"
                      //   onClick={() => {
                      //     toPageInitiator("view", year.year);
                      //   }}
                    >
                      <span className="blogText">
                        {startWithCase(details.candidate_name)}
                        {details.candidate_status === "approved" ? (
                          <span className="float-right blogText">Approved</span>
                        ) : (
                          <>
                            {applying ? (
                              <span className="float-right">
                                <BeatLoader
                                  color="#61ce70"
                                  loading={applying}
                                  size={"12px"}
                                />
                              </span>
                            ) : (
                              <span
                                className="float-right nunsa"
                                onClick={() => {
                                  approveHandler(details.candidate_id);
                                }}
                              >
                                Approve
                              </span>
                            )}
                          </>
                        )}
                      </span>
                    </Typography>
                  );
                })}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{startWithCase("treasurer")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {apply.treasurer.map((details) => {
                  return (
                    <Typography
                      className="hover"
                      //   onClick={() => {
                      //     toPageInitiator("view", year.year);
                      //   }}
                    >
                      <span className="blogText">
                        {startWithCase(details.candidate_name)}
                        {details.candidate_status === "approved" ? (
                          <span className="float-right blogText">Approved</span>
                        ) : (
                          <>
                            {applying ? (
                              <span className="float-right">
                                <BeatLoader
                                  color="#61ce70"
                                  loading={applying}
                                  size={"12px"}
                                />
                              </span>
                            ) : (
                              <span
                                className="float-right nunsa"
                                onClick={() => {
                                  approveHandler(details.candidate_id);
                                }}
                              >
                                Approve
                              </span>
                            )}
                          </>
                        )}
                      </span>
                    </Typography>
                  );
                })}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{startWithCase("director of welfare")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {apply.dirOfWelfare.map((details) => {
                  return (
                    <Typography
                      className="hover"
                      //   onClick={() => {
                      //     toPageInitiator("view", year.year);
                      //   }}
                    >
                      <span className="blogText">
                        {startWithCase(details.candidate_name)}
                        {details.candidate_status === "approved" ? (
                          <span className="float-right blogText">Approved</span>
                        ) : (
                          <>
                            {applying ? (
                              <span className="float-right">
                                <BeatLoader
                                  color="#61ce70"
                                  loading={applying}
                                  size={"12px"}
                                />
                              </span>
                            ) : (
                              <span
                                className="float-right nunsa"
                                onClick={() => {
                                  approveHandler(details.candidate_id);
                                }}
                              >
                                Approve
                              </span>
                            )}
                          </>
                        )}
                      </span>
                    </Typography>
                  );
                })}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{startWithCase("director of socials")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {apply.dirOfSocials.map((details) => {
                  return (
                    <Typography
                      className="hover"
                      //   onClick={() => {
                      //     toPageInitiator("view", year.year);
                      //   }}
                    >
                      <span className="blogText">
                        {startWithCase(details.candidate_name)}
                        {details.candidate_status === "approved" ? (
                          <span className="float-right blogText">Approved</span>
                        ) : (
                          <>
                            {applying ? (
                              <span className="float-right">
                                <BeatLoader
                                  color="#61ce70"
                                  loading={applying}
                                  size={"12px"}
                                />
                              </span>
                            ) : (
                              <span
                                className="float-right nunsa"
                                onClick={() => {
                                  approveHandler(details.candidate_id);
                                }}
                              >
                                Approve
                              </span>
                            )}
                          </>
                        )}
                      </span>
                    </Typography>
                  );
                })}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{startWithCase("director of sports")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {apply.dirOfSports.map((details) => {
                  return (
                    <Typography
                      className="hover"
                      //   onClick={() => {
                      //     toPageInitiator("view", year.year);
                      //   }}
                    >
                      <span className="blogText">
                        {startWithCase(details.candidate_name)}
                        {details.candidate_status === "approved" ? (
                          <span className="float-right blogText">Approved</span>
                        ) : (
                          <>
                            {applying ? (
                              <span className="float-right">
                                <BeatLoader
                                  color="#61ce70"
                                  loading={applying}
                                  size={"12px"}
                                />
                              </span>
                            ) : (
                              <span
                                className="float-right nunsa"
                                onClick={() => {
                                  approveHandler(details.candidate_id);
                                }}
                              >
                                Approve
                              </span>
                            )}
                          </>
                        )}
                      </span>
                    </Typography>
                  );
                })}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{startWithCase("director of health")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {apply.dirOfHealth.map((details) => {
                  return (
                    <Typography
                      className="hover"
                      //   onClick={() => {
                      //     toPageInitiator("view", year.year);
                      //   }}
                    >
                      <span className="blogText">
                        {startWithCase(details.candidate_name)}
                        {details.candidate_status === "approved" ? (
                          <span className="float-right blogText">Approved</span>
                        ) : (
                          <>
                            {applying ? (
                              <span className="float-right">
                                <BeatLoader
                                  color="#61ce70"
                                  loading={applying}
                                  size={"12px"}
                                />
                              </span>
                            ) : (
                              <span
                                className="float-right nunsa"
                                onClick={() => {
                                  approveHandler(details.candidate_id);
                                }}
                              >
                                Approve
                              </span>
                            )}
                          </>
                        )}
                      </span>
                    </Typography>
                  );
                })}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  {startWithCase("director of information")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {apply.dirOfInfo.map((details) => {
                  return (
                    <Typography
                      className="hover"
                      //   onClick={() => {
                      //     toPageInitiator("view", year.year);
                      //   }}
                    >
                      <span className="blogText">
                        {startWithCase(details.candidate_name)}
                        {details.candidate_status === "approved" ? (
                          <span className="float-right blogText">Approved</span>
                        ) : (
                          <>
                            {applying ? (
                              <span className="float-right">
                                <BeatLoader
                                  color="#61ce70"
                                  loading={applying}
                                  size={"12px"}
                                />
                              </span>
                            ) : (
                              <span
                                className="float-right nunsa"
                                onClick={() => {
                                  approveHandler(details.candidate_id);
                                }}
                              >
                                Approve
                              </span>
                            )}
                          </>
                        )}
                      </span>
                    </Typography>
                  );
                })}
              </AccordionDetails>
            </Accordion>
            <BottomSpace />
          </div>
        </MobileDashboard>
      );
    } else {
      return <Four0Four />;
    }
  }
};

export default ElectionApprove;
