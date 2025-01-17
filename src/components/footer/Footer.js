import "./style.css";

import vk from "./../../img/icons/vk.svg";
import insta from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import lineked from "./../../img/icons/linkedIn.svg";
import twitter from "./../../img/icons/twitter.svg";


const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={insta} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={gitHub} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={lineked} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>
  );
}
 
export default Footer;