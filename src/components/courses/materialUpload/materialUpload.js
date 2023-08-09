import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import classes from "../materialUpload/mUpload.module.css";
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
      <div className={`${classes.upload} container hover`}>
        <div className={`${classes.upDisplay}`}>
          <div className="margAuto limiter">
            <PictureAsPdfIcon className={`${classes.sweet} ${classes.pdf}`} />
          </div>
          <p className={`${classes.sweet} ${classes.info} limiter margAuto`}>Select a PDF</p>
        </div>
      </div>
    </MobileDashboard>
  );
};

export default MaterialUpload;
