import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("P- constructor");
  }

  componentDidMount() {
    console.log("P- componentDidMount");
  }

  render() {
    console.log("P- render");
    return (
      <div>
        <h1>About Us Page</h1>
        <UserContext.Consumer>
          {({ user }) =>(
            // console.log(user);
            <h4 className="font-bold m-2 p -2">
              {user.name}-{user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <p>This is the React Live Course Chapter 07 - Finding the path 🚀</p>
        <Profile name={"First Child"} xyz={"xyz"} />
        {/* <Profile name={"Second Child"} xyz={"xyz"}/> */}
      </div>
    );
  }
}

export default About;
