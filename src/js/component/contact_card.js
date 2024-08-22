import React, { useContext} from "react";
import { Context } from "../store/appContext.js";


//muestra la info de los contactos

const ContactCard = ({ micontacto }) => {

    const { actions } = useContext(Context);


    return (
        <div className="card">

            <div className="contact-card">
                <img src="https://thumbs.dreamstime.com/b/s%C3%ADmbolo-del-libro-sobre-lentes-de-harry-potter-y-rel%C3%A1mpago-vector-251998760.jpg" 
                alt="Contact Photo" 
                className="contact-photo" />

                <h3> Mago/Bruja: {micontacto.name}</h3>
                <p> Email Mágico : {micontacto.email}</p>
                <p> Ruta Polvos Flú : {micontacto.phone}</p>
                <p> Colegio de Magia y Hechiceria : {micontacto.address}</p>

                <button className="btnBasura" onClick={()=> actions.eliminarContacto(micontacto.id)}>
                    <i className="fas fa-trash-alt" />
                </button>
            </div>




        </div>


    )

}

export default ContactCard;
