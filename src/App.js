import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact.js";
import Restaurantmenu from "./components/RestaurantMenu";



/***
+ *
+ * Created A Server
+ * HMR - Hot Module Replacement
+ * File Watcher algorithm - C++
+ * BUNDLING
+ * MINIFY
+ * Cleaning our Code
+ * Dev abd Production Build
+ * Super Fast build algorithm
+ * Image Optimization
+ * Caching while development
+ * Compression
+ * Compatble with older version of browser
+ * HTTPS on dev
+ * port Number
+ * Consistent Hashing Algorithm
+ * Zero Config
+ *Tree Shaking - remove unwanted code
+ *
+ *
+ * Transitive Dependencies
+ */

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    hello: "world",
  },
  "React Element"
);
console.log(heading1);
//React.createElement=> js Object => HTML(DOM)

const heading3 = (
  <h1 id="title" key="h1">
    my JSX
  </h1>
);

//functional component

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurant/:menuId",
        element:<Restaurantmenu/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
