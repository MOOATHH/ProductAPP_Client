import React from "react";

class AddUpdate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Id: "1",

      Name: "B",

      Catagory: "B",

      Price: "1",

      Decription: "B"
    };
  }

  Updateadd = () => {
    console.log("ProductID: " + this.state.Id);

    console.log("Name: " + this.state.Name);

    console.log("Category: " + this.state.Catagory);

    console.log("Price: " + this.state.Price);

    console.log("Description: " + this.state.Decription);
  };

  handleChange = event => {
    this.setState({ Id: event.target.value });
  };
  submitP = e => {
    console.log(this.state);

    fetch("http://localhost:50492/api/Products", {
      method: "PUT",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json"
      },

      body: JSON.stringify(this.state)
    })
      .then(response => {
        console.log(response);
      })

      .catch(error => {
        console.log(error);
      });

    e.preventDefault();
  };

  // handleChange = event => {

  // this.setState({ Name: event.target.value });

  // };
  render() {
    return (
      <div className="btn-group" role="group" aria-label="...">
        <button
          type="Put"
          value="Put"
          onClick={this.Updateadd}
          className="btn btn-primary"
        >
          Put
        </button>
      </div>
    );
  }
}
export default AddUpdate;
