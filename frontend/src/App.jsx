import "./App.css";
// import { Button } from "../src/components/ui/button";
// import Navbar from "./components/shared/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../src/components/auth/Login.jsx";
import Signup from "../src/components/auth/Signup.jsx";

import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path:'/description/:id',
    element: <JobDescription/>

  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path:'/profile',
    element:<Profile/>
  }
  
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
