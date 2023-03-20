import "./Home.scss";
import meImg from "./../../assets/images/IMG_3505.jpeg";

export default function Home() {
  return (
    <div className="cnt-1">

    
    <div className="cnt-page">
      <div className="cnt-page__txt">
        <h4 className="cnt-page__txth4">
          Hola, soy David!
          Frontend Dev Junior, y
          aquí te muestro algunos de mis proyectos utilizando
          HTML, JS, REACT,SASS etc.
        </h4>
      </div>
      <div className="cnt-page__img">
        <img src={meImg} className="img" alt="img"></img>
      </div>
    </div>
    </div>
  );
}
