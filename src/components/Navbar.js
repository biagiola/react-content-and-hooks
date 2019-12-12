  
import React, { useContext } from 'react'; // imrc
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';


const Navbar = () => { //cc
    const { isAuthenticated, toggleAuth } = useContext(AuthContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext);
        
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
}

export default Navbar;