import MobileDashboard from "../../components/dashboard/mobile/mobile";
import StudentDash from "../../components/dashboard/studentDash";

const Dashboard = () => {
  return (
    <MobileDashboard>
      <StudentDash searchWhere="Search NUNSA UNICAL..." />
    </MobileDashboard>
  );
};

export default Dashboard;
