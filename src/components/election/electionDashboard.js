import { BeatLoader } from "react-spinners";
import { totalResult } from "../../testData/tesData";
import { startWithCase } from "../../utilities/text";
import MobileDashboard from "../dashboard/mobile/mobile";
import ElectionGraph from "./graph/electionGraph";
import { useState } from "react";

const ElectionDashboard = () => {
  const [ongoing, setOngoing] = useState(false);
  const [dynamicLoader, setDynamicLoader] = useState("");
  return (
    <MobileDashboard>
      <div className="container marginTopOutrageous">
        <div className="pt-3">
          <div className="">
            <ElectionGraph
              details={totalResult.president}
              seatName={"President"}
            />
          </div>
          <div className="">
            <ElectionGraph
              details={totalResult.vPresident}
              seatName={"vice President"}
            />
          </div>
          <div
            className=""
          >
            <ElectionGraph
              details={totalResult.finSec}
              seatName={"financial secretary"}
            />
          </div>
          <div
            className=""
          >
            <ElectionGraph
              details={totalResult.genSec}
              seatName={"general secretary"}
            />
          </div>
          <div
            className=""
          >
            <ElectionGraph
              details={totalResult.treasurer}
              seatName={"treasurer"}
            />
          </div>
          <div
            className=""
          >
            <ElectionGraph
              details={totalResult.dirOfWelfare}
              seatName={"director of welfare"}
            />
          </div>
          <div
            className=""
          >
            <ElectionGraph
              details={totalResult.dirOfSocials}
              seatName={"director of socials"}
            />
          </div>
          <div
            className=""
          >
            <ElectionGraph
              details={totalResult.dirOfSports}
              seatName={"director of sports"}
            />
          </div>
          <div
            className=""
          >
            <ElectionGraph
              details={totalResult.dirOfHealth}
              seatName={"director of health"}
            />
          </div>
          <div
            className=""
          >
            <ElectionGraph
              details={totalResult.dirOfInfo}
              seatName={"director of information"}
            />
          </div>
        </div>
      </div>
    </MobileDashboard>
  );
};

export default ElectionDashboard;
