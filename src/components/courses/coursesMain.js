import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import UploadIcon from "@mui/icons-material/Upload";
import BottomSpace from "../bottomSpace";
import { useEffect, useState } from "react";
import MaterialUpload from "./materialUpload/materialUpload";
import Subjects from "./subjects/subjects";

const CoursesMain = () => {
  const [origin, setOrigin] = useState();
  const [descent, setDescent] = useState("");

  const toPageInitiator = (action, value, bool) => {
    if (action === "upload") {
      localStorage.clear("subjects");
      setDescent("upload");
      setOrigin(bool);
      return localStorage.setItem(action, value);
    } else {
      localStorage.clear("upload");
      setDescent("subjects");
      setOrigin(bool);
      return localStorage.setItem(action, value);
    }
  };

  const toHandler = () => {
    if (
      localStorage.getItem("upload") !== null &&
      localStorage.getItem("subjects") === null
    ) {
      return setDescent("upload");
    } else if (
      localStorage.getItem("upload") === null &&
      localStorage.getItem("subjects") !== null
    ) {
      return setDescent("subjects");
    } else {
      return setDescent("");
    }
  };

  const pageHandler = (origin) => {
    setOrigin(origin);
  };
  useEffect(() => {
    if (
      localStorage.getItem("upload") === null &&
      localStorage.getItem("subjects") === null
    ) {
      return setOrigin(true);
    } else {
      toHandler();
      return setOrigin(false);
    }
  }, []);

  if (origin) {
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
              onClick={() => {
                toPageInitiator("subjects", "Year 1", false);
              }}
            >
              <RemoveRedEyeIcon className="nunsa" />
              &nbsp;&nbsp; <span className="blogText">View yr1 courses</span>
            </Typography>
            <Typography
              className="mt-2"
              onClick={() => {
                toPageInitiator("upload", "Year 1", false);
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
              onClick={() => {
                toPageInitiator("subjects", "Year 2", false);
              }}
            >
              <RemoveRedEyeIcon className="nunsa" />
              &nbsp;&nbsp; <span className="blogText">View yr2 courses</span>
            </Typography>
            <Typography
              className="mt-2"
              onClick={() => {
                toPageInitiator("upload", "Year 2", false);
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
              onClick={() => {
                toPageInitiator("subjects", "Year 3", false);
              }}
            >
              <RemoveRedEyeIcon className="nunsa" />
              &nbsp;&nbsp; <span className="blogText">View yr3 courses</span>
            </Typography>
            <Typography
              className="mt-2"
              onClick={() => {
                toPageInitiator("upload", "Year 3", false);
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
              onClick={() => {
                toPageInitiator("subjects", "Year 4", false);
              }}
            >
              <RemoveRedEyeIcon className="nunsa" />
              &nbsp;&nbsp; <span className="blogText">View yr4 courses</span>
            </Typography>
            <Typography
              className="mt-2"
              onClick={() => {
                toPageInitiator("upload", "Year 4", false);
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
              onClick={() => {
                toPageInitiator("subjects", "Year 5", false);
              }}
            >
              <RemoveRedEyeIcon className="nunsa" />
              &nbsp;&nbsp; <span className="blogText">View yr5 courses</span>
            </Typography>
            <Typography
              className="mt-2"
              onClick={() => {
                toPageInitiator("upload", "Year 5", false);
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
  } else {
    return (
      <>
        {descent === "subjects" ? (
          <Subjects pageHandler={pageHandler} />
        ) : (
          <MaterialUpload pageHandler={pageHandler} />
        )}
      </>
    );
  }
};

export default CoursesMain;
