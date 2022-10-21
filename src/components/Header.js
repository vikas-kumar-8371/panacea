import { Link, NavLink } from 'react-router-dom';
import '../App.css';
import logo from '../images/Carousel/Logo.PNG';
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <><div>
            <header className="text-gray-400 bg-gray-000 body-font">
                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <div class="header">
                        <img src={logo} alt="logo" />
                    </div>
                    <span className="ml-3 text-xl" style={{color:"darkblue", fontWeight:"bold"}}>PANACEA</span>

                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"> 
                        <Button variant="light"><NavLink as={Link} to={"/home"} className="mr-5 hover:text-white" style={{textDecoration:"none"}}>Home</NavLink></Button>{' '} 
                        <Button variant="light"><NavLink as={Link} to={"/services"} className="mr-5 hover:text-white" style={{textDecoration:"none"}}>Services</NavLink></Button>{' '}
                        <Button variant="light"><NavLink as={Link} to={"/about"} className="mr-5 hover:text-white" style={{textDecoration:"none"}}>AboutUs</NavLink></Button>{' '}
                        <Button variant="light"><NavLink as={Link} to={"/contact"} className="mr-5 hover:text-white" style={{textDecoration:"none"}}>ContactUs</NavLink></Button>{' '}
                        <Button variant="light"><NavLink as={Link} to={"/login"} className="mr-5 hover:text-white" style={{textDecoration:"none"}}>EmployeeLogin</NavLink></Button>{' '}
                    </nav>
                </div>
            </header>
            </div>
        </>
    )
}
export default Header;