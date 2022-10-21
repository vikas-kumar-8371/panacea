import React from 'react';
import { Button } from 'react-bootstrap';
import image from "../images/Photo/bgimage.jpg"; 
import { Link, NavLink } from 'react-router-dom';
function HomeAbout() {
    return (
        <div style={{
            backgroundImage: `url(${image})`,
            height: "750px", backgroundRepeat: "no-repeat", backgroundSize:"cover"
          }}>
            <div style={{textAlign:"left",paddingTop:"25%",paddingLeft:"10%",paddingRight:"35%"}}>
                <h1>A FEW DETAILS <span style={{color:"green"}}>ABOUT US</span></h1>
                <h3>Dynamically innovate resource-leveling customer service</h3>
                <br/>
                <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Quickly maximize timely deliverables for real-time schemas.</p>
                <br/><br/><Button variant="success"><NavLink as={Link} to={"/about"} className="mr-5 hover:text-white" style={{textDecoration:"none",color:"white"}}>Know More About US</NavLink></Button>
            </div>
          </div>
    );
}

export default HomeAbout;