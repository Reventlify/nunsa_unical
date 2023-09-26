import React, { useEffect, useState } from "react";
import FullLoader from "../../components/loader/fullLoader/FullLoader";
import { api } from "../../link/API";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import MobileDashboard from "../../components/dashboard/mobile/mobile";
import { MainStrip } from "../../components/election/strip";

const Election = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [checking, setChecking] = useState(true);
  const [electionDetails, setDetails] = useState(true);

  useEffect(() => {
    const checkCurrentElection = async () => {
      try {
        const response = await fetch(`${api}/user/get_election`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.token}`,
          },
        });
        if (response.status === 200) {
          const data = await response.json();
          setDetails(data);
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

    checkCurrentElection();
  }, [dispatch, user.token]);

  if (checking) {
    return <FullLoader />;
  } else {
    return (
      <MobileDashboard>
        <div className="marginTopOutrageous fullscreen-20 container pt-4">
          <MainStrip details={electionDetails} />
        </div>
      </MobileDashboard>
    );
  }
};

export default Election;
