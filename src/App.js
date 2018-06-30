import React, { Component } from "react";
import axios from "axios";
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '', 
      author: '',
      colors: ['orange', 'blue', 'green', 'yellow', 'purple', 'gray', 'red', 'silver'],
      number: 0
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
            author: response.data.author,
            number: Math.floor(Math.random() * this.state.colors.length)
          });          
      });
  }

  onClickEvent() {
    this.getRandomQuote();
  }

  render() {    
   
   let style = {
     backgroundColor: this.state.colors[this.state.number]
   }
   
   return (
     <div className='container' style={style}>
      <div id='quote-box'>
        <div id='text'>        
            {this.state.quote}
        </div>
        <div id='author'>
            {this.state.author}
        </div>        
        <div id='btn-block'>
            <button id='btn-text' type='button' onClick={() => this.onClickEvent()}>New Quote</button>
        </div>  
      </div>
      </div>

    )
  }
}



export default App