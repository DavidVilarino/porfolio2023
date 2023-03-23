import "./Home.scss";
import face from "../../assets/icons/facebook.png"
import git from "../../assets/icons/github.png"
import linkdin from "../../assets/icons/linkedin-box.png"


export default function Home() {
  return <div className="cnt-home">
    <div className="cnt-home__tittleDiv">
      <h1 className="tittle-name">David Brohts</h1>
      <h3 className="tittle-dev">Junior Developer</h3>
    </div>
    <div className="cnt-home-icns">
      <img alt="logo"src={face} className="cnt-home-icns__face"></img>
      <img alt="logo" src={git} className="cnt-home-icns__git"></img>
      <img alt="logo" src={linkdin} className="cnt-home-icns__linkedin"></img>
    </div>
  </div>;
}
