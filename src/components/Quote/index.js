import React from "react";
import "./styles.css";

class Quote extends React.Component {
  render() {
    return (
      <div className="box-container">
        <div className="quoteText" id='text'>
          <p>{this.props.quote}</p>
        </div>
        <div className="quoteAuthor" id='author'>
          <h4>- {this.props.author}</h4>
        </div>
      </div>
    );
  }
}

export default Quote;
