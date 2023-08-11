import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import { startWithCase } from "../../../utilities/text";
import Typography from "@mui/material/Typography";
import MobileDashboard from "../../dashboard/mobile/mobile";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { testCourses } from "../../../testData/tesData";

const Subjects = () => {
  const navigate = useNavigate();
  const { year } = useParams();
  const courses = testCourses;
  const unique = [];
  // const filterer = (level) => {
  //   courses.filter((element) => {
  //   const isDuplicate = uniqueYear.includes(element.session);

  //   if (!isDuplicate) {
  //     uniqueYear.push(element.session);

  //     return true;
  //   }

  //   return false;
  // })
  // };

  const realFil = (session) => {
    const filt = courses.filter((obj, i) => {
      if (obj.session === session) {
        return (
          i === courses.findIndex((o) => obj.courseTitle === o.courseTitle)
        );
      }
    });
    return filt;
  };
  const filterer = (level) => {
    const filt = courses.filter((obj, index) => {
      return (
        index ===
        courses.findIndex(
          (o) =>
            obj.year.slice(0, obj.year.length) === level &&
            obj.session === o.session
        )
      );
    });
    return filt;
  };

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
      {filterer(year.slice(year.length - 1, year.length)).length > 0 ? (
        filterer(year.slice(year.length - 1, year.length)).map((item, i) => {
          return (
            <>
              <div className="container" key={item.courseTopicId}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{item.session}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {realFil(item.session).map((it, id) => {
                      return (
                        <>
                        <div  key={`${it.courseTopicId}ddd`}>
                          <Typography
                            className={id === 0 ? "hover" : "mt-2 hover"}
                            // onClick={() => {
                            //   toPageInitiator("view", "Year_1");
                            // }}
                          >
                            <span className="blogText">{it.courseTitle}</span>
                          </Typography>
                          </div>
                        </>
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
              </div>
            </>
          );
        })
      ) : (
        <>
          <div className="centerDiv fullscreen-30 container">
            <h4 className="blogText center">No material has been uploaded</h4>
          </div>
        </>
      )}
    </MobileDashboard>
  );
};

export default Subjects;
