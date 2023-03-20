import "./Footer.scss";
import linkedinIcon from "../../assets/icons/linkedin-box.png";
import facebookIcon from "../../assets/icons/facebook.png";
import gitIcon from "../../assets/icons/github.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <div className="inconsText">
          <img src={linkedinIcon} className="icon" alt="linkedinicon" />
          <h6 className="htext">Linkedin</h6>
        </div>
        <div className="inconsText">
          <img src={facebookIcon} className="icon" alt="facebookicon" />
          <h6 className="htext">Facebook</h6>
        </div>
        <div className="inconsText">
          <img src={gitIcon} className="icon" alt="linkedinicon" />
          <h6 className="htext">Github</h6>
        </div>
      </div>
    </div>
  );
}
