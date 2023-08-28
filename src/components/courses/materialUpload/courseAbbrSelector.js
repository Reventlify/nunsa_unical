import classes from "../materialUpload/mUpload.module.css";

const CourseAbbrSelector = ({ abbr, permittedToType}) => {
  return (
    <div className={`mb-3`}>
      <label htmlFor="course_abbr" className="form-label">
        Course Abbr
      </label>
      <select
        className="form-control boxShadow"
        id="course_abbr"
        aria-label="course_abbrHelp"
        disabled={permittedToType}
        onChange={(e) => abbr(e.target.value)}
      >
        <option defaultValue>NSC</option>
        <option>PHM</option>
        <option>ANA</option>
        <option>PUH</option>
        <option>PHS</option>
        <option>HTP</option>
        <option>MMP</option>
        <option>BCM</option>
        <option>GSS</option>
        <option>GST</option>
        <option>MTH</option>
        <option>CHM</option>
        <option>PHY</option>
        <option>BIO</option>
      </select>
    </div>
  );
};
export default CourseAbbrSelector;
