import Background from "../components/background/Background";
import Footer from "../components/layout/footer/footer";
import Nav from "../components/layout/navbar/nav";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import one from "../images/one.jpg";
import two from "../images/two.jpg";
import three from "../images/three.jpg";
import four from "../images/four.jpg";
import first from "../images/first.jpg";
import second from "../images/second.jpg";
import CallIcon from "@mui/icons-material/Call";

const Homepage = () => {
  const navigate = useNavigate();
  const bgText = () => {
    return (
      <span>
        NUNSA UNIVERSITY OF
        <br /> CALABAR CHAPTER
      </span>
    );
  };
  const bgBtAction = () => {
    return navigate("/signup");
  };
  const about = () => {
    return navigate("/about");
  };
  const blog = () => {
    return navigate("/blog");
  };
  const exec = () => {
    return navigate("/executives");
  };
  const patrons = () => {
    return navigate("/executives#patrons");
  };
  return (
    <>
      <Nav />
      <Background
        button={true}
        buttonText="Signup"
        buttonAction={bgBtAction}
        text={bgText}
      />

      {/* welcome */}
      <div className="centerDivH margingTopOutrageous">
        <img
          decoding="async"
          width="50"
          height="50"
          src="https://nunsa.org.ng/wp-content/uploads/2021/07/icons8-stethoscope-50.png"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="centerDivH mt-4 wText container">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="focus center">
            WELCOME TO{" "}
            <span className="nunsa">
              NUNSA
              <br /> UNICAL
            </span>{" "}
            OFFICIAL WEBSITE
          </h1>
        </motion.div>
      </div>

      {/* About us */}
      <div className="container margingTopOutrageous topicFlex">
        <div className="tFlex">
          <div className="container">
            <div className="lineForHeader">
              <h2 className="bolder">ABOUT US</h2>
              <div className="theLine"></div>
            </div>
          </div>
          <div className="container blogText">
            <p className="mt-3">
              The Nigerian Universities Nursing Students' Association (NUNSA),
              University of Calabar (UNICAL) Chapter, is a dynamic and
              student-run academic organization dedicated to promoting academic
              excellence and advancing the nursing profession. Proudly
              affiliated with NUNSA NATIONAL . . .
              {/*, the UNICAL Chapter collaborates
              with nursing students' associations from various universities
              across Nigeria to collectively uplift the standards of nursing
              education and practice.*/}
              {/*  */}
              {/* NUNSA UNICAL strives to create a nurturing environment for nursing
          students, fostering their growth and development through a range of
          engaging activities and initiatives. From insightful workshops and
          seminars to impactful community outreach programs, the organization is
          committed to equipping its members with the knowledge and skills
          necessary to excel in their studies and future careers as nurses. */}
              {/*  */}
              {/* With a strong sense of unity and camaraderie among its members, NUNSA
          UNICAL provides an invaluable platform for networking,
          knowledge-sharing, and mutual support. By actively participating in
          the organization's activities, nursing students can expand their
          horizons and build meaningful connections within the nursing
          community. */}
              {/*  */}
              {/* Whether you're already a proud member of NUNSA UNICAL or considering
          joining this exceptional organization, your involvement promises to
          enrich your academic journey and contribute to the advancement of the
          nursing profession in Nigeria. Together, let's strive for excellence
          and make a positive impact on the future of nursing. */}
            </p>
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            >
              <button
                onClick={about}
                className="btn btn-lg mt-3 mb-5 bottomShadow btnct btnct-nunsa"
              >
                <motion.div
                  className="limiter"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.1 }}
                >
                  Learn more
                </motion.div>
              </button>
            </motion.div>
          </div>
        </div>
        <div className="tFlex">
          <div className="container">
            <img
              className="tImg"
              loading="lazy"
              src="https://nigerianfinder.com/wp-content/uploads/2021/04/Best-Universities-for-Nursing-in-Nigeria.jpg"
              alt="nurse"
            />
          </div>
        </div>
      </div>

      {/* blog post */}
      <div className="margingTopOutrageous container">
        <div className="container">
          <div className="lineForHeader">
            <h2 className="bolder">BLOG POSTS</h2>
            <div className="theLine"></div>
          </div>
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          >
            <button
              onClick={blog}
              className="btn btn-lg mt-3 mb-3 bottomShadow btnct btnct-nunsa"
            >
              <motion.div
                className="limiter"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
              >
                View all
              </motion.div>
            </button>
          </motion.div>
        </div>
        <div className="execGrid container">
          <div className="boxShadow">
            <div className="blogImage hover">
              <img
                src="https://nunsa.org.ng/wp-content/uploads/2023/03/download-2.jpeg"
                width="100%"
                height="100%"
                alt="blog post image"
              />
            </div>
            <div className="blogTitle container mt-4 mb-3">
              <h3 className="container">
                Revolutionizing NUNSA UNICAL with a Custom Web App: Embracing
                the Future
              </h3>
            </div>
            <div className="container blogText">
              <p className="container">
                The President of NUNSA UNICAL and his Executives, recognizing
                the importance of staying technologically up-to-date, took a
                proactive step by commissioning a developer to create a custom
                web application for the association. Understanding that the
                digital ...
                {/* landscape plays
                a crucial role in modernizing organizations, the President's
                forward-thinking approach aimed to ensure that NUNSA would not
                lag behind in technology. By investing in this web app, the
                association can streamline its operations, enhance communication
                with members, and provide more efficient services to the
                community they serve. This strategic move demonstrates the
                President's commitment to keeping NUNSA relevant and responsive
                in the ever-evolving digital age.*/}
              </p>
              <p className="container nunsa bold hover">READ MORE » </p>
            </div>
            <div className="container">
              <div className="container">
                <div className="blogFoot">
                  <p className="mt-2">August 10, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Executives */}
      <div className="margingTopOutrageous container">
        <div className="container">
          <div className="lineForHeader">
            <h2 className="bolder">OUR EXECUTIVES</h2>
            <div className="theLine"></div>
          </div>
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          >
            <button
              onClick={exec}
              className="btn btn-lg mt-3 mb-3 bottomShadow btnct btnct-nunsa"
            >
              <motion.div
                className="limiter"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
              >
                View all
              </motion.div>
            </button>
          </motion.div>
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
                <button className="btn mt-3 mb-5 bottomShadow btnct btnct-white">
                  <a
                    className="nunsa a"
                    rel="noreferrer"
                    target="_blank"
                    href="tel:+2348105185381"
                  >
                    <motion.div
                      className="limiter bold"
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
                <button className="btn mt-3 mb-5 bottomShadow btnct btnct-white">
                  <a
                    className="nunsa a"
                    rel="noreferrer"
                    target="_blank"
                    href="tel:+2348165150422"
                  >
                    <motion.div
                      className="limiter bold"
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
                <button className="btn mt-3 mb-5 bottomShadow btnct btnct-white">
                  <a
                    className="nunsa a"
                    rel="noreferrer"
                    target="_blank"
                    href="tel:+2349038951081"
                  >
                    <motion.div
                      className="limiter bold"
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
                <button className="btn mt-3 bottomShadow btnct btnct-white">
                  <a
                    className="nunsa a"
                    rel="noreferrer"
                    target="_blank"
                    href="tel:+2348142646811"
                  >
                    <motion.div
                      className="limiter bold"
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
      </div>

      {/* Patrons */}
      <div className="margingTopOutrageous container">
        <div className="container">
          <div className="lineForHeader">
            <h2 className="bolder">OUR PATRONS</h2>
            <div className="theLine"></div>
          </div>
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          >
            <button
              onClick={patrons}
              className="btn btn-lg mt-3 bottomShadow btnct btnct-nunsa"
            >
              <motion.div
                className="limiter"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
              >
                View all
              </motion.div>
            </button>
          </motion.div>
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

      {/* FAQs */}
      <div className="margingTopOutrageous container">
        <div className="container">
          <div className="lineForHeader">
            <h2 className="bolder">Frequently Asked Questions(FAQs)</h2>
            <div className="theLine"></div>
          </div>
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          >
            <button
              onClick={patrons}
              className="btn btn-lg mt-3 mb-5 bottomShadow btnct btnct-nunsa"
            >
              <motion.div
                className="limiter"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
              >
                View all
              </motion.div>
            </button>
          </motion.div>
        </div>
        <div className="container blogText">
          <p className="underline hover limiter">
            Who is eligible to register on NUNSA UNICAL's platform?
          </p>
          <p className="underline hover limiter">
            Why was NUNSA UNICAL platform created?
          </p>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Homepage;
