import { useState } from "react";
import {Link} from "react-router-dom";

const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="Logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZpQh6EY7F3c1fJcvo00FnLgY8IiNs3352A&usqp=CAU"
      />
    </a>
  );

  const Header = () => {
    const [isLoggedInUser, setLoggedInUser]=useState(false);
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Cart</li>
          </ul>
        </div>
        {isLoggedInUser?<button onClick={()=>setLoggedInUser(false)}>LogOut</button> :<button onClick={()=>setLoggedInUser(true)}>LogIn</button>}
      </div>
    );
  };

  export default Header;
  