import React from 'react'
import { Link } from 'react-router-dom'
import feedback from './images/feedback.png'
import inventory from './images/inventory.png'
import hospital from './images/hospital.png'

function Works() {
  return (
    <div className='myworks'>
        <p id="works">WORKS</p>
        <div className="work-list d-lg-flex flex-wrap">
            <div className="work">
                <img src={feedback} alt="Student Feedback System"/>
                <div className="layer">
                    <h3>Student Feedback System</h3>
                    <p>Automate feedback process for teachers using Python Flask, HTML, Javascript, SQL</p>
                    <a href="https://github.com/HemanathanC/StudentFeedbackSystem" download target='blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="work">
                <img src={inventory} alt="Inventory Management System"/>
                <div className="layer">
                    <h3>Inventory Management System</h3>
                    <p>Tracking inventory levels, orders, sales and deliveries using Python Flask, HTML, Javascript, SQL</p>
                    <a href="https://github.com/HemanathanC/InventoryManagementSystem" download target='blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="work">
                <img src={hospital} alt="Hospital Management System"/>
                <div className="layer">
                    <h3>Hospital Management System</h3>
                    <p>Store and Manage patient's and doctor's details using HTML, Javascript, Java Servlet ,SQL</p>
                    <a href="https://github.com/HemanathanC/HospitalDatabase" download target='blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div> 
        </div>
        <Link to='moreWorks' className='btn' target='_blank'>See More</Link>
    </div>
  )
}

export default Works
