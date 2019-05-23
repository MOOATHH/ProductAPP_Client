import React from "react";
class api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  delete = (idd, url) => {
    fetch(url + "?id=" + idd, {
      mode: "cors",
      method: "delete",
      headers: {
        Accept: "application/json",

        "Content-Type": "application/json"
      },

      body: JSON.stringify(this.state.items.Id)
    })
      .then(response => {
        console.log(response);
        this.componentDidMount();
      })

      .catch(error => {
        console.log(error);
      });
  };
  delete = (idd, url) => {
    fetch(url + "?id=" + idd, {
      mode: "cors",
      method: "delete",
      headers: {
        Accept: "application/json",

        "Content-Type": "application/json"
      },

      body: JSON.stringify(this.state.items.Id)
    })
      .then(response => {
        console.log(response);
        this.componentDidMount();
      })

      .catch(error => {
        console.log(error);
      });
  };
  delete = (idd, url) => {
    fetch(url + "?id=" + idd, {
      mode: "cors",
      method: "delete",
      headers: {
        Accept: "application/json",

        "Content-Type": "application/json"
      },

      body: JSON.stringify(this.state.items.Id)
    })
      .then(response => {
        console.log(response);
        this.componentDidMount();
      })

      .catch(error => {
        console.log(error);
      });
  };
  componentDidMount() {
    fetch("http://localhost:50492/api/Products")
      .then(res => res.json())

      .then(
        json => {
          this.setState({
            isLoaded: true,
            items: json
          });
        }

        // Note: it's important to handle errors here

        // instead of a catch() block so that we don't swallow

        // exceptions from actual bugs in components.
      );
  }
  render() {
    var { isLoaded, items } = this.state;
    if (isLoaded) {
      return (
        <div>
          <ul>
            {items.map(product => (
              <li key={product.Id}>
                <br />
                {product.Id}
                Name:{product.Name}
                <br /> |Price: {product.Price}
                <br /> | Decription:
                {product.Decription}
                <br /> | Catagory: {product.Catagory}
                <br />
                <button
                  type="simpleQuery"
                  onClick={() =>
                    this.delete(
                      product.Id,
                      "http://localhost:50492/api/Products"
                    )
                  }
                >
                  delete
                </button>
              </li>
            ))}
          </ul>
          <div />
        </div>
      );
    } else return <div className="api">Loading...</div>;
  }
}

export default api;
