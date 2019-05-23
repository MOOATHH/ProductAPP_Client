import React from "react";

handleCatagory(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newCatagory: {
        ...prevState.newCatagory
      }
    }));
  }

