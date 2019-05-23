import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    id: ""
  };

  handleChange = event => {
    this.setState({ id: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios.delete().then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return <div />;
  }
}
