import "./Contact.scss"


export default function Contact(){

    return(
        <div className="contactdiv">
            <div className="contactdiv-cnt">
                <h1 className="contactdiv-h1">Estoy deseando ponerme en contacto contigo! </h1>
                <form className="contactdiv-form">
                    <input className="contactdiv-inp" placeholder="Nombre"></input>
                    <input className="contactdiv-inp" placeholder="Apellidos"></input>
                    <input className="contactdiv-inp" placeholder="E-mail"></input>
                    <input className="contactdiv-inp" placeholder="Telf"></input>
                   
                    <textarea className="contactdiv-inp__ms" placeholder="Mensaje bonito"></textarea>
                    <button className="contactdiv-btn">Enviar</button>
                </form>

            </div>

        </div>
    )
}


<input className="contactdiv-inp__ms" placeholder="Mensaje bonito"></input>