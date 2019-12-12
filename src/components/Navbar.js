  
import React, { Component } from 'react'; // imrc
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';


class Navbar extends Component { //cc
  render() {
    return(
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext.Consumer>{(themeContext) => {
        const { isAuthenticated, toggleAuth } = authContext;
        const { isLightTheme, light, dark } = themeContext;
        const theme = isLightTheme ? light : dark; 
        return(
          <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <div onClick={ toggleAuth }>
              { isAuthenticated ? 'Logged in' : 'Loggged out'}
            </div>
            <ul>
              <li>home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        )
        }}</ThemeContext.Consumer>
      )}</AuthContext.Consumer>
    );
  }
}

export default Navbar;