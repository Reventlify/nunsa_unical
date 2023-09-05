import { useLocation } from "react-router-dom";
import MobileDashboard from "../../components/dashboard/mobile/mobile";
import StudentDash from "../../components/dashboard/studentDash";

const Class = () => {
  const { pathname } = useLocation();
  if (pathname.slice(-5).toLowerCase() === "class") {
    return (
      <MobileDashboard>
        <StudentDash path={"class"} />
      </MobileDashboard>
    );
  }
};

export default Class;
