import Background from "../components/background/Background";
import Nav from "../components/layout/navbar/nav";

const Blog = () => {
  const bgText = () => {
    return <span>BLOG POSTS AND ARTICLES</span>;
  };
  return (
    <>
      <Nav />
      <Background button={false} text={bgText} />
    </>
  );
};
export default Blog;
