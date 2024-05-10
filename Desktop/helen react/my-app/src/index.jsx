import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Main from "./pages/Main";
import DraHelen from "./pages/DraHelen";
import Book from "./pages/Book";
import FAQ from "./pages/FAQ";
import Contacts from "./pages/Contacts";
import Tips from "./pages/Tips";
import Treatments from "./pages/Treatments";

import "./index.css";
import content from "./content.json";

let pathArray = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
  {
    path: "/drahelen",
    element: <App />,
    children: [
      {
        path: "/drahelen",
        element: <DraHelen />,
      },
    ],
  },
  {
    path: "/contato",
    element: <App />,
    children: [
      {
        path: "/contato",
        element: <Contacts />,
      },
    ],
  },
  {
    path: "/livros",
    element: <App />,
    children: [
      {
        path: "/livros",
        element: <Book />,
      },
    ],
  },
  {
    path: "/faq",
    element: <App />,
    children: [
      {
        path: "/faq",
        element: <FAQ />,
      },
    ],
  },
  {
    path: "/dicas",
    element: <App />,
    children: [
      {
        path: "/dicas",
        element: <Tips />,
      },
    ],
  },
];
let treatmentArray = Object.keys(content).map((item) => {
  return {
    path: `/${item}`,
    element: <App />,
    children: [
      {
        path: `/${item}`,
        element: <Treatments props={content[item]} />,
      },
    ],
  };
});

const router = createBrowserRouter(pathArray.concat(treatmentArray));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
