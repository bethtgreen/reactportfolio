import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";

function Portfolio() {
  return (
    <>
<Row>
    <Col size= "s6">
      <div className="card">
        <div className="card-image">
          <img alt="" src="./assets/img/beachinit.png"/>
          <span className="card-title black">Project One</span>
        <div className="card-content">
          <p>This is the first project I completed alongside my team in the UCF Coding Bootcamp. This is an interactive application that helps you locate a beach near you, as well as some other activities, restaurants, and hotels nearby.</p>
        </div>
        <div className="card-action">
          <a href="https://anthonyloredo5.github.io/Beachin-It/index.html">Github Application Link</a>
        </div>
      </div>
    </div>
  </Col>
</Row>
{/* will render this once I figure out how to do it  */}
  {/* <div className="row">
    <div className="col s6">
      <div className="card">
        <div className="card-image">
          <img src="./assets/whatstheweather.png">
          <span className="card-title grey">What's the Weather</span>
        </div>
        <div className="card-content">
          <p>This is a weather application where you can input what city you would like to know the weather of. There will be a 5 day weather forecast below and a in the current forecast there is the temp, wind speed, humidity percentage, and uv index.</p>
        </div>
        <div className="card-action">
          <a href="https://bethtgreen.github.io/WeatherApp/">Github Repo Link</a>
        </div>
        <!-- repo links -->
    </div>
  </div>
  <div className="row">
    <div className="col s6">
      <div className="card">
        <div className="card-image">
          <img src="./assets/planyourday.png">
          <span className="card-title green">Plan Your Day</span>
        </div>
        <div className="card-content">
          <p>This is a day planner for a normal work day. The user can input his/her/their hopes of what they would like to accomplish in any timeblock they choose. The planner will let you record and save events at each hour of the day. </p>
        </div>
        <div className="card-action">
          <a href="https://bethtgreen.github.io/PlanyourDay/">Github Repo Link</a>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="row">
  <div className="col s6">
    <div className="card">
      <div className="card-image">
        <img src="./assets/teamgen.png">
        <span className="card-title black">Team Generator</span>
      </div>
      <div className="card-content">
        <p>This is a team generating application utilizing node.js. You can input different members of your team into the terminal to add them to your lineup.</p>
      </div>
      <div className="card-action">
        <a href="https://github.com/bethtgreen/OOP-TeamGen">Github Repo Link</a>
      </div>
    </div>
  </div>
</div>
<div className="row">
  <div className="col s6">
    <div className="card">
      <div className="card-image">
        <img src="./assets/buildadate.png">
        <span className="card-title red">Build-A-Date</span>
      </div>
      <div className="card-content">
        <p>This is a date building application that utilizes databases and api's to allow the user to have a great date building experience.</p>
      </div>
      <div className="card-action">
        <a href="https://github.com/bethtgreen/build-a-date">Github Repo Link</a>
      </div>
    </div>
  </div>
</div>
<div className="row">
  <div className="col s6">
    <div className="card">
      <div className="card-image">
        <img src="./assets/fitnesstracker.png">
        <span className="card-title grey">Fitness Tracker</span>
      </div>
      <div className="card-content">
        <p>This is a workout tracking application that utilizes MongoDB, Heroku, Mongoose and more. You can input either a cardio or resistance workout.</p>
      </div>
      <div className="card-action">
        <a href="https://agile-fortress-35821.herokuapp.com/ ">Heroku Link</a>
      </div>
    </div>
  </div>
</div> */}
</>
  );
}

export default Portfolio;

