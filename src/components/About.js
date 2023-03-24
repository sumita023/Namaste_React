import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import { Component } from "react";

class About extends Component{
  constructor(props){
    super(props);
    console.log("P- constructor");
  }

  componentDidMount(){
    console.log("P- componentDidMount");
  }

  render(){
    console.log("P- render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is the React Live Course Chapter 07 - Finding the path 🚀</p>
        <Profile name={"First Child"} xyz={"xyz"}/>
        {/* <Profile name={"Second Child"} xyz={"xyz"}/> */}
      </div>
    );
  }
}

export default About;
