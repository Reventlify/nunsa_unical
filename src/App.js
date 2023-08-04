import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import FullLoader from "./components/fullLoader/FullLoader";
const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Executives = lazy(() => import("./pages/Executives"));
const LoginView = lazy(() => import("./components/login/login"));
const Signup = lazy(() => import("./components/signup/signup"));
const Dashboard = lazy(() => import("./pages/auth/Dashboard"));
const Class = lazy(() => import("./pages/auth/Class"));
const CreatePostMain = lazy(() =>
  import("./components/createPost/createPostMain")
);

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<FullLoader />}>
            <Homepage />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<FullLoader />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/blog"
        element={
          <Suspense fallback={<FullLoader />}>
            <Blog />
          </Suspense>
        }
      />
      <Route
        path="/executives"
        element={
          <Suspense fallback={<FullLoader />}>
            <Executives />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<FullLoader />}>
            <LoginView />
          </Suspense>
        }
      />
      <Route
        path="/signup"
        element={
          <Suspense fallback={<FullLoader />}>
            <Signup />
          </Suspense>
        }
      />
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
        path="/student/create_post"
        element={
          <Suspense fallback={<FullLoader />}>
            <CreatePostMain />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
