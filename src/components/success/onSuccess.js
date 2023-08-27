import classes from "../success/onSuccess.module.css";

const OnSuccess = ({ time, to, message }) => {
  setTimeout(() => {
    to();
  }, time);
  return (
    <div className={`${classes.box}`}>
      <div className={`${classes.success} ${classes.alert}`}>
        <div className={`${classes.alertBody}`}>{message}</div>
      </div>
    </div>
  );
};

export default OnSuccess;
