import { BeatLoader } from "react-spinners";

const CustomLoader = ({ height, size, color }) => {
  return (
    <div className="centerDiv" style={{ height: height }}>
      <BeatLoader
        color={color === undefined ? "#61ce70" : color}
        loading={true}
        size={`${size}px`}
      />
    </div>
  );
};

export default CustomLoader;
