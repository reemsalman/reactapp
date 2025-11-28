import { FaArrowRight } from "react-icons/fa";
import './index.css';
function Header(){
    return(
        <header id="header">
            
            <nav className="navbar">
                <a href="http:www.google.com" className="logo">Education</a>
                <ul>
                  <li><a href="http:www.google.com">home</a></li>  
                  <li><a href="http:www.google.com">product</a></li> 
                  <li><a href="http:www.google.com">pricing</a></li> 
                  <li><a href="http:www.google.com">contact</a></li> 
                </ul>
                <div className="account">
                    <a href="#">login</a>
                    <a href="#" className="btn-join">join us<FaArrowRight /></a>

                </div>
            </nav>
        </header>
    )
}
export default Header;