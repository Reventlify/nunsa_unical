import { BeatLoader } from "react-spinners";

const CustomLoader = ({ height, size }) => {
  return (
    <div className="centerDiv" style={{ height: height }}>
      <BeatLoader color="#61ce70" loading={true} size={`${size}px`} />
    </div>
  );
};

export default CustomLoader;
