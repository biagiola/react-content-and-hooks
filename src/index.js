import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Navbar from './components/Navbar';
import BookList from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import ThemeToggle from './components/ThemeToggle';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="App">
        <ThemeContextProvider>
          <AuthContextProvider>
            <Navbar />
            <BookList />
            <ThemeToggle />
          </AuthContextProvider>
        </ThemeContextProvider>

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
