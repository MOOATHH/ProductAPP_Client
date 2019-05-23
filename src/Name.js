import React from "react";

handleName(e) {
  
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        name: value
      }
    }));
  }

