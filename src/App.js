import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteList: [], 
      quote: ''
    };

    this.getRandomQuote();
  }

  // function to get the random quote
  getRandomQuote() {
    // use axios library to get the random quote
    axios
      .get(`https://talaikis.com/api/quotes/random/`, {
        headers: { Accept: "application/json" }
      })
        .then(response => {
          const quote = response.data.quote;
          // create a new Array
          const quoteList = [...this.state.quoteList, quote]
          console.log(quoteList)
          this.setState({ quoteList, quote });
      });
    }

  onClickEvent() {
    this.getRandomQuote();
  }

  render() {    
   return (
      <div>
        <p>{this.state.quote}</p>
        {/* I use the callback function which is called when the event is clicked */}
        <p style={{textAlign: "center"}}><button type='button' onClick={() => this.onClickEvent()}> Get a random Quote</button></p>
      </div>
    )
  }
}

export default App