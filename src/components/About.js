import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent - constructor");
  }
  componentDidMount() {
    console.log("parent - componentDidMount");
  }
  render() {
    console.log("parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <UserClass name={"GOPAL VAGHELA {class}"} location={"hirabag surat"} />
      </div>
    );
  }
}

export default About;
