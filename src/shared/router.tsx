import * as React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import WrapperComponent from "../components/home/WrapperComponent";
import Footer from "../components/layouts/Footer";
import ProjectWrapper from "../components/projects/ProjectWrapper";

export default createBrowserRouter([
    {
      path: "/",
      element: <WrapperComponent />,
      children: [
        {
          path: "/",
          element: <Footer />,
        }
      ]
    },
    {
      path: "project/:projectName",
      element: <ProjectWrapper />
    }
], {basename: '/about-me'});