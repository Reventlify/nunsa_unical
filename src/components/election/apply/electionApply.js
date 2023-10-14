import { authActions } from "../../../store/auth-slice";
import { startWithCase } from "../../../utilities/text";
import BottomSpace from "../../bottomSpace";
import MobileDashboard from "../../dashboard/mobile/mobile";
import { useDispatch, useSelector } from "react-redux";
import FullLoader from "../../loader/fullLoader/FullLoader";
import { api } from "../../../link/API";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const ElectionApply = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [checking, setChecking] = useState(true);
  const [applying, setApplying] = useState(false);
  const [apply, setApply] = useState([]);
  const [error, setError] = useState("");
  const [failed, setFailed] = useState(false);

  const applyHandler = async (applyFor) => {
    try {
      setFailed(false);
      setApplying(true);
      //api call for sending the user data to the backend
      const response = await fetch(`${api}/user/candidate_apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          candidate_role: applyFor,
        }),
      });

      if (response.status === 401 || response.status === 403) {
        return dispatch(authActions.logout());
      } else if (response.status === 200) {
        const data = await response.json();
        setApply(data);
        return setApplying(false);
      } else {
        const data = await response.json();
        setError(data);
        setFailed(true);
        return setApplying(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const checkCurrentApplication = async () => {
      try {
        const response = await fetch(`${api}/user/candidate_check`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.token}`,
          },
        });
        if (response.status === 200) {
          const data = await response.json();
          setApply(data);
          return setChecking(false);
        } else if (response.status === 401 || response.status === 403) {
          dispatch(authActions.logout());
        } else {
          // const data = await response.json();
          setChecking(false);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    checkCurrentApplication();
  }, [dispatch, user.token]);
  if (checking) {
    return <FullLoader />;
  } else {
    if (apply.length > 0) {
      return (
        <MobileDashboard>
          <div className="marginTopOutrageous">
            <div className="container fullscreen-20 centerDiv">
              {apply.map((role) => {
                return (
                  <div className="mt-5 blogText">
                    <h3>
                      You&nbsp;
                      <span className=" nunsa">applied</span> for the role of{" "}
                      {startWithCase(role.candidate_role)} and you are{" "}
                      {role.candidate_status === "pending" ? (
                        `${startWithCase(role.candidate_status)}`
                      ) : (
                        <span className="nunsa">
                          {startWithCase(role.candidate_status)}
                        </span>
                      )}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </MobileDashboard>
      );
    } else {
      return (
        <MobileDashboard>
          <div className="marginTopOutrageous">
            <div className="container">
              <div style={{ height: "5px" }}></div>
              {failed ? ( // then if changed flag is false show error message.
                <div className="mb-2" style={{ color: "red" }}>
                  <span>{error}</span>
                </div>
              ) : (
                ""
              )}
              <div className="mt-5 blogText">
                {startWithCase("President")}
                <button
                  onClick={() => {
                    applyHandler("President");
                  }}
                  type="button"
                  className={
                    applying
                      ? "float-right btnct btn  btn-secondary"
                      : "float-right btn btn-success"
                  }
                  disabled={applying}
                >
                  {applying ? (
                    <>
                      <BeatLoader
                        color="#fff"
                        loading={applying}
                        size={"12px"}
                      />
                    </>
                  ) : (
                    <>Apply</>
                  )}
                </button>
              </div>
              <div className="mt-5 blogText">
                {startWithCase("vice President")}
                <button
                  onClick={() => {
                    applyHandler("Vice President");
                  }}
                  type="button"
                  className={
                    applying
                      ? "float-right btnct btn  btn-secondary"
                      : "float-right btn btn-success"
                  }
                  disabled={applying}
                >
                  {applying ? (
                    <>
                      <BeatLoader
                        color="#fff"
                        loading={applying}
                        size={"12px"}
                      />
                    </>
                  ) : (
                    <>Apply</>
                  )}
                </button>
              </div>
              <div className="mt-5 blogText">
                {startWithCase("financial secretary")}
                <button
                  onClick={() => {
                    applyHandler("financial secretary");
                  }}
                  type="button"
                  className={
                    applying
                      ? "float-right btnct btn  btn-secondary"
                      : "float-right btn btn-success"
                  }
                  disabled={applying}
                >
                  {applying ? (
                    <>
                      <BeatLoader
                        color="#fff"
                        loading={applying}
                        size={"12px"}
                      />
                    </>
                  ) : (
                    <>Apply</>
                  )}
                </button>
              </div>
              <div className="mt-5 blogText">
                {startWithCase("general secretary")}
                <button
                  onClick={() => {
                    applyHandler("general secretary");
                  }}
                  type="button"
                  className={
                    applying
                      ? "float-right btnct btn  btn-secondary"
                      : "float-right btn btn-success"
                  }
                  disabled={applying}
                >
                  {applying ? (
                    <>
                      <BeatLoader
                        color="#fff"
                        loading={applying}
                        size={"12px"}
                      />
                    </>
                  ) : (
                    <>Apply</>
                  )}
                </button>
              </div>
              <div className="mt-5 blogText">
                {startWithCase("treasurer")}
                <button
                  onClick={() => {
                    applyHandler("treasurer");
                  }}
                  type="button"
                  className={
                    applying
                      ? "float-right btnct btn  btn-secondary"
                      : "float-right btn btn-success"
                  }
                  disabled={applying}
                >
                  {applying ? (
                    <>
                      <BeatLoader
                        color="#fff"
                        loading={applying}
                        size={"12px"}
                      />
                    </>
                  ) : (
                    <>Apply</>
                  )}
                </button>
              </div>
              <div className="mt-5 blogText">
                {startWithCase("director of welfare")}
                <button
                  onClick={() => {
                    applyHandler("director of welfare");
                  }}
                  type="button"
                  className={
                    applying
                      ? "float-right btnct btn  btn-secondary"
                      : "float-right btn btn-success"
                  }
                  disabled={applying}
                >
                  {applying ? (
                    <>
                      <BeatLoader
                        color="#fff"
                        loading={applying}
                        size={"12px"}
                      />
                    </>
                  ) : (
                    <>Apply</>
                  )}
                </button>
              </div>
              <div className="mt-5 blogText">
                {startWithCase("director of socials")}
                <button
                  onClick={() => {
                    applyHandler("director of socials");
                  }}
                  type="button"
                  className={
                    applying
                      ? "float-right btnct btn  btn-secondary"
                      : "float-right btn btn-success"
                  }
                  disabled={applying}
                >
                  {applying ? (
                    <>
                      <BeatLoader
                        color="#fff"
                        loading={applying}
                        size={"12px"}
                      />
                    </>
                  ) : (
                    <>Apply</>
                  )}
                </button>
              </div>
              <div className="mt-5 blogText">
                {startWithCase("director of sports")}
                <button
                  onClick={() => {
                    applyHandler("director of sports");
                  }}
                  type="button"
                  className={
                    applying
                      ? "float-right btnct btn  btn-secondary"
                      : "float-right btn btn-success"
                  }
                  disabled={applying}
                >
                  {applying ? (
                    <>
                      <BeatLoader
                        color="#fff"
                        loading={applying}
                        size={"12px"}
                      />
                    </>
                  ) : (
                    <>Apply</>
                  )}
                </button>
              </div>
              <div className="mt-5 blogText">
                {startWithCase("director of health")}
                <button
                  onClick={() => {
                    applyHandler("director of health");
                  }}
                  type="button"
                  className={
                    applying
                      ? "float-right btnct btn  btn-secondary"
                      : "float-right btn btn-success"
                  }
                  disabled={applying}
                >
                  {applying ? (
                    <>
                      <BeatLoader
                        color="#fff"
                        loading={applying}
                        size={"12px"}
                      />
                    </>
                  ) : (
                    <>Apply</>
                  )}
                </button>
              </div>
              <div className="mt-5 blogText">
                {startWithCase("director of information")}
                <button
                  onClick={() => {
                    applyHandler("director of information");
                  }}
                  type="button"
                  className={
                    applying
                      ? "float-right btnct btn  btn-secondary"
                      : "float-right btn btn-success"
                  }
                  disabled={applying}
                >
                  {applying ? (
                    <>
                      <BeatLoader
                        color="#fff"
                        loading={applying}
                        size={"12px"}
                      />
                    </>
                  ) : (
                    <>Apply</>
                  )}
                </button>
              </div>
              <BottomSpace />
            </div>
          </div>
        </MobileDashboard>
      );
    }
  }
};

export default ElectionApply;
