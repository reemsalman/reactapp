import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";

export default function Footer(){
    return <footer id="footer">
        <div className="container">
            <div className="footerrow">
                <div className="col">
                    <h2>get in touch</h2>
                    <p>lorem ipsum dolor set amit</p>
                    <div className="social">
                        <a href=""><FaFacebook /></a>
                        <a href=""><FaInstagram /></a>
                        <a href=""><FaTwitter /></a>

                    </div>
                </div>
                <div className="col">
                    <h2>company info</h2>
                    <ul>
                        <li>about us</li>
                        <li>carrier</li>
                        <li>we are hiring</li>
                        <li>blog</li>
                    </ul>
                </div>
                 <div className="col">
                    <h2>featuers</h2>
                    <ul>
                        <li>bussines market</li>
                        <li>user</li>
                        <li>live chat</li>
                        <li>unlimited support</li>
                    </ul>
                </div>
                 <div className="col">
                    <h2>resources</h2>
                    <ul>
                        <li>ios&android</li>
                        <li>watch ademo</li>
                        <li>customers</li>
                        <li>api</li>
                    </ul>
                </div>

            </div>
            <div className="copy"><p>2025 | all reight reserved </p></div>
        </div>



    </footer>
}