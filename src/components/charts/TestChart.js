// import React, { PureComponent } from 'react';
import truncate from "lodash.truncate";
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
import { electionResult } from "../../testData/tesData";


const CustomizedAxisTick = ({ x, y, stroke, payload }) => {
  return (
    <g style={{ height: "100px" }} transform={`translate(${x},${y})`}>
      <text
        x={10}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-15)"
      >
        {/* {truncate(payload.value, {
          length: 6,
        })} */}
        {payload.value}
      </text>
    </g>
  );
};
const TestChart = () => {
  return (
    <>
      <div className="fullscreen centerDiv">
        <div>
          <BarChart
            width={330}
            height={250}
            data={electionResult}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis
              dataKey={"name"}
              angle={90}
              tick={<CustomizedAxisTick />}
            /> */}
            {/* <XAxis
              label={{
                value: "Candidates",
                angle: -90,
                position: "insideLeft",
              }}
            /> */}
            <XAxis dataKey="name" tick={false}>
              <Label
                value="Presidential Election Result"
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
            {/* <Bar dataKey="votes" fill="#8884d8" /> */}
            <Bar dataKey="votes" fill="#82ca9d">
              <LabelList dataKey="votes" position="top" />
            </Bar>
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
          </BarChart>
        </div>
      </div>
    </>
  );
};

export default TestChart;
