import React from 'react';
import ReactDOM from 'react-dom';

const JSX = <nav>
        <a href="index.html" class="icon">Katie Hub</a>
        <div class="right">
          <div class="dropdown">
            <button class="dropdown-btn">My Projects</button>
            <div class="dropdown-options">
              <a href="shinypokemon.html">Shiny Pokemon Gallery</a>
              <a href="wordle.html">Wordle Helper</a>
              <a href="donbrothers-quiz.html">Donbrothers Quiz</a>
              <a href="pledge-flag.html">Pledge Flag</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropdown-btn">School Projects</button>
            <div class="dropdown-options">
              <a href="bananaade.html">Bananaade</a>
              <a href="qep.html">Appstate QEP</a>
              <a href="pizzashanty.html">Pizza Shanty</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropdown-btn">Online Practice</button>
            <div class="dropdown-options">
              <a href="button.html">JavaScript Buttons</a>
            </div>
          </div>
          <a href="aboutme.html">About Me</a>
        </div>
      </nav>

class NavigationBar extends React.Component {
  render() {
    return (
      <nav>
        <a href="index.html" className={icon}>Katie Hub</a>
        <div className="right">
          <div className="dropdown">
            <button className="dropdown-btn">My Projects</button>
            <div className="dropdown-options">
              <a href="shinypokemon.html">Shiny Pokemon Gallery</a>
              <a href="wordle.html">Wordle Helper</a>
              <a href="donbrothers-quiz.html">Donbrothers Quiz</a>
              <a href="pledge-flag.html">Pledge Flag</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown-btn">School Projects</button>
            <div className="dropdown-options">
              <a href="bananaade.html">Bananaade</a>
              <a href="qep.html">Appstate QEP</a>
              <a href="pizzashanty.html">Pizza Shanty</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown-btn">Online Practice</button>
            <div className="dropdown-options">
              <a href="button.html">JavaScript Buttons</a>
            </div>
          </div>
          <a href="aboutme.html">About Me</a>
        </div>
      </nav>
    )
  }
}

ReactDOM.render(JSX, document.getElementById('master-nav'));
