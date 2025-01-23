import { Link } from "react-router-dom";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <Link key={index} to={socialImg.link} target="_blank" rel="noopener noreferrer" aria-label={socialImg.name}>
              <div className="icon">
                <img src={socialImg.imgPath} alt={socialImg.name} />
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Nazim Uddin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
