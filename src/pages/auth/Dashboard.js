import { useLocation } from "react-router-dom";
import MobileDashboard from "../../components/dashboard/mobile/mobile";
import StudentDash from "../../components/dashboard/studentDash";
// import Trash from "../../components/dashboard/trash";

const Dashboard = () => {
  const { pathname } = useLocation();

  if (pathname.slice(-9).toLowerCase() === "dashboard") {
    return (
      <MobileDashboard>
        {/* <Trash path={"dashboard"} /> */}
        <StudentDash path={"dashboard"} />
      </MobileDashboard>
    );
  }
};

export default Dashboard;
