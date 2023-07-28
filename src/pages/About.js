import Background from "../components/background/Background";
import Nav from "../components/layout/navbar/nav";

const About = () => {
    const bgText = () => {
        return (
            <span>ABOUT US</span>
        )
    }
  return (
    <>
      <Nav />
      <Background button={false} text={bgText} />
    </>
  );
};

export default About;
