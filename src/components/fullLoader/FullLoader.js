import { BeatLoader } from "react-spinners";

const FullLoader = () => {
  return (
    <div className="fullscreen centerDiv">
      <BeatLoader color="#61ce70" loading={true} size={"40px"} />
    </div>
  );
};

export default FullLoader;
