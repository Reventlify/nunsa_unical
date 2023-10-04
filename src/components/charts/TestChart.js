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
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "balewa amure",
    // uv: 4000,
    votes: 500,
    amt: 2400,
  },
  {
    name: "suliya chale",
    // uv: 3000,
    votes: 200,
    amt: 2210,
  },
  {
    name: "dan chima",
    // uv: 2000,
    votes: 50,
    amt: 2290,
  },
  {
    name: "bobo D",
    // uv: 2780,
    votes: 450,
    amt: 2000,
  },
];

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
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey={"name"}
              angle={90}
              tick={<CustomizedAxisTick />}
            />
            {/* <XAxis
              label={{
                value: "Candidates",
                angle: -90,
                position: "insideLeft",
              }}
            /> */}
            <YAxis
              label={{
                value: "No Of Votes",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="votes" fill="#8884d8" />
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
          </BarChart>
        </div>
      </div>
    </>
  );
};

export default TestChart;
