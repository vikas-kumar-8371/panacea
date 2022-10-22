// import { Link } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
// import '../App.css';
// import logo from '../images/Carousel/Logo.PNG';
// import { FaMapMarkerAlt, FaMobileAlt, FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagram, FaRegEnvelope } from "react-icons/fa";

// function Footer() {
//     return (
//         <>
//             <footer className="text-gray-600 body-font">
//                 <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
//                     <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
//                         <div class="header">
//                             <img src={logo} alt="logo" />
//                             <h6 className="ml-3 text-xl" style={{fontWeight:'bold'}}>PANACEA SOLUTION</h6>
//                         </div>
//                         </div>
//                     <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
//                         <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//                             <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Social Media</h2>
//                             <nav className="list-none mb-10">
//                                 <li><a href="#" style={{display:'inline-block'}}><FaFacebookSquare></FaFacebookSquare></a></li>
//                                 <li><a href="#"  style={{display:'inline-block'}}><FaTwitterSquare></FaTwitterSquare></a></li>
//                                 <li><a href="#"  style={{display:'inline-block'}}><FaLinkedin></FaLinkedin></a></li>
//                                 <li><a href="#"  style={{display:'inline-block'}}><FaInstagram></FaInstagram></a></li>
//                             </nav>
//                         </div>
//                         <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//                             <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Career</h2>
//                             <nav className="list-none mb-10">
//                             <li><Nav.Link as={Link} to={"#"} className="mr-5 hover:text-white">Accountant</Nav.Link></li>
//                             <li><Nav.Link as={Link} to={"#"} className="mr-5 hover:text-white">Manager</Nav.Link></li>
//                             <li><Nav.Link as={Link} to={"#"} className="mr-5 hover:text-white">CA</Nav.Link></li>
//                             </nav>
//                         </div>
//                         <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//                             <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Feedback</h2>
//                             <nav className="list-none mb-10">
//                             <li><Nav.Link as={Link} to={"/feedback"} className="mr-5 hover:text-white">CustomerFeedback</Nav.Link></li>
//                             <li><Nav.Link as={Link} to={"/feedback"} className="mr-5 hover:text-white">CustomerRating</Nav.Link></li>
//                             </nav>
//                         </div>
//                         <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//                             <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Links</h2>
//                             <nav className="list-none mb-10">
//                                 <li><Nav.Link as={Link} to={"/services"} className="mr-5 hover:text-white">Services</Nav.Link></li>
//                                 <li><Nav.Link as={Link} to={"/about"} className="mr-5 hover:text-white">AboutUs</Nav.Link></li>
//                                 <li><Nav.Link as={Link} to={"/contact"} className="mr-5 hover:text-white">ContactUs</Nav.Link></li>
//                                 <li><Nav.Link as={Link} to={"/login"} className="mr-5 hover:text-white">EmployeeLogin</Nav.Link></li>
//                             </nav>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="bg-gray-900">
//                     <div className="container mx-auto py-2 px-5 flex flex-wrap flex-col sm:flex-row">
//                         <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 Designed by: Vikas Kumar —
//                             <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@vikas8371</a>
//                         </p>
//                         <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
//                             <a className="text-gray-500">
//                                 <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
//                                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//                                 </svg>
//                             </a>
//                             <a className="ml-3 text-gray-500">
//                                 <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
//                                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//                                 </svg>
//                             </a>
//                             <a className="ml-3 text-gray-500">
//                                 <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
//                                     <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
//                                     <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
//                                 </svg>
//                             </a>
//                             <a className="ml-3 text-gray-500">
//                                 <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
//                                     <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
//                                     <circle cx="4" cy="4" r="2" stroke="none"></circle>
//                                 </svg>
//                             </a>
//                         </span>
//                     </div>
//                 </div>
//             </footer>
//         </>
//     )
// }
// export default Footer;
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import '../CSS/footer.css';
import logo from '../images/Carousel/Logo.PNG';
import { FaMapMarkerAlt, FaMobileAlt, FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagram, FaRegEnvelope } from "react-icons/fa";
function Footer() {
    return (
        <>
            <footer class="footer-distributed">

                <div class="footer-left">

                    <div className='header'>
                        <img src={logo} />
                    </div>

                    <p class="footer-links">
                        <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                        
                        <Nav.Link as={Link} to={"/services"}>Services</Nav.Link>

                        <Nav.Link as={Link} to={"/about"}>AboutUS</Nav.Link>

                        <Nav.Link as={Link} to={"/contact"}>ContactUS</Nav.Link>

                        <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>

                    </p>

                    <p class="footer-company-name">&nbsp;PANACEA SOLUTION © 2022</p>
                </div>

                <div class="footer-center">

                    <div>
                        <div className='map'><FaMapMarkerAlt /></div>&nbsp;
                        <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                    </div><br />

                    <div>
                        <div className='phone'><FaMobileAlt /></div>&nbsp;
                        <p>+1.555.555.5555</p>
                    </div><br />

                    <div>
                        <div className='envelop'><FaRegEnvelope /></div>&nbsp;
                        <p><a href="mailto:support@company.com">support@company.com</a></p>
                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>

                    <div class="footer-icons">
                        <a href="#"><FaFacebookSquare /></a>
                        <a href="#"><FaTwitterSquare /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>

                </div>

            </footer>
        </>
    )
}
export default Footer;