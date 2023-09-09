import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import FullLoader from "./components/loader/fullLoader/FullLoader";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Executives from "./pages/Executives";
import LoginView from "./components/login/login";
import Signup from "./components/signup/signup";
import CreatePostMain from "./components/createPost/createPostMain";
import Four0Four from "./components/error/404error";
import { io } from "socket.io-client";
import { authActions } from "./store/auth-slice";
import { api } from "./link/API";
import { postsActions } from "./store/posts-slice";
const Dashboard = lazy(() => import("./pages/auth/Dashboard"));
const Profile = lazy(() => import("./pages/auth/Profile"));
const StudentsDues = lazy(() => import("./pages/auth/FinancialReport"));
const StudentInfo = lazy(() => import("./pages/auth/studentView"));
const Class = lazy(() => import("./pages/auth/Class"));
const Message = lazy(() => import("./pages/auth/Message"));
const Courses = lazy(() => import("./pages/auth/Courses"));
const Chat = lazy(() => import("./components/messages/chat/chat"));
const Approval = lazy(() => import("./components/courses/approval"));
const ViewCourses = lazy(() =>
  import("./components/courses/subjects/courses_per_session/courses")
);
const ViewCoursesPending = lazy(() =>
  import(
    "./components/courses/approval/courses_pending_per_session/courses_pending"
  )
);
const MaterialUpload = lazy(() =>
  import("./components/courses/materialUpload/materialUpload")
);
const Subjects = lazy(() => import("./components/courses/subjects/subjects"));

let socket = null;
export { socket };
function App() {
  const { isLoggedIn, expiresAt } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let intervalTimer; // Variable to store the interval timer reference
  // Periodically check the token's expiration
  const tokenExpirationCheck = () => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (typeof expiresAt === "number") {
      if (expiresAt <= currentTimestamp) {
        // Token has expired, log the user out
        socket.disconnect();
        dispatch(postsActions.clearAllPosts());
        dispatch(authActions.logout());
        dispatch(authActions.tokenExpiry({ tokenExpiry: null }));
        clearInterval(intervalTimer);
      }
    }
  }; // Check every 10 seconds

  useEffect(() => {
    // Start the interval and store the timer reference
    intervalTimer = setInterval(tokenExpirationCheck, 10000); // Run every 10 second
    try {
      dispatch(authActions.stopLoad());
      dispatch(authActions.deleteError());

      if (
        !sessionStorage.getItem("nunsa_user") === false &&
        isLoggedIn &&
        typeof expiresAt === "number" &&
        Number(expiresAt) > Math.floor(Date.now() / 1000)
      ) {
        socket = io(api, {
          query: {
            token: sessionStorage.getItem("nunsa_user"),
          },
          autoConnect: false,
        });
        socket.connect();
      }
    } catch (error) {
      console.error(error);
    }
  }, [expiresAt, isLoggedIn, dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/executives" element={<Executives />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student/create_post" element={<CreatePostMain />} />
        <Route path="*" element={<Four0Four />} />

        {/* lazy loaded routes */}
        <Route
          path="/student/dashboard"
          element={
            isLoggedIn ? (
              <Suspense fallback={<FullLoader />}>
                <Dashboard />
              </Suspense>
            ) : (
              <LoginView />
            )
          }
        />
        <Route
          path="/student/class"
          element={
            isLoggedIn ? (
              <Suspense fallback={<FullLoader />}>
                <Class />
              </Suspense>
            ) : (
              <LoginView />
            )
          }
        />
        <Route
          path="/student/students"
          element={
            isLoggedIn ? (
              <Suspense fallback={<FullLoader />}>
                <StudentsDues />
              </Suspense>
            ) : (
              <LoginView />
            )
          }
        />
        <Route
          path="/student/students/:id"
          element={
            isLoggedIn ? (
              <Suspense fallback={<FullLoader />}>
                <StudentInfo />
              </Suspense>
            ) : (
              <LoginView />
            )
          }
        />
        <Route
          path="/student/profile/:id"
          element={
            isLoggedIn ? (
              <Suspense fallback={<FullLoader />}>
                <Profile />
              </Suspense>
            ) : (
              <LoginView />
            )
          }
        />
        <Route
          path="/student/messages"
          element={
            isLoggedIn ? (
              <Suspense fallback={<FullLoader />}>
                <Message />
              </Suspense>
            ) : (
              <LoginView />
            )
          }
        />
        <Route
          path="/student/messages/chat/:id"
          element={
            isLoggedIn ? (
              <Suspense fallback={<FullLoader />}>
                <Chat />
              </Suspense>
            ) : (
              <LoginView />
            )
          }
        />
        <Route
          path="/student/courses"
          element={
            isLoggedIn ? (
              <Suspense fallback={<FullLoader />}>
                <Courses />
              </Suspense>
            ) : (
              <LoginView />
            )
          }
        />
        <Route
          path="/student/courses/materials/view/:year"
          element={
            isLoggedIn ? (
              <Suspense fallback={<FullLoader />}>
                <Subjects />
              </Suspense>
            ) : (
              <LoginView />
            )
          }
        />
        <Route
          path="/student/courses/materials/view/:year"
          element={
            isLoggedIn ? (
              <Suspense fallback={<FullLoader />}>
                <Subjects />
              </Suspense>
            ) : (
              <LoginView />
            )
          }
        />
        <Route
          path="/student/courses/materials/view/:year/:session/:course"
          element={
            isLoggedIn ? (
              <Suspense fallback={<FullLoader />}>
                <ViewCourses />
              </Suspense>
            ) : (
              <LoginView />
            )
          }
        />
        <Route
          path="/student/courses/materials/upload/:year"
          element={
            isLoggedIn ? (
              <Suspense fallback={<FullLoader />}>
                <MaterialUpload />
              </Suspense>
            ) : (
              <LoginView />
            )
          }
        />
        <Route
          path="/student/courses/materials/review/:year"
          element={
            isLoggedIn ? (
              <Suspense fallback={<FullLoader />}>
                <Approval />
              </Suspense>
            ) : (
              <LoginView />
            )
          }
        />
        <Route
          path="/student/courses/materials/review/:year/:session/:course"
          element={
            isLoggedIn ? (
              <Suspense fallback={<FullLoader />}>
                <ViewCoursesPending />
              </Suspense>
            ) : (
              <LoginView />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
