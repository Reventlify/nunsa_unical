import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import UploadIcon from "@mui/icons-material/Upload";
import BottomSpace from "../bottomSpace";
import { useNavigate } from "react-router-dom";

const CoursesMain = () => {
  const navigate = useNavigate();
  const toPageInitiator = (action, value) => {
    if (action.length > 0 && value.length > 0) {
      return navigate(`materials/${action}/${value}`);
    } else {
      return;
    }
  };

  return (
    <div className="container margingTopOutrageous">
      <h4>PDF materials for all levels</h4>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Year 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            className="hover"
            onClick={() => {
              toPageInitiator("view", "Year_1");
            }}
          >
            <RemoveRedEyeIcon className="nunsa" />
            &nbsp;&nbsp; <span className="blogText">View yr1 courses</span>
          </Typography>
          <Typography
            className="mt-2 hover"
            onClick={() => {
              toPageInitiator("upload", "Year_1");
            }}
          >
            <UploadIcon className="nunsa" />
            &nbsp;&nbsp; <span className="blogText">Upload a material</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Year 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            className="hover"
            onClick={() => {
              toPageInitiator("view", "Year_2");
            }}
          >
            <RemoveRedEyeIcon className="nunsa" />
            &nbsp;&nbsp; <span className="blogText">View yr2 courses</span>
          </Typography>
          <Typography
            className="mt-2 hover"
            onClick={() => {
              toPageInitiator("upload", "Year_2");
            }}
          >
            <UploadIcon className="nunsa" />
            &nbsp;&nbsp; <span className="blogText">Upload a material</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Year 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            className="hover"
            onClick={() => {
              toPageInitiator("view", "Year_3");
            }}
          >
            <RemoveRedEyeIcon className="nunsa" />
            &nbsp;&nbsp; <span className="blogText">View yr3 courses</span>
          </Typography>
          <Typography
            className="mt-2 hover"
            onClick={() => {
              toPageInitiator("upload", "Year_3");
            }}
          >
            <UploadIcon className="nunsa" />
            &nbsp;&nbsp; <span className="blogText">Upload a material</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Year 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            className="hover"
            onClick={() => {
              toPageInitiator("view", "Year_4");
            }}
          >
            <RemoveRedEyeIcon className="nunsa" />
            &nbsp;&nbsp; <span className="blogText">View yr4 courses</span>
          </Typography>
          <Typography
            className="mt-2 hover"
            onClick={() => {
              toPageInitiator("upload", "Year_4");
            }}
          >
            <UploadIcon className="nunsa" />
            &nbsp;&nbsp; <span className="blogText">Upload a material</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Year 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            className="hover"
            onClick={() => {
              toPageInitiator("view", "Year_5");
            }}
          >
            <RemoveRedEyeIcon className="nunsa" />
            &nbsp;&nbsp; <span className="blogText">View yr5 courses</span>
          </Typography>
          <Typography
            className="mt-2 hover"
            onClick={() => {
              toPageInitiator("upload", "Year_5");
            }}
          >
            <UploadIcon className="nunsa" />
            &nbsp;&nbsp; <span className="blogText">Upload a material</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <BottomSpace />
    </div>
  );
};

export default CoursesMain;
