import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { years } from "../../testData/tesData";
import { BeatLoader } from "react-spinners";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../link/API";
import { authActions } from "../../store/auth-slice";
import BottomSpace from "../../components/bottomSpace";
import FullLoader from "../../components/loader/fullLoader/FullLoader";
import { startWithCase } from "../../utilities/text";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [ongoing, setOngoing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [student_name, setName] = useState("");
  const [dynamicLoader, setDynamicLoader] = useState("");
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth.user);
  const { clearDues } = useSelector(
    (state) => state.auth.user.user_permissions
  );

  const approveOne = useCallback(
    async (setter) => {
      setOngoing(true);
      try {
        //api call for sending the user data to the backend
        await fetch(`${api}/user/exco/clear_students/${id}/dues`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            number: setter,
          }),
        }).then(async (res) => {
          const datai = await res.json();
          if (res.status === 200) {
            setDynamicLoader("");
            setData(datai.rows);
            setData(datai.student_name);
            return setOngoing(false);
          } else if (res.status === 401 || res.status === 403) {
            return dispatch(authActions.logout());
          } else {
            setDynamicLoader("");
            //   setData(datai);
            return setOngoing(false);
          }
        });
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch, token, dynamicLoader, id]
  );

  const getDues = useCallback(async () => {
    try {
      const response = await fetch(`${api}/user/exco/get_students/${id}/dues`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        const datai = await response.json();
        setData(datai.rows);
        setName(datai.student_name);
        return setLoading(false);
      } else if (response.status === 401 || response.status === 403) {
        dispatch(authActions.logout());
      } else {
        // const data = await response.json();
        // lo(false);
        return;
      }
    } catch (error) {
      console.error(error.message);
    }
  }, [token, dispatch, id]);

  useEffect(() => {
    getDues();
  }, [getDues]);

  if (loading) {
    return <FullLoader />;
  } else {
    return (
      <div className="centerDiv fullscreen">
        {/* {years.map((year, i) => {
          return (
            <div className={i > 0 ? "mt-3" : ""} key={`${year.year}_materials`}>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{year.year.replace("_", " ")}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="mt-2 hover">
                    {data.length >= Number(year.year.slice(-1)) ? (
                      <button
                        className="btnct btn btn-secondary"
                        type="button"
                        disabled={true}
                      >
                        Cleared
                      </button>
                    ) : (
                      <button
                        className={
                          dynamicLoader === year.year.slice(-1)
                            ? "btnct btn btn-secondary"
                            : "btn bottomShadow btnct btnct-nunsa"
                        }
                        type="button"
                        disabled={
                          dynamicLoader === year.year.slice(-1) ? true : false
                        }
                        onClick={() => {
                          setDynamicLoader(`${year.year.slice(-1)}`);
                          approveOne(`${year.year.slice(-1)}`);
                        }}
                      >
                        {dynamicLoader.length === 0 ? (
                          "Clear"
                        ) : (
                          <BeatLoader size="12px" color="#fff" loading={true} />
                        )}
                      </button>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })} */}
        <div className="container">
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Dues Clearance Status</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="mt-2">
                {startWithCase(student_name)}
              </Typography>
              <Typography className="mt-2">
                {data.length === 0 ? "Not paid" : "Paid"}
              </Typography>
              <Typography className="mt-2 hover">
                {data.length >= 1 ? (
                  <button
                    className="btnct btn btn-secondary"
                    type="button"
                    disabled={true}
                  >
                    Cleared
                  </button>
                ) : (
                  <button
                    className={
                      dynamicLoader === 1
                        ? "btnct btn btn-secondary"
                        : "btn bottomShadow btnct btnct-nunsa"
                    }
                    type="button"
                    disabled={dynamicLoader === 1 ? true : false}
                    onClick={() => {
                      setDynamicLoader(`1`);
                      approveOne(`1`);
                    }}
                  >
                    {dynamicLoader.length === 0 ? (
                      "Clear"
                    ) : (
                      <BeatLoader size="12px" color="#fff" loading={true} />
                    )}
                  </button>
                )}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <BottomSpace />
      </div>
    );
  }
};

export default Details;
