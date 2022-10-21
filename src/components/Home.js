import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/Carousel/img1.jpg';
import img2 from '../images/Carousel/img2.jpg';
import img3 from '../images/Carousel/img3.jpg';
import img4 from '../images/Carousel/img4.jpg';
import Footer from './Footer';
import HomeBody from './HomeBody';
import img from '../images/Photo/img4.jpg'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item >
          <img
            className="d-block w-100 "
            style={{ height: 450 }}
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 450 }}
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 450 }}
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 450 }}
            src={img4}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel><br />
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"><Nav.Link as={Link} to={"/services"} className="mr-5 hover:text-white"><span style={{ color: "green" }}>SERVICES</span></Nav.Link> WE ARE PROVIDING</h1>
            </div>
            <div class="flex flex-wrap w-full">
              <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">

                <div class="flex relative pb-12">

                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>

                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Bookkeeping  </h2>
                    <p class="leading-relaxed">Bookkeeping is the process of recording your company's financial transactions into organized accounts on a daily basis.</p>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Statutory Compliance</h2>
                    <p class="leading-relaxed">Statutory compliance is a legal framework under which the Company must function all its duties</p>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Control of Financials</h2>
                    <p class="leading-relaxed">Financial controls are the procedures, policies, and means by which an organization monitors and controls the direction, allocation, and usage of its financial resources.</p>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Payroll services</h2>
                    <p class="leading-relaxed">Payroll is defined as the process of paying salary to a company's employees.</p>
                  </div>
                </div>
                <div class="flex relative">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Startup Support</h2>
                    <p class="leading-relaxed">With a CA, a Startup gets holistic advice on all corporate law, accounting, tax and all legal matters.</p>
                  </div>
                </div>
              </div>
              <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" style={{ height: 850 }} src={img} alt="step" />
            </div>
          </div>
        </section>
      </div>
      <div>
        <HomeBody />
      </div><br />
      <Footer />
    </div>
  )
}

export default Home;