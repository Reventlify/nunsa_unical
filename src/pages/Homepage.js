import Background from "../components/background/Background";
import Footer from "../components/layout/footer/footer";
import Nav from "../components/layout/navbar/nav";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
  const about = () => {
    return navigate("/about");
  };
  const blog = () => {
    return navigate("/blog");
  };
  return (
    <>
      <Nav />
      <Background button={true} buttonText="Signup" text={bgText} />

      {/* welcome */}
      <div class="centerDivH margingTopOutrageous">
        <img
          decoding="async"
          width="50"
          height="50"
          src="https://nunsa.org.ng/wp-content/uploads/2021/07/icons8-stethoscope-50.png"
          alt=""
          loading="lazy"
        />
      </div>
      <div class="centerDivH mt-4 wText container">
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
        <div className="blogGrid container">
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

      {/* footer */}
      <Footer />
    </>
  );
};

export default Homepage;
