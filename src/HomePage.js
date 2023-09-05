import CurrentTime from './CurrentTime';
import CountDown from './Countdown';
import Books from './Context_Component/Books.js';
import React, { useState } from 'react';
import TodoList from './Todolist';
import './Homepage.css';

function HomePage() {
  const [CTstate, setCTstate] = useState(1);
  const Changepage = (state) => {
    setCTstate(state);
  };
  console.log(CTstate);

  const renderingComponents = () => {
    if (CTstate === 1) {
     return <CurrentTime />;
    }
     else if (CTstate === 2) {
      return<CountDown />;
    }
     else if (CTstate === 3) {
      return<TodoList />;
    }
     else if (CTstate === 4) {
      return<h4>Page To be Create</h4>;
    }
    else if (CTstate === 5) {
      return<Books />;
    }
  };

  function logoutfunc() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div id="homepagecon">
      <h1>Home Page</h1>
      <div className="homepage">
        <div id="navbar">
          <button onClick={() => Changepage(1)}>CurrentTime</button>
          <button onClick={() => Changepage(2)}>CountDown</button>
          <button onClick={() => Changepage(3)}>Todo List</button>
          <button onClick={() => Changepage(4)}>API Call</button>
          <button onClick={() => Changepage(5)}>Context API </button>
          <button onClick={logoutfunc}>Logout</button>
        </div>
      </div>
      <div id="changingpages">{renderingComponents()}</div>
    </div>
  );
}

export default HomePage;

