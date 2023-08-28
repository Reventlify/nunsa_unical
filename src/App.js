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
// import { userloggedIn } from "./store/auth-slice";
import { socket } from "./socket";
import { authActions } from "./store/auth-slice";
const Dashboard = lazy(() => import("./pages/auth/Dashboard"));
const Class = lazy(() => import("./pages/auth/Class"));
const Message = lazy(() => import("./pages/auth/Message"));
const Courses = lazy(() => import("./pages/auth/Courses"));
const Chat = lazy(() => import("./components/messages/chat/chat"));
const Approval = lazy(() => import("./components/courses/approval"));
const ViewCoursesPending = lazy(() =>
  import(
    "./components/courses/approval/courses_pending_per_session/courses_pending"
  )
);
const MaterialUpload = lazy(() =>
  import("./components/courses/materialUpload/materialUpload")
);
const Subjects = lazy(() => import("./components/courses/subjects/subjects"));

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.stopLoad());
    dispatch(authActions.deleteError());
    if (!isLoggedIn) {
      socket.disconnect();
      return console.log(isLoggedIn);
    } else {
      socket.connect();
      console.log(isLoggedIn);
      return console.log("isAuth");
    }
  }, [isLoggedIn]);
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
            // <Suspense fallback={<FullLoader />}>
            //   <Dashboard />
            // </Suspense>
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
