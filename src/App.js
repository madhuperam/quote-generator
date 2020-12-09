import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      author: "- Albert Einstein",
      quote: "A person who never made a mistake never tried anything new."
    }
    this.setRandomColor = this.setRandomColor.bind(this);
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }

  getRandomQuote(){
    let rand = Math.floor(Math.random()*1643);
    let author="";
    let text ="";
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      text += data[rand].text;
      author += data[rand].author;
      console.log(author);
      console.log(text);
      document.getElementById("text").innerHTML = text;
      document.getElementById("author").innerHTML = "- "+author;
    });
    this.setState(()=>({
      author: author,
      quote: text
    }));
    console.log(author);
    console.log(text);

  }

  setRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = "#";
    for(var i=0;i<6;i++){
      color += letters[Math.floor(Math.random()*16)];
    }
    if(color === "#ffffff"){
      color = "#ff4dc4";
    }
    this.getRandomQuote();
    document.body.style.background = color;
    document.body.style.color = color;
    var btns = document.getElementsByClassName("buttons");
    for(var i=0;i<btns.length;i++){
      btns[i].style.background = color;
    }
  }
  render(){
    return(
      <div className="App">
      <div id="quote-box">
        <div className="content">

          <div id="text-box">
            <i className="fas fa-quote-left" /><p id="text">A person who never made a mistake never tried anything new.</p>
          </div>
          <div id="author">
            - Albert Einstein
          </div>
          <div id="buttons">
            <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank"><button className="btn btn-default buttons posts"><i className="fab fa-twitter"/></button></a>
            <a href="https://facebook.com/" id="post-quote" target="_blank"><button className="btn btn-default buttons posts"><i className="fab fa-facebook"/></button></a>
            <button id="new-quote" className="btn btn-default buttons" onClick={this.setRandomColor}>New quote</button>
          </div>
        </div>

      </div>
      <div className="coder">
        <strong>Coded by Madhurima Peram</strong>
      </div>
      </div>
    );
  };
}

export default App;
