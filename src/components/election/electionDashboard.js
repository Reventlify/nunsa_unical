import { startWithCase } from "../../utilities/text";
import MobileDashboard from "../dashboard/mobile/mobile";
import ElectionGraph from "./graph/electionGraph";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { api } from "../../link/API";
import FullLoader from "../loader/fullLoader/FullLoader";

const ElectionDashboard = () => {
  const [checking, setChecking] = useState(true);
  const [apply, setApply] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const setter = (det) => {
    setApply(det);
  };
  useEffect(() => {
    const getVotes = async () => {
      try {
        const response = await fetch(`${api}/user/election_results`, {
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

    getVotes();
  }, [dispatch, user.token]);

  if (checking) {
    return <FullLoader />;
  } else {
    return (
      <MobileDashboard>
        <div className="container marginTopOutrageous">
          <div className="pt-3">
            <div className="">
              <ElectionGraph setter={setter} details={apply.president} seatName={"President"} />
            </div>
            <div className="">
              <ElectionGraph
                setter={setter}
                details={apply.vPresident}
                seatName={"vice President"}
              />
            </div>
            <div className="">
              <ElectionGraph
                setter={setter}
                details={apply.finSec}
                seatName={"financial secretary"}
              />
            </div>
            <div className="">
              <ElectionGraph
                setter={setter}
                details={apply.genSec}
                seatName={"general secretary"}
              />
            </div>
            <div className="">
              <ElectionGraph details={apply.treasurer} seatName={"treasurer"} />
            </div>
            <div className="">
              <ElectionGraph
                setter={setter}
                details={apply.dirOfWelfare}
                seatName={"director of welfare"}
              />
            </div>
            <div className="">
              <ElectionGraph
                setter={setter}
                details={apply.dirOfSocials}
                seatName={"director of socials"}
              />
            </div>
            <div className="">
              <ElectionGraph
                setter={setter}
                details={apply.dirOfSports}
                seatName={"director of sports"}
              />
            </div>
            <div className="">
              <ElectionGraph
                setter={setter}
                details={apply.dirOfHealth}
                seatName={"director of health"}
              />
            </div>
            <div className="">
              <ElectionGraph
                setter={setter}
                details={apply.dirOfInfo}
                seatName={"director of information"}
              />
            </div>
          </div>
        </div>
      </MobileDashboard>
    );
  }
};

export default ElectionDashboard;
