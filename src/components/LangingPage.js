import {Component} from 'react';
import ShephardLogo from '../Resources/shephard-logo.png';

class LandingPage extends Component  {
  render(){
    return(
    <div class="NavBar">
      <div id="BrandLogo">
          <img id='Shephard-logo' src={ShephardLogo} alt='Logo Nout Found'/>
          Shephard
      </div>
      <div id="HamMenuDiv">
          <label for="toggler">&#9776;</label>
          <input type="checkbox" id="toggler"/>  
          <ul id="HamMenu">
          <li>Features</li>
          <li>About Us</li>
          <li>How To</li>
          <li id="Login">Login</li>
          </ul>
      </div>
    </div>
    );
  }
}

export default LandingPage;