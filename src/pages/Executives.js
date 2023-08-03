import Background from "../components/background/Background";
import Footer from "../components/layout/footer/footer";
import Nav from "../components/layout/navbar/nav";

const Executives = () => {
  const bgText = () => {
    return <span>NUNSA UNICAL EXECUTIVES</span>;
  };
  return (
    <>
      <Nav />
      <Background button={false} text={bgText} />
      <Footer />
    </>
  );
};

export default Executives;
