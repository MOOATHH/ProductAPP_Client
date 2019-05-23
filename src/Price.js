import React from "react";

handleCountry(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        name: value
      }
    }));
  }

