import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ path }) => {
  const navigate = useNavigate();
  const handleCreation = () => {
    navigate("/student/create_post", {
      state: path,
    });
  };
  return (
    <div className={`fixed-bottom`} style={{ width: "100%" }}>
      <div className="centerDivH">
        <span
          className="boxShadow hover mb-2 circle bg-white"
          onClick={handleCreation}
        >
          <AddCircleIcon className="nunsa" style={{ fontSize: "62px" }} />
        </span>
      </div>
    </div>
  );
};

export default CreatePost;
