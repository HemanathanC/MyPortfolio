import React from 'react'
import feedback from './images/feedback.png'
import inventory from './images/inventory.png'
import hospital from './images/hospital.png'
import criminal from './images/criminal.png'
import movie from './images/movie.png'

function MoreWorks() {
    document.title = "My Works";
  return (
      <div className='MoreWorks'>
            <p id="works">WORKS</p>
            <div className="work-list d-flex flex-wrap">
                <div className="work">
                    <img src={feedback} alt="Student Feedback System"/>
                    <div className="layer">
                        <h3>Student Feedback System</h3>
                        <p>Automate feedback process for teachers using Python Flask, HTML, Javascript, SQL</p>
                        <a href="https://github.com/HemanathanC/StudentFeedbackSystem" target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="work">
                    <img src={inventory} alt="Inventory Management System"/>
                    <div className="layer">
                        <h3>Inventory Management System</h3>
                        <p>Tracking inventory levels, orders, sales and deliveries using Python Flask, HTML, Javascript, SQL</p>
                        <a href="https://github.com/HemanathanC/InventoryManagementSystem" target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="work">
                    <img src={hospital} alt="Hospital Management System"/>
                    <div className="layer">
                        <h3>Hospital Management System</h3>
                        <p>Store and Manage patient's and doctor's details using HTML, Javascript, Java Servlet ,SQL</p>
                        <a href="https://github.com/HemanathanC/HospitalDatabase" target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="work">
                    <img src={movie} alt="Movie Torrent Site"/>
                    <div className="layer">
                        <h3>Movie Torrent Site</h3>
                        <p>Movie torrent files download using HTML, Javascript, Java Servlet, SQL</p>
                        <a href="https://github.com/HemanathanC/Movie-site" target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div> 
                <div className="work">
                    <img src={criminal} alt="Movie Torrent Site"/>
                    <div className="layer">
                        <h3>Criminal Database Management System</h3>
                        <p>Store the details of police, criminals and their crimes using HTML, Javascript, Java Servlet, SQL</p>
                        <a href="https://github.com/HemanathanC/CriminalDatabase" target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>    
            </div>                  
        </div>
  )
}

export default MoreWorks
