import classes from "../studentDash.module.css";
import president from "../../../images/president.jpg";

const DashSearchAndNotifications = ({ search }) => {
  return (
    <div className={`${classes.sideBar}`}>
      <div className="container">
        <div className={`container ${classes.foc} shadowB roboroboS edit`}>
          <form className={`d-flex`} role="search">
            <input
              className={`form-control me-2 b`}
              type="search"
              placeholder={search}
              aria-label="Search"
            />
            <button
              className="btn bottomShadow btnct btnct-nunsa"
              type="button"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        <div className={`${classes.sidebarDis} container mt-2`}>
          <div className="lineForHeader">
            <h4 className="bolder">Notifications</h4>
            <div className="theLine"></div>
          </div>
          {/* notifications */}
          <div className={`${classes.notP} mt-3 container bg-white`}>
            <div className={`${classes.notification}`}>
              <div className={`${classes.notIMG}`}>
                <img
                  src="https://remoteok.com/cdn-cgi/image/format=auto,fit=cover,width=500,height=500,quality=50/https://remoteok.com/assets/img/users/278d0ea32774f18ff37d2d58a4d70189.jpg?1683009009"
                  alt="user"
                  width="60px"
                  height="100%"
                  className="round"
                />
              </div>
              <div className={`${classes.notText} hover blogText`}>
                <span className="block">
                  <span className="bold">Eze Chinaza</span> made a new post
                  recently.
                </span>
                <span className={`block ${classes.notTime}`}>
                  <span className="nunsa">17 hours ago</span>
                </span>
              </div>
            </div>
          </div>
          <div className={`${classes.notP} mt-3 container bg-white`}>
            <div className={`${classes.notification}`}>
              <div className={`${classes.notIMG}`}>
                <img
                  src={president}
                  alt="user"
                  width="60px"
                  height="100%"
                  className="round"
                />
              </div>
              <div className={`${classes.notText} hover blogText`}>
                <span className="block">
                  <span className="bold">Eze Chinaza</span> made a new post
                  recently.
                </span>
                <span className={`block ${classes.notTime}`}>
                  <span className="nunsa">17 hours ago</span>
                </span>
              </div>
            </div>
          </div>
          <div className={`${classes.notP} mt-3 container bg-white`}>
            <div className={`${classes.notification}`}>
              <div className={`${classes.notIMG}`}>
                <img
                  src={president}
                  alt="user"
                  width="60px"
                  height="100%"
                  className="round"
                />
              </div>
              <div className={`${classes.notText} hover blogText`}>
                <span className="block">
                  <span className="bold">Eze Chinaza</span> made a new post
                  recently.
                </span>
                <span className={`block ${classes.notTime}`}>
                  <span className="nunsa">17 hours ago</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashSearchAndNotifications;
