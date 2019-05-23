import React from "react";
import Api from "./Api";
import PoPostaddst from "./Postadd";
import PersonList from "./Deleteadd";
import AddUpdate from "./Putadd";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange.bind(this);
    this.handleChange3 = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleChange1(event) {
    this.setState({ value: event.target.value });
  }
  handleChange3(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Api />
        <PoPostaddst />
        <PersonList />
        <AddUpdate />
      </div>
    );
  }
}
export default Product;
