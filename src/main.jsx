import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import "./index.css";

const router = createBrowserRouter(
  [
    { path: "/", element: <App />, children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "experience", element: <Experience /> },
      { path: "contact", element: <Contact /> }
    ]}
  ],
  {
    basename: import.meta.env.BASE_URL
  }
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode><RouterProvider router={router} /></React.StrictMode>
);
