import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Id: "",

      Name: "",

      Catagory: "",

      Price: "",

      Decription: ""
    };
  }

  infoForm = () => {
    console.log("ProductID: " + this.state.Id);

    console.log("Name: " + this.state.Name);

    console.log("Category: " + this.state.Catagory);

    console.log("Price: " + this.state.Price);

    console.log("Description: " + this.state.Decription);
  };
  RestIt = () => {
    this.setState({
      Id: "",

      Name: "",

      Catagory: "",

      Price: "",

      Decription: ""
    });
  };
  handleChange = event => {
    this.setState({ Id: event.target.value });
  };
  Update = (idd, url) => {
    fetch(url + "?id=" + idd, {
      mode: "cors",
      method: "PUT",
      headers: {
        Accept: "application/json",

        "Content-Type": "application/json"
      },

      body: JSON.stringify(this.state.Id)
    })
      .then(response => {
        console.log(response);
        this.componentDidMount();
      })

      .catch(error => {
        console.log(error);
      });
  };
  submitHandler = e => {
    console.log(this.state);

    fetch("http://localhost:50492/api/Products", {
      method: "POST",

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
  submitHandler = e => {
    console.log(this.state);

    fetch("http://localhost:50492/api/Products", {
      method: "POST",

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
    const { Name, Decription, Catagory, Price } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>...Add...</h1> 
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label>ProductID: </label>

            <input
              className="form-control"
              type="text"
              name="Id"
              value={this.state.Id}
              onChange={e => this.setState({ Id: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Name: </label>

            <input
              type="text"
              name="fname"
              className="form-control"
              value={Name}
              onChange={e => this.setState({ Name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Catagory: </label>

            <input
              type="text"
              name="Catagory"
              className="form-control"
              value={Catagory}
              onChange={e => this.setState({ Catagory: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Price: </label>

            <input
              className="form-control"
              type="number"
              name="Price"
              value={Price}
              onChange={e => this.setState({ Price: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Decription </label>

            <input
              className="form-control"
              type="text"
              name="Decription"
              value={Decription}
              onChange={e => this.setState({ Decription: e.target.value })}
            />
          </div>
          <button
            onClick={() =>
              this.Update(this.state.Id, "http://localhost:50492/api/Products")
            }
            to="/"
          >
            Update
          </button>
          <div className="btn-group" role="group" aria-label="...">
            <button
              type="Add"
              value="Add"
              onClick={this.infoForm}
              className="btn btn-primary"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Add;
