import React from "react";


function Contact() {
  return (
    <div className="card">
        <div className="card-content">
<h3>Contact Me!</h3>        
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
            <li className="tab"><a href="#test4">Phone Number</a></li>
            <li className="tab"><a className="active" href="#test5">E-mail</a></li>
            <li className="tab"><a href="#test6">LinkedIn</a></li>
            <li className="tab"><a href="#test7">Github</a></li>
          </ul>
        </div>
        <div className="card-content grey lighten-4">
          <div id="test4">(352)328-8548</div>
          <div id="test5">b.gree10@gmail.com</div>
          <div id="test6"><a href="https://linkedin.com/in/bethany-g-869a04aa">LinkedIn</a></div>
          <div id="test7"><a href="https://github.com/bethtgreen">Github</a></div>
        </div>
        </div>
      </div>
  );
}

export default Contact;
