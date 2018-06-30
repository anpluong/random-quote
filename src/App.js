import React, { Component } from "react";
import axios from "axios";
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '', 
      author: ''
    };

    this.getRandomQuote();
  }

  //function to get the random quote
  getRandomQuote() {
    // use axios library to get the random quote
    axios
      .get(`https://talaikis.com/api/quotes/random/`, {
        headers: { Accept: "application/json" }
      })
        .then(response => {          
          this.setState({
            quote: response.data.quote,
            author: response.data.author
          });
      });
  }

  onClickEvent() {
    this.getRandomQuote();
  }

  render() {    
   return (
     <div class='container'>
      <div id='quote-box'>
        <div id='text'>        
            {this.state.quote}
        </div>
        <div id='author'>
            {this.state.author}
        </div>        
        <div>
            <button type='button' onClick={() => this.onClickEvent()}> Get a random Quote</button>
        </div>
      </div>
      </div>
    )
  }
}



export default App