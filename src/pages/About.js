import Background from "../components/background/Background";
import Footer from "../components/layout/footer/footer";
import Nav from "../components/layout/navbar/nav";
import { motion } from "framer-motion";

const About = () => {
  const bgText = () => {
    return <span>ABOUT US</span>;
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
            {/*  */}
            NUNSA UNICAL strives to create a nurturing environment for nursing
            students, fostering their growth and development through a range of
            engaging activities and initiatives. From insightful workshops and
            seminars to impactful community outreach programs, the organization
            is committed to equipping its members with the knowledge and skills
            necessary to excel in their studies and future careers as nurses.
            {/*  */}
            With a strong sense of unity and camaraderie among its members,
            NUNSA UNICAL provides an invaluable platform for networking,
            knowledge-sharing, and mutual support. By actively participating in
            the organization's activities, nursing students can expand their
            horizons and build meaningful connections within the nursing
            community.
            {/*  */}
            Whether you're already a proud member of NUNSA UNICAL or considering
            joining this exceptional organization, your involvement promises to
            enrich your academic journey and contribute to the advancement of
            the nursing profession in Nigeria. Together, let's strive for
            excellence and make a positive impact on the future of nursing.
          </p>
        </div>
      </div>

      {/* About us */}
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
              The Executive Council is responsible for the daily running of the
              association and deals with issues such as publicity, internal and
              external relations, administration, finances, fundraising,
              partnerships, and correspondence. It consists of...
            </p>
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            >
              <button className="btn btn-lg mt-3 mb-5 bottomShadow btnct btnct-nunsa">
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
              src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/313336548_674588254185403_964964941295928814_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0S5BynH3rDfPLEnYRKNIyU1JeqTLUwvJTUl6pMtTC8q63DFX2hW9EDQpZ-421ZUchU68Eyh9xz4MOHyZc_hxs&_nc_ohc=cnYXGcrFsx4AX-61MTX&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&oh=00_AfDVA002Qwp8reA6WNbH7_t_0Xcoa3gEaOLriqq9o5ml-w&oe=64C837AC"
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
