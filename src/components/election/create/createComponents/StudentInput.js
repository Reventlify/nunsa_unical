import { motion } from "framer-motion";
import DeleteIcon from "@mui/icons-material/Delete";
import { startWithCase } from "../../../../utilities/text";

const StudentInput = ({
  onChange,
  verified,
  eleco,
  elecoName,
  deleteAction,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor="mat_no" className="form-label">
        <span className="red">*</span> New Eleco Matric no
      </label>
      {verified ? (
        <input
          value={eleco}
          className="form-control"
          type="text"
          disabled={verified}
        />
      ) : (
        <motion.div
          className=""
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.0 }}
        >
          <motion.input
            type="text"
            className="form-control"
            id="mat_no"
            autoComplete="off"
            // pattern="\d{2}/\d{9}(TR)?"
            pattern="\d{2}/\d{7,10}(?:TR|tr)?"
            title="Please enter a valid value in the format xx/xxxxxxxxx"
            onChange={(e) => onChange(e.target.value)}
            whileFocus={{ scale: 1.1 }}
            required
          />
        </motion.div>
      )}
      {verified ? (
        <div className="mt-2 nunsa">
          <span>{startWithCase(elecoName)}</span>
          <span className="float-right hover red" onClick={deleteAction}>
            <DeleteIcon />
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default StudentInput;
