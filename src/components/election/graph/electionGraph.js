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

const ElectionGraph = ({ details, seatName, vote }) => {
  const [ongoing, setOngoing] = useState(false);
  const [dynamicLoader, setDynamicLoader] = useState("");

  const openAndClose = () => {
    ongoing ? setOngoing(false) : setOngoing(true);
  };
  return (
    <>
      <div>
        <button
          className={
            "btn bottomShadow btn-info"
            // ongoing
            //   ? "btnct btn btn-secondary"
            //   : "btn bottomShadow btnct btnct-nunsa"
          }
          type="button"
          // disabled={ongoing ? true : false}
          onClick={openAndClose}
        >
          <span>
            {/* Candidates &nbsp;&nbsp; */}
            {!ongoing ? (
              <KeyboardArrowDownIcon style={{ color: "white" }} />
            ) : (
              <KeyboardArrowUpIcon style={{ color: "white" }} />
            )}
          </span>
        </button>
      </div>
      {ongoing ? (
        <div className="display-flex flex-direction-column mt-3">
          {details.map((candidate) => {
            return (
              <div key={candidate.candidate_id} className="blogText candidateDiv">
                {candidate.candidate_name}{" "}
                <button type="button" className="float-right btn btn-success">
                  Vote
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      <div className="mt-3 container centerDivH">
        <BarChart
          width={330}
          height={250}
          data={details}
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
      </div>
    </>
  );
};

export default ElectionGraph;
