import { useCallback, useEffect, useState } from "react";
import ProfileBoilerPlate from "../../components/profile/profileBoilerPlate";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../link/API";
import { authActions } from "../../store/auth-slice";
import FullLoader from "../../components/loader/fullLoader/FullLoader";

const StudentInfo = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [fetching, setFetching] = useState(true);
  const [details, setDetails] = useState({});

  const getPosts = useCallback(async () => {
    setFetching(true);
    try {
      const response = await fetch(`${api}/user/exco/get_students/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        setDetails(data);
        return setFetching(false);
      } else if (response.status === 401 || response.status === 403) {
        dispatch(authActions.logout());
      } else {
        // const data = await response.json();
        setFetching(false);
      }
    } catch (error) {
      console.error(error.message);
    }
  }, [user.token, dispatch, id]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (fetching) {
    return <FullLoader />;
  } else {
    return (
      <ProfileBoilerPlate
        details={details}
        role={details.student_role}
        nos_cleared={details.total_dues}
        id={id}
        exco={true}
      />
    );
  }
};

export default StudentInfo;
