import classes from "../error/404error.module.css";

const Four0Four = () => {
  return (
    <div className={classes.main}>
      <div className={classes.section}>
        <h1 className={`${classes.error}`}>404</h1>
        <div className={classes.page}>
          Oops!!! The page you are looking for is not found.
        </div>
        <a className={classes.backHome} href="/">
          Go to homepage
        </a>
      </div>
    </div>
  );
};

export default Four0Four;
