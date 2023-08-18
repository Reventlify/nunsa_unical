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
const Dashboard = lazy(() => import("./pages/auth/Dashboard"));
const Class = lazy(() => import("./pages/auth/Class"));
const Message = lazy(() => import("./pages/auth/Message"));
const Courses = lazy(() => import("./pages/auth/Courses"));
const Chat = lazy(() => import("./components/messages/chat/chat"));
const MaterialUpload = lazy(() =>
  import("./components/courses/materialUpload/materialUpload")
);
const Subjects = lazy(() => import("./components/courses/subjects/subjects"));

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      socket.disconnect();
      return console.log(isLoggedIn);
    } else {
      // return socket.on("connect", () => {
      //   console.log(`You connected with ${socket.id}`);
      // });
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
          }
        />
        <Route
          path="/student/class"
          element={
            <Suspense fallback={<FullLoader />}>
              <Class />
            </Suspense>
          }
        />
        <Route
          path="/student/messages"
          element={
            <Suspense fallback={<FullLoader />}>
              <Message />
            </Suspense>
          }
        />
        <Route
          path="/student/messages/chat/:id"
          element={
            <Suspense fallback={<FullLoader />}>
              <Chat />
            </Suspense>
          }
        />
        <Route
          path="/student/courses"
          element={
            <Suspense fallback={<FullLoader />}>
              <Courses />
            </Suspense>
          }
        />
        <Route
          path="/student/courses/materials/view/:year"
          element={
            <Suspense fallback={<FullLoader />}>
              <Subjects />
            </Suspense>
          }
        />
        <Route
          path="/student/courses/materials/upload/:year"
          element={
            <Suspense fallback={<FullLoader />}>
              <MaterialUpload />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
