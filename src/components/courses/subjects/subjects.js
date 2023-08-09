import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import { startWithCase } from "../../../utilities/text";
import MobileDashboard from "../../dashboard/mobile/mobile";

const Subjects = () => {
  const navigate = useNavigate();
  const { year } = useParams();
  return (
    <MobileDashboard>
      <div className="container margingTopOutrageous">
        <h3>
          <ArrowBackIcon
            className="hover"
            onClick={() => {
              navigate("/student/courses");
            }}
          />{" "}
          &nbsp; View {startWithCase(year.replace("_", " "))} materials
        </h3>
      </div>
    </MobileDashboard>
  );
};

export default Subjects;
