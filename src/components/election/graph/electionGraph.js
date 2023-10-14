import truncate from "lodash.truncate";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import { startWithCase } from "../../../utilities/text";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { api } from "../../../link/API";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/auth-slice";

const ElectionGraph = ({ details, seatName, vote, setter }) => {
  const dispatch = useDispatch();
  const [ongoing, setOngoing] = useState(false);
  const [failed, setFailed] = useState(false);
  const [applying, setApplying] = useState(false);
  const [dynamicLoader, setDynamicLoader] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const applyHandler = async (applyFor) => {
    try {
      setFailed(false);
      setApplying(true);
      //api call for sending the user data to the backend
      const response = await fetch(`${api}/user/vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          candidate_id: applyFor,
        }),
      });

      if (response.status === 401 || response.status === 403) {
        return dispatch(authActions.logout());
      } else if (response.status === 200) {
        const data = await response.json();
        setter(data);
        return window.location.reload(true)
      } else {
        return setApplying(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const openAndClose = () => {
    ongoing ? setOngoing(false) : setOngoing(true);
  };
  return (
    <>
      <div>
        <button
          className={
            "btn bottomShadow btn-info mb-3"
            // ongoing
            //   ? "btnct btn btn-secondary"
            //   : "btn bottomShadow btnct btnct-nunsa"
          }
          type="button"
          // disabled={ongoing ? true : false}
          onClick={openAndClose}
        >
          <span>
            {startWithCase(seatName)}&nbsp;
            {!ongoing ? (
              <KeyboardArrowDownIcon style={{ color: "white" }} />
            ) : (
              <KeyboardArrowUpIcon style={{ color: "white" }} />
            )}
          </span>
        </button>
      </div>
      {ongoing ? (
        <div className="display-flex flex-direction-column mt-3 mb-3">
          {details.map((candidate) => {
            return (
              <div
                key={candidate.candidate_id}
                className="blogText candidateDiv"
              >
                {candidate.candidate_name}{" "}
                <button
                  type="button"
                  className={
                    applying
                      ? "float-right btnct btn  btn-secondary"
                      : "float-right btn btn-success"
                  }
                  onClick={() => {
                    applyHandler(candidate.candidate_id);
                  }}
                >
                  {candidate.votes} &nbsp; Vote
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {/* <div className="mt-3 container centerDivH">
        <BarChart
          width={330}
          height={250}
          data={dati}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="candidate_name" tick={false}>
            <Label
              value={`${startWithCase(seatName)}`}
              offset={0}
              position="insideBottom"
            />
          </XAxis>
          <YAxis
            label={{
              value: "No Of Votes",
              angle: -90,
              position: "insideLeft",
              textAnchor: "middle",
            }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="votes" fill="#82ca9d">
            <LabelList dataKey="votes" position="top" />
          </Bar>
        </BarChart>
      </div> */}
    </>
  );
};

export default ElectionGraph;
