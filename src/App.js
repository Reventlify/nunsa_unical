import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import FullLoader from "./components/loader/fullLoader/FullLoader";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Executives from "./pages/Executives";
import LoginView from "./components/login/login";
import Signup from "./components/signup/signup";
import CreatePostMain from "./components/createPost/createPostMain";
const Dashboard = lazy(() => import("./pages/auth/Dashboard"));
const Class = lazy(() => import("./pages/auth/Class"));
const Message = lazy(() => import("./pages/auth/Message"));
const Courses = lazy(() => import("./pages/auth/Courses"));
const Chat = lazy(() => import("./components/messages/chat/chat"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/executives" element={<Executives />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/student/create_post" element={<CreatePostMain />} />

      {/* lazy loaded routes */}
      <Route
        path="/student/dashboard"
        element={
          <Suspense fallback={<FullLoader />}>
            <Dashboard />
          </Suspense>
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
    </Routes>
  );
}

export default App;
