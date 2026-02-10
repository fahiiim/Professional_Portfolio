import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Education from "../Pages/Education/Education";
import Experience from "../Pages/Experience/Experience";
import Skills from "../Pages/Skills/Skills";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";
import Achievements from "../Pages/Achievements/Achievements";
import Certificates from "../Pages/Certificates/Certificates";
import Leadership from "../Pages/Leadership/Leadership";




export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
         { index: true, Component: Home },
         {
            path: "/about",
            Component: About
         },
         {
            path: "/education",
            Component: Education
         },
         {
            path: "/experience",
            Component: Experience
         },
         {
            path: "/skills",
            Component: Skills
         },
         {
            path: "/contact",
            Component: Contact
         },
         {
            path: "/projects",
            Component: Projects
         },
         {
            path:"/achievements",
            Component: Achievements
         },
         {
            path:"/certificates",
            Component: Certificates
         },
         {
            path:"/leadership",
            Component: Leadership
         }
    ]
  },
]);