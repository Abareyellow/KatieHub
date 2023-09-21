import React from 'react';
import ReactDOM from 'react-dom';

class NavigationBar extends React.Component {
  render() {
    return (
      <nav>
        <a>Katie Hub</a>
        <div>
          <div>
            <button>My Projects</button>
            <div>
              <a>Shiny Pokemon Gallery</a>
              <a>Wordle Helper</a>
              <a>Donbrothers Quiz</a>
              <a>Pledge Flag</a>
            </div>
          </div>
          <div>
            <button>School Projects</button>
            <div>
              <a>Bananaade</a>
              <a>Appstate QEP</a>
              <a>Pizza Shanty</a>
            </div>
          </div>
          <div>
            <button>Online Practice</button>
            <div>
              <a>JavaScript Buttons</a>
            </div>
          </div>
          <a>About Me</a>
        </div>
      </nav>
    )
  }
}

let nav = document.getElementById('master-nav');

//console.log(nav)

ReactDOM.render(<NavigationBar />, document.getElementById('master-nav'));
