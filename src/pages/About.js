import Background from "../components/background/Background";
import Footer from "../components/layout/footer/footer";
import Nav from "../components/layout/navbar/nav";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import president from "../images/president.jpg";
import one from "../images/one.jpg";

const About = () => {
  const navigate = useNavigate();
  const bgText = () => {
    return (
      <span>
        ABOUT NUNSA <br />
        UNICAL
      </span>
    );
  };
  const executives = () => {
    return navigate("/executives");
  };
  return (
    <>
      <Nav />
      <Background button={false} text={bgText} />
      {/* About us */}
      <div className="container margingTopOutrageous">
        <div className="container">
          <div className="lineForHeader">
            <h2 className="bolder">ABOUT US</h2>
            <div className="theLine"></div>
          </div>
        </div>
        <div className="container blogText">
          <p className="mt-3">
            The Nigerian Universities Nursing Students' Association (NUNSA),
            University of Calabar (UNICAL) Chapter, is a dynamic and student-run
            academic organization dedicated to promoting academic excellence and
            advancing the nursing profession. Proudly affiliated with NUNSA
            NATIONAL, the UNICAL Chapter collaborates with nursing students'
            associations from various universities across Nigeria to
            collectively uplift the standards of nursing education and practice.
            <br />
            <br />
            {/*  */}
            NUNSA UNICAL strives to create a nurturing environment for nursing
            students, fostering their growth and development through a range of
            engaging activities and initiatives. From insightful workshops and
            seminars to impactful community outreach programs, the organization
            is committed to equipping its members with the knowledge and skills
            necessary to excel in their studies and future careers as nurses.
            <br />
            <br />
            {/*  */}
            With a strong sense of unity and camaraderie among its members,
            NUNSA UNICAL provides an invaluable platform for networking,
            knowledge-sharing, and mutual support. By actively participating in
            the organization's activities, nursing students can expand their
            horizons and build meaningful connections within the nursing
            community.
            <br />
            <br />
            {/*  */}
            Whether you're already a proud member of NUNSA UNICAL or considering
            joining this exceptional organization, your involvement promises to
            enrich your academic journey and contribute to the advancement of
            the nursing profession in Nigeria. Together, let's strive for
            excellence and make a positive impact on the future of nursing.
          </p>
        </div>
      </div>

      {/* About Nunsa */}
      <div className="container margingTopOutrageous">
        <div className="container">
          <div className="lineForHeader">
            <h2 className="bolder">ABOUT NUNSA</h2>
            <div className="theLine"></div>
          </div>
        </div>
        <div className="container blogText">
          <p className="mt-3">
            The purpose of creating NUNSA was to integrate Nursing students
            across Universities in Nigeria and to allow its members to take
            their vision and making them a reality. NUNSA allows its members to
            create an impact at the local, National and International level on
            many global health topics through carrying out activities.
            <br />
            <br />
            {/*  */}
            The Nigerian Universities Nursing Students’ Association (NUNSA) is
            the only official pre-professional body that caters for the welfare,
            academic progress of all Nigerian Universities students studying to
            be future Nurses across the nation and in Diaspora. Our main aim is
            to motivate and inspire the pristine learning and practice of
            Nursing in tandem with global standards. To attain this, we function
            under the mentorship of the Nursing and Midwifery Council of Nigeria
            (NMCN), motherly care of National Association of Nigeria Nurses and
            Midwives (NANNM), the tutelage of International Council of Nurses
            (ICN), and in affiliation to the West Africa Nursing Students
            Association (WANSA). 3110339891
            <br />
            {/*  */}
          </p>
          <p className="bold hover">
            <a
              className="a nunsa"
              href="https://nunsa.org.ng/history/"
              target="_blank"
            >
              READ MORE »{" "}
            </a>
          </p>
        </div>
      </div>

      {/* Executives */}
      <div className="container margingTopOutrageous topicFlex">
        <div className="tFlex">
          <div className="container">
            <div className="lineForHeader">
              <h2 className="bolder">OUR EXECUTIVES</h2>
              <div className="theLine"></div>
            </div>
          </div>
          <div className="container blogText">
            <p className="mt-3">
              The Executive Council assumes a pivotal and multifaceted role in
              diligently supervising and orchestrating the intricate web of
              day-to-day activities within the association. Their purview
              extends across a diverse spectrum of responsibilities that...
            </p>
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            >
              <button
                onClick={executives}
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
          <div className="container tImgHeight">
            <img
              className="tImg"
              loading="lazy"
              src={one}
              alt="nunsa unical president"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
