import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Surat",
      },
    };
    // console.log("child - constructor");
  }
  async componentDidMount() {
    // console.log("child - componentDidMount");
    const data = await fetch("https://api.github.com/users/reactgopal");
    const response = await data.json();
    console.log(response);
    this.setState({ userInfo: response });
  }
  componentWillUnmount() {
    console.log("child - componentWillUnmount");
  }
  render() {
    // console.log("child - render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" style={{ width: "50px" }} />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @gopalVaghela21</h4>
      </div>
    );
  }
}
export default UserClass;
