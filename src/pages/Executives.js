import Background from "../components/background/Background";
import Footer from "../components/layout/footer/footer";
import Nav from "../components/layout/navbar/nav";
import one from "../images/one.jpg";
import two from "../images/two.jpg";
import three from "../images/three.jpg";
import four from "../images/four.jpg";
import five from "../images/five.jpg";
import six from "../images/six.jpg";
import seven from "../images/seven.jpg";
import eight from "../images/eight.jpg";
import nine from "../images/nine.jpg";
import ten from "../images/ten.jpg";
import first from "../images/first.jpg";
import second from "../images/second.jpg";
import CallIcon from "@mui/icons-material/Call";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Executives = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash.length > 0) {
      return document.querySelector(`${hash}`).scrollIntoView();
    } else {
      return;
    }
  }, []);
  const bgText = () => {
    return (
      <span>
        NUNSA UNICAL
        <br /> EXECUTIVES
      </span>
    );
  };
  return (
    <>
      <Nav />
      <Background button={false} text={bgText} />
      {/* NUNSA UNICAL EXECUTIVES */}
      <div className="container marginTopOutrageous">
        <div className="container">
          <div className="lineForHeader">
            <h2 className="bolder">OUR ROLE</h2>
            <div className="theLine"></div>
          </div>
        </div>
        <div className="container blogText">
          <p className="mt-3">
            The Executive Council assumes a pivotal and multifaceted role in
            diligently supervising and orchestrating the intricate web of
            day-to-day activities within the association. Their purview extends
            across a diverse spectrum of responsibilities that collectively form
            the operational backbone of the organization. These responsibilities
            encompass an array of essential tasks, including but not limited to,
            orchestrating strategic and impactful publicity campaigns,
            cultivating and nurturing both internal camaraderie and external
            liaisons, adeptly managing and streamlining administrative
            workflows, astutely handling financial matters to ensure fiscal
            stability, pioneering and executing resourceful fundraising
            endeavors, fostering and stewarding collaborative partnerships to
            drive collective goals, and meticulously managing a plethora of
            communications.
            <br />
            <br />
            This esteemed council is composed of a roster of eminent
            individuals, each entrusted with a specialized portfolio that
            synergistically contributes to the association's holistic success.
            At its helm stands the president, a visionary leader who steers the
            organization towards its overarching mission. Working in tandem with
            the president is the vice president, a vital collaborator who lends
            strategic insight and support to the council's collective vision.
            The general secretary, a linchpin of efficient operations, expertly
            coordinates the diverse elements of the association's functioning.
            Assiduously managing financial matters is the financial secretary,
            ensuring that fiscal prudence underpins every initiative. The
            treasurer, a steward of financial health, optimally allocates
            resources to sustain and elevate the association's endeavors.
            <br />
            <br />
            Simultaneously, the council is fortified by the expertise of a
            diverse array of directors, each emblematic of a specialized facet
            of the association's identity. The director of welfare is entrusted
            with nurturing the well-being and morale of the association's
            members. The director of socials orchestrates engaging events and
            activities that foster a sense of community and belonging.
            Meanwhile, the director of sports galvanizes enthusiasts and
            athletes alike, promoting physical well-being and healthy
            competition. The director of health advocates for holistic
            well-being, ensuring members' physical and mental wellness remains a
            top priority. Lastly, the director of information adeptly manages
            communication channels, ensuring that the association's narrative is
            effectively conveyed to its members and the broader community.
            <br />
            <br />
            In summation, the Executive Council's extensive array of
            responsibilities, represented by a cadre of exceptional individuals,
            forms the bedrock upon which the association's vitality and success
            thrive. Their collaborative synergy and unwavering dedication
            underscore the association's ability to adapt, grow, and flourish in
            its pursuit of excellence.
            <br />
            <br />
          </p>
        </div>
        <div className="container">
          <div className="lineForHeader">
            <h2 className="bolder">OUR TEAM</h2>
            <div className="theLine"></div>
          </div>
        </div>
        <div className="blogGrid container">
          {/* an exec */}
          <div className="">
            <div className="execImg hover">
              <img src={one} width="100%" height="100%" alt="PRESIDENT" />
            </div>
            <div className="blogTitle container mt-4">
              <div className="">
                <div className="lineForHeader">
                  <h3 className="bolder">PRESIDENT</h3>
                  <div
                    className="theLine bottomShadow"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h5 className="bold mt-2">Sen. Ezra Madu (Bestie)</h5>
                <button className="btn mt-3 mb-5 bottomShadow btnct btnct-nunsa">
                  <a
                    className="a"
                    rel="noreferrer"
                    target="_blank"
                    href="tel:+2348105185381"
                  >
                    <motion.div
                      className="limiter"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1.1 }}
                    >
                      <CallIcon />
                      &nbsp;Place a call
                    </motion.div>
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* an exec */}
          <div className="">
            <div className="execImg hover">
              <img src={two} width="100%" height="100%" alt="V. PRESIDENT" />
            </div>
            <div className="blogTitle container mt-4">
              <div className="">
                <div className="lineForHeader">
                  <h3 className="bolder">V. PRESIDENT</h3>
                  <div
                    className="theLine bottomShadow"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h5 className="bold mt-2">Nr. Okem Irene Baba</h5>
                <button className="btn mt-3 mb-5 bottomShadow btnct btnct-nunsa">
                  <a
                    className="a"
                    rel="noreferrer"
                    target="_blank"
                    href="tel:+2348165150422"
                  >
                    <motion.div
                      className="limiter"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1.1 }}
                    >
                      <CallIcon />
                      &nbsp;Place a call
                    </motion.div>
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* an exec */}
          <div className="">
            <div className="execImg hover">
              <img
                src={three}
                width="100%"
                height="100%"
                alt="GEN. SECRETARY"
              />
            </div>
            <div className="blogTitle container mt-4">
              <div className="">
                <div className="lineForHeader">
                  <h3 className="bolder">GEN. SECRETARY</h3>
                  <div
                    className="theLine bottomShadow"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h5 className="bold mt-2">Sen. Etukwu Theophilus</h5>
                <button className="btn mt-3 mb-5 bottomShadow btnct btnct-nunsa">
                  <a
                    className="a"
                    rel="noreferrer"
                    target="_blank"
                    href="tel:+2349038951081"
                  >
                    <motion.div
                      className="limiter"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1.1 }}
                    >
                      <CallIcon />
                      &nbsp;Place a call
                    </motion.div>
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* an exec */}
          <div className="">
            <div className="execImg hover">
              <img src={four} width="100%" height="100%" alt="FIN. SECRETARY" />
            </div>
            <div className="blogTitle container mt-4">
              <div className="">
                <div className="lineForHeader">
                  <h3 className="bolder">FIN. SECRETARY</h3>
                  <div
                    className="theLine bottomShadow"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h5 className="bold mt-2">Nr. Ogwu Faith</h5>
                <button className="btn mt-3 bottomShadow btnct btnct-nunsa">
                  <a
                    className="a"
                    rel="noreferrer"
                    target="_blank"
                    href="tel:+2348142646811"
                  >
                    <motion.div
                      className="limiter"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1.1 }}
                    >
                      <CallIcon />
                      &nbsp;Place a call
                    </motion.div>
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* an exec */}
          <div className="">
            <div className="execImg hover">
              <img src={five} width="100%" height="100%" alt="TREASURER" />
            </div>
            <div className="blogTitle container mt-4">
              <div className="">
                <div className="lineForHeader">
                  <h3 className="bolder">TREASURER</h3>
                  <div
                    className="theLine bottomShadow"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h5 className="bold mt-2">Nr. Ejor Ann Ejik</h5>
                <button className="btn mt-3 bottomShadow btnct btnct-nunsa">
                  <a
                    className="a"
                    rel="noreferrer"
                    target="_blank"
                    href="tel:+2347062075976"
                  >
                    <motion.div
                      className="limiter"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1.1 }}
                    >
                      <CallIcon />
                      &nbsp;Place a call
                    </motion.div>
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* an exec */}
          <div className="">
            <div className="execImg hover">
              <img src={six} width="100%" height="100%" alt="DIR. OF WELFARE" />
            </div>
            <div className="blogTitle container mt-4">
              <div className="">
                <div className="lineForHeader">
                  <h3 className="bolder">DIR. OF WELFARE</h3>
                  <div
                    className="theLine bottomShadow"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h5 className="bold mt-2">Hon. Onuoha Amarachi</h5>
                <button className="btn mt-3 bottomShadow btnct btnct-nunsa">
                  <a
                    className="a"
                    rel="noreferrer"
                    target="_blank"
                    href="tel:+2348163894202"
                  >
                    <motion.div
                      className="limiter"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1.1 }}
                    >
                      <CallIcon />
                      &nbsp;Place a call
                    </motion.div>
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* an exec */}
          <div className="">
            <div className="execImg hover">
              <img src={seven} width="100%" height="100%" alt="DIR. SOCIALS" />
            </div>
            <div className="blogTitle container mt-4">
              <div className="">
                <div className="lineForHeader">
                  <h3 className="bolder">DIR. SOCIALS</h3>
                  <div
                    className="theLine bottomShadow"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h5 className="bold mt-2">Nr. Emmanuel Akachukwu</h5>
                <button className="btn mt-3 bottomShadow btnct btnct-nunsa">
                  <a
                    className="a"
                    rel="noreferrer"
                    target="_blank"
                    href="tel:+2348143998803"
                  >
                    <motion.div
                      className="limiter"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1.1 }}
                    >
                      <CallIcon />
                      &nbsp;Place a call
                    </motion.div>
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* an exec */}
          <div className="">
            <div className="execImg hover">
              <img
                src={eight}
                width="100%"
                height="100%"
                alt="DIR. OF SPORTS"
              />
            </div>
            <div className="blogTitle container mt-4">
              <div className="">
                <div className="lineForHeader">
                  <h3 className="bolder">DIR. OF SPORTS</h3>
                  <div
                    className="theLine bottomShadow"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h5 className="bold mt-2">Hon. Songu Clifford</h5>
                <button className="btn mt-3 bottomShadow btnct btnct-nunsa">
                  <a
                    className="a"
                    rel="noreferrer"
                    target="_blank"
                    href="tel:+2348187617398"
                  >
                    <motion.div
                      className="limiter"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1.1 }}
                    >
                      <CallIcon />
                      &nbsp;Place a call
                    </motion.div>
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* an exec */}
          <div className="">
            <div className="execImg hover">
              <img src={nine} width="100%" height="100%" alt="DIR. HEALTH" />
            </div>
            <div className="blogTitle container mt-4">
              <div className="">
                <div className="lineForHeader">
                  <h3 className="bolder">DIR. HEALTH</h3>
                  <div
                    className="theLine bottomShadow"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h5 className="bold mt-2">Nr. Ndukwe Esther</h5>
                <button className="btn mt-3 bottomShadow btnct btnct-nunsa">
                  <a
                    className="a"
                    rel="noreferrer"
                    target="_blank"
                    href="tel:+2349053238947"
                  >
                    <motion.div
                      className="limiter"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1.1 }}
                    >
                      <CallIcon />
                      &nbsp;Place a call
                    </motion.div>
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* an exec */}
          <div className="">
            <div className="execImg hover">
              <img
                src={ten}
                width="100%"
                height="100%"
                alt="DIR. OF INFORMATION"
              />
            </div>
            <div className="blogTitle container mt-4">
              <div className="">
                <div className="lineForHeader">
                  <h3 className="bolder">DIR. OF INFORMATION</h3>
                  <div
                    className="theLine bottomShadow"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h5 className="bold mt-2">Comr. Eze Timothy Ekene</h5>
                <button
                  className="btn mt-3 bottomShadow btnct btnct-nunsa"
                  id="patrons"
                >
                  <a
                    className="a"
                    rel="noreferrer"
                    target="_blank"
                    href="tel:+2348132891348"
                  >
                    <motion.div
                      className="limiter"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1.1 }}
                    >
                      <CallIcon />
                      &nbsp;Place a call
                    </motion.div>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="centerDivH marginTopOutrageous">
          <div className="lineForHeader centerDivH" style={{ width: "100px" }}>
            <div className="theLine"></div>
          </div>
        </div>

        <div className="container marginTopOutrageous">
          <div className="lineForHeader">
            <h2 className="bolder">OUR PATRONS</h2>
            <div className="theLine"></div>
          </div>
        </div>
        <div className="container blogText">
          <p className="mt-3">
            The esteemed NUNSA (Nigerian Universities Nursing Students'
            Association , University of Calabar Chapter) Patrons play a pivotal
            role in shaping the academic and social landscape of the students.
            As visionary mentors and guardians of student interests, the NUNSA
            Unical Patrons provide invaluable guidance, wisdom, and support to
            the student body. With their extensive expertise and experience,
            they serve as beacons of inspiration, instilling a sense of purpose,
            resilience, and community engagement among the students. These
            patrons not only contribute to the academic development of the
            institution but also foster an environment of holistic growth by
            nurturing leadership skills, promoting cultural diversity, and
            advocating for the welfare and well-being of every student. Through
            their dedicated involvement in various academic, cultural, and
            social initiatives, the NUNSA Unical Patrons exemplify the
            embodiment of educational excellence, laying the foundation for a
            brighter future for both the university and its aspiring students.
          </p>
        </div>
        <div className="execGrid container">
          {/* an exec */}
          <div className="">
            <div className="execImg hover">
              <img
                src={first}
                width="100%"
                height="100%"
                alt="HOD. NURSING UNICAL"
              />
            </div>
            <div className="blogTitle container mt-4">
              <div className="">
                <div className="lineForHeader">
                  <h3 className="bolder">HOD. NURSING UNICAL</h3>
                  <div className="theLine"></div>
                </div>
                <h5 className="bold mt-2 mb-4">Prof. Regina Ella</h5>
              </div>
            </div>
          </div>
          <div className="">
            <div className="execImg hover">
              <img
                src={second}
                width="100%"
                height="100%"
                alt="CHAIRMAN STUD. AFFAIRS"
              />
            </div>
            <div className="blogTitle container mt-4">
              <div className="">
                <div className="lineForHeader">
                  <h3 className="bolder">CHAIRMAN STUD. AFFAIRS</h3>
                  <div className="theLine"></div>
                </div>
                <h5 className="bold mt-2 mb-4">Dr. Teresa Achi OSaji</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Executives;
