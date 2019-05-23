import React from "react";

handleFEmail(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        name: value
      }
    }));
  }

