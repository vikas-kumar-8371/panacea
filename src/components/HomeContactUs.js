import React from 'react';
import image from "../images/Photo/bgimage3.jpg";
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
function HomeContactUs() {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={image} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h2>THE MOST <span style={{ color: "darkblue" }}>COST-EFFECTIVE </span>FINANCE SERVICES <br /><span style={{ color: "red" }}>Is Now Available Here</span></h2>
                        <p style={{ color: "darkblue" }}>Good services are consistent, not uniform 4 dimensions of consistency: across user journey, in each channel, over time, between users Principles: every breach of consistency is a breach of trust focus on the abilities of your whole organisation, not on the skills of your superstar players empower staff to make individual decisions about users</p>

                        <div class="flex justify-center">
                        <Button variant="warning"><NavLink as={Link} to={"/about"} className="mr-5 hover:text-white" style={{ textDecoration: "none", color: "black" }}>Connect with Us</NavLink></Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeContactUs;