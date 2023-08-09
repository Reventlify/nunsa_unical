import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import { startWithCase } from "../../../utilities/text";
import MobileDashboard from "../../dashboard/mobile/mobile";

const MaterialUpload = () => {
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
          &nbsp; Upload a {startWithCase(year.replace("_", " "))} material
        </h3>
      </div>
    </MobileDashboard>
  );
};

export default MaterialUpload;
