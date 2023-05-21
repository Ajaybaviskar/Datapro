
import './App.css';
import React, { Component } from "react";
import Books from './books';


class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {
          id: 101,
          name:"Java"
        },
        {
          id: 102,
          name:"Python"
        },
        {
          id: 103,
          name:"Atomic Habits"
        },
        {
          id: 104,
          name:"JavaScript"
        },
        {
          id: 105,
          name:"Cyber Security & forensic"
        },
        {
          id: 106,
          name:"Hands-On Machine Learning with Scikit-learn and TensorFlow."
        }
      ]
      
    };
  }

  buttonClickHandler = () => {
    console.log(this.state);
  };

  render() {
    let books;
    books = this.state.books.map((b) => {
      return <Books name={b.name} id={b.id} />;
    });

    return (
      <div className="App">
        {books}       
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        <h1>I am a React Developer and I am build my first app using react </h1>
//       </header>
//     </div>
//   );
// }

export default App;
