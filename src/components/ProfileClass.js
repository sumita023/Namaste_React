import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "dummy",
        type: "me",
      },
    };
    console.log("c-constructor " + this.props.name);
  }

  async componentDidMount() {
    var data = await fetch("https://api.github.com/users/sumita023");
    var json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });

    console.log("c-componentDidMount " + this.props.name);

    this.timer=setInterval(() => {
      console.log("Namaste OP");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("compnentWillUnmount");
  }

  render() {
    console.log("c-render " + this.props.name);
    return (
      <div>
        <h1>Profile class Component</h1>
        <h2>{this.state.userInfo.login}</h2>
        <img src={this.state.userInfo.avatar_url} />
        <h3>{this.state.count}</h3>
        <h3>{this.state.count2}</h3>
        <button
          onClick={() => {
            this.setState({ count: 1, count2: 2 });
          }}
        >
          setCount
        </button>
      </div>
    );
  }
}

export default Profile;
