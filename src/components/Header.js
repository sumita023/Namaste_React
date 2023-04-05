import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img
      className="h-24 py-2"
      alt="Logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZpQh6EY7F3c1fJcvo00FnLgY8IiNs3352A&usqp=CAU"
    />
  </a>
);

const Header = () => {
  const [isLoggedInUser, setLoggedInUser] = useState(false);
  const isOnline = useOnline();
  const [isShow, setIsShow] = useState(true);

  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg px-2 sm:bg-yellow-300 md:bg-pink-300">
      <button
        onClick={() => {
          isShow ? setIsShow(false) : setIsShow(true);
        }}
      >
        btn
      </button>
      {isShow ? <Title /> : null}
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart- {cartItems.length} items</Link>
          </li>
        </ul>
      </div>
      {isOnline ? "🟢" : "🔴"}
      <span className="font-bold p-10 text-red-500">{user.name}</span>
      {isLoggedInUser ? (
        <button onClick={() => setLoggedInUser(false)}>LogOut</button>
      ) : (
        <button onClick={() => setLoggedInUser(true)}>LogIn</button>
      )}
    </div>
  );
};

export default Header;
