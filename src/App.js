import React from "react";
import './Globals.css';
import './App.css';
import Tracker from "./components/tracker";

function App() {
  return (
    <>
      <div className="container">

        <div className="profile">
          <div className="perfil">
            <img className="profile-image" src="./assets/images/image-jeremy.png" alt="profile-image" />
            <span>Report for</span>
            <strong>Jeremy Robson</strong>
          </div>
          <div className="filters">
            <button className="filter">Daily</button>
            <button className="filter">Weekly</button>
            <button className="filter">Monthly</button>
          </div>
        </div>

        <Tracker icon='work' title='Work' hour={32} lastWeekHour={36}/>
        <Tracker icon='work' title='Work' hour={32} lastWeekHour={36}/>
        <Tracker icon='work' title='Work' hour={32} lastWeekHour={36}/>
        <Tracker icon='work' title='Work' hour={32} lastWeekHour={36}/>
        <Tracker icon='work' title='Work' hour={32} lastWeekHour={36}/>

      </div>
    </>
  );
}

export default App;
