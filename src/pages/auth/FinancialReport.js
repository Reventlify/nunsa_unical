import { useEffect, useState } from "react";
// import BasicTable from "../../table/components/BasicTable";
import PaginationTable from "../../table/components/PaginationTable";
import { api } from "../../link/API";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import FullLoader from "../../components/loader/fullLoader/FullLoader";

const StudentsDues = () => {
  const { token } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await fetch(`${api}/user/exco/get_students`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          const data = await response.json();
          setStudents(data);
          setLoading(false);
        } else if (response.status === 401 || response.status === 403) {
          dispatch(authActions.logout());
        } else {
          const data = await response.json();
          // setPosts(data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    getStudents();
  }, [token, dispatch]);

  if (loading) {
    return <FullLoader />;
  }

  return <PaginationTable students={students} />;
};

export default StudentsDues;
