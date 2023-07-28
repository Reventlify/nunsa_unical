import Background from "../components/background/Background";
import Nav from "../components/layout/navbar/nav";

const Executives = () => {
  const bgText = () => {
    return <span>NUNSA UNICAL EXECUTIVES</span>;
  };
  return (
    <>
      <Nav />
      <Background button={false} text={bgText} />
    </>
  );
};

export default Executives;
