import React from 'react';
import image from "../images/Photo/bgimage3.jpg";
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
function HomeContactUs() {
    return (
        <div style={{
            backgroundImage: `url(${image})`,
            height: "750px", backgroundRepeat: "no-repeat", backgroundSize:"100%"
          }}>
            <div style={{paddingTop:"15%", paddingLeft:"0%", paddingRight:"30%", position:'relative'}}>
            <h1>THE MOST <span style={{color:"darkblue"}}>COST-EFFECTIVE </span>FINANCE SERVICES</h1>
            <h3 style={{color:"red"}}>Is Now Available Here</h3>
            <br/>
            <p style={{paddingRight:"10%",paddingLeft:"10%",color:"darkblue"}}>Good services are consistent, not uniform 4 dimensions of consistency: across user journey, in each channel, over time, between users Principles: every breach of consistency is a breach of trust focus on the abilities of your whole organisation, not on the skills of your superstar players empower staff to make individual decisions about users</p>
            <br/><br/>
            <Button variant="primary"><NavLink as={Link} to={"/contact"} className="mr-5 hover:text-white" style={{textDecoration:"none",color:"white"}}>For Good Deal Connect with Us</NavLink></Button>
            </div>            
        </div>
    );
}

export default HomeContactUs;