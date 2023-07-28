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
      <Footer />
    </>
  );
};

export default About;
