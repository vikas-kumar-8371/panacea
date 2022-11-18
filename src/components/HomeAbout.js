import React from 'react';
import { Button } from 'react-bootstrap';
import img3 from "../images/Photo/img3.png";
import { Link, NavLink } from 'react-router-dom';
function HomeAbout() {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">A FEW DETAILS <span style={{ color: "green" }}>ABOUT US</span>
                        </h1>
                        <p class="mb-8 leading-relaxed">Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Quickly maximize timely deliverables for real-time schemas.</p>
                        <br /><Button variant="success"><NavLink as={Link} to={"/about"} className="mr-5 hover:text-white" style={{ textDecoration: "none", color: "white" }}>Know More About US</NavLink></Button>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src={img3} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomeAbout;