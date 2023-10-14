import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { startWithCase } from "../../../utilities/text";
import BottomSpace from "../../bottomSpace";
import MobileDashboard from "../../dashboard/mobile/mobile";
import Four0Four from "../../error/404error";
import { useSelector } from "react-redux";

const ElectionApprove = () => {
  const { election, electionCo } = useSelector(
    (state) => state.auth.user.user_permissions
  );

  if (electionCo) {
    return (
      <MobileDashboard>
        <div className="container marginTopOutrageous">
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{startWithCase("President")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="hover"
                //   onClick={() => {
                //     toPageInitiator("view", year.year);
                //   }}
              >
                <span className="blogText">
                  {startWithCase("bala bulu")}
                  <span className="float-right nunsa">Approve</span>
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{startWithCase("vice President")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="hover"
                //   onClick={() => {
                //     toPageInitiator("view", year.year);
                //   }}
              >
                <span className="blogText">
                  {startWithCase("bala bulu")}
                  <span className="float-right nunsa">Approve</span>
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{startWithCase("financial secretary")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="hover"
                //   onClick={() => {
                //     toPageInitiator("view", year.year);
                //   }}
              >
                <span className="blogText">
                  {startWithCase("bala bulu")}
                  <span className="float-right nunsa">Approve</span>
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{startWithCase("general secretary")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="hover"
                //   onClick={() => {
                //     toPageInitiator("view", year.year);
                //   }}
              >
                <span className="blogText">
                  {startWithCase("bala bulu")}
                  <span className="float-right nunsa">Approve</span>
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{startWithCase("treasurer")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="hover"
                //   onClick={() => {
                //     toPageInitiator("view", year.year);
                //   }}
              >
                <span className="blogText">
                  {startWithCase("bala bulu")}
                  <span className="float-right nunsa">Approve</span>
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{startWithCase("director of welfare")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="hover"
                //   onClick={() => {
                //     toPageInitiator("view", year.year);
                //   }}
              >
                <span className="blogText">
                  {startWithCase("bala bulu")}
                  <span className="float-right nunsa">Approve</span>
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{startWithCase("director of socials")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="hover"
                //   onClick={() => {
                //     toPageInitiator("view", year.year);
                //   }}
              >
                <span className="blogText">
                  {startWithCase("bala bulu")}
                  <span className="float-right nunsa">Approve</span>
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{startWithCase("director of sports")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="hover"
                //   onClick={() => {
                //     toPageInitiator("view", year.year);
                //   }}
              >
                <span className="blogText">
                  {startWithCase("bala bulu")}
                  <span className="float-right nunsa">Approve</span>
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{startWithCase("director of health")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="hover"
                //   onClick={() => {
                //     toPageInitiator("view", year.year);
                //   }}
              >
                <span className="blogText">
                  {startWithCase("bala bulu")}
                  <span className="float-right nunsa">Approve</span>
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {startWithCase("director of information")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="hover"
                //   onClick={() => {
                //     toPageInitiator("view", year.year);
                //   }}
              >
                <span className="blogText">
                  {startWithCase("bala bulu")}
                  <span className="float-right nunsa">Approve</span>
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <BottomSpace />
        </div>
      </MobileDashboard>
    );
  } else {
    return <Four0Four />;
  }
};

export default ElectionApprove;
