
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PortfolioItem extends Component {
    constructor(props) {
        super(props);

    }
  render() {
    return (
        <div>
          <h3>{props.title}</h3>
          <h4>{props.content}</h4>
    
          {/* <Link to={`/portfolio/${props.slug}`}>Link</Link> */}
    
        </div>
      )
  };
}


