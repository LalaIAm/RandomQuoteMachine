import React, { Component } from "react";
import quotes from "./quotes.js";

 
import "./styles.css";
import Quote from "../Quote";

let quotesList = quotes();

const getRandomQuote = () => {
  let index = Math.floor(Math.random() * quotesList.length);
  let randomQuote = quotesList[index];
  return randomQuote;
};

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    let firstQuote = getRandomQuote();
    this.state = {
      quote: firstQuote.quote,
      author: firstQuote.author
    };
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote() {
    const newQuote = getRandomQuote();
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author
    });
  }

  render() {
    return (
      <div className="container">
        <div className="quote-box" id="quote-box">
          <Quote quote={this.state.quote} author={this.state.author} />
          <div className="btn-container">
            <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet Me <i className="fa fa-twitter"></i></a>
            <button
              id="new-quote"
              onClick={this.getNewQuote}
              className="btn"
              name="quote-change"
            >
              Change Me
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
