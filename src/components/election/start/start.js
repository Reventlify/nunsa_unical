import MobileDashboard from "../../dashboard/mobile/mobile";
import { useSelector } from "react-redux";
import Four0Four from "../../error/404error";

const StartElection = () => {
  const { election, electionCo } = useSelector(
    (state) => state.auth.user.user_permissions
  );
  if (electionCo) {
    return (
      <MobileDashboard>
        <div className="fullscreen centerDiv">
          <div className="mb-5">
            <button type="button" class="btn btn-success btn-lg boxShadow">
              Start
            </button>
          </div>
          <div className="mb-5">
            <button type="button" class="btn btn-primary btn-lg boxShadow">
              Conclude
            </button>
          </div>
          <div className="mb-5">
            <button type="button" class="btn btn-danger btn-lg boxShadow">
              Finish
            </button>
          </div>
        </div>
      </MobileDashboard>
    );
  } else {
    return <Four0Four />;
  }
};

export default StartElection;
