import classes from "../error/404error.module.css";

const Four0Four = () => {
  return (
    <div className={classes.main}>
      <div className={classes.section}>
        <h1 className={`${classes.error}`}>404</h1>
        <div className={classes.page}>
          Sorry, we can't find that page. You'll find lots to explore on the
          homepage
        </div>
        <a className={classes.backHome} href="/">
          Go to homepage
        </a>
      </div>
    </div>
  );
};

export default Four0Four;
