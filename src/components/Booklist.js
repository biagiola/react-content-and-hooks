
import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
          <li style={{ background: theme.ui}}>The Lord of the Rings</li>
          <li style={{ background: theme.ui}}>I, robot</li>
          <li style={{ background: theme.ui}}>The art of war</li>
        </ul>
      </div>
    );
  }

}

export default BookList;