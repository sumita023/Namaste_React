import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact.js";
import Restaurantmenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import store from "./utils/store";
import {Provider} from "react-redux";
import Cart from "./components/Cart";
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

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
  const [myUser, setMyUser] = useState({
    name: "Sumita Bhowmick",
    email: "sumita@gmail.com",
  });
  return (
    <React.Fragment>
      <Provider store={store}>
      <UserContext.Provider
        value={{
          user: myUser,
          setMyUser:setMyUser
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
      </Provider>
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
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About></About>
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:menuId",
        element: <Restaurantmenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
