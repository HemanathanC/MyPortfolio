import { useState } from "react";

function Skills() {

  const [toggle,setToggle] = useState(1)
  const [active,setActive] = useState(1)
   
  function TabHandler(value){
    setToggle(value);
    setActive(value);
  }
  return (
    <div id='skills' className="skills">
      <div className="d-flex justify-content-around">
        <div>
          <div className="d-flex justify-content-end tab">
            <ul className={active === 1 ? "tabs active" : "tabs"}  onClick={()=>TabHandler(1)}>Programming</ul>
            <ul className={active === 2 ? "tabs active" : "tabs"} onClick={()=>TabHandler(2)}>Projects</ul>
          </div>
          <div className="content">
            <div className={toggle === 1 ? "show-content program" : "hide-content"}>
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>Java</li>
              <li>Python</li>
              <li>C/C++</li>
              <li>PHP</li>
              <li>React Js</li>
              <li>SQL</li>
            </div>
            <div className={toggle === 2 ? "show-content projects" : "hide-content"}>
              <li>Java Development</li>
              <p>1. Hospital Management System</p>
              <p>2. Movie Site</p>
              <p>3. Simple Job Registration</p>
              <li>In Java</li>
              <p>1. Online Voting System( using Swing)</p>
              <li>In Python using Flask</li>
              <p>1. Student Feedback System</p>
              <p>2. Inventory Management System</p>
            </div>
          </div> 
        </div>
        <div className="note">
          <p>I enjoy taking complex problems and turning them into simple and beautiful interface designs and outputs.
             I also love logic and structure of coding and always strive to write elegant and efficient code. 
             Im good at HTML, CSS, javascript. I spend my free time to learn programming languages to uprgrade my skills by myself. </p>
        </div>
      </div> 
    </div>
  )
}

export default Skills;
