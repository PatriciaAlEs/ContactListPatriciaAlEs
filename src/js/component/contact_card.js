import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


const ContactCard = ({ contact, id }) => {

    const { actions } = useContext(Context);
    const navegar = useNavigate()

    return (
        <div className="card">
            <div className="contact-card row">

                <img
                    src="https://thumbs.dreamstime.com/b/s%C3%ADmbolo-del-libro-sobre-lentes-de-harry-potter-y-rel%C3%A1mpago-vector-251998760.jpg"
                    alt="Contact Photo"
                    className="contact-photo col-3"
                />
                <div className="divdetodo col-8">
                    <h3>🧙🏼‍♂️/🧙🏼‍♀️: {contact.name}</h3>
                    <p> 📩 : {contact.email}</p>
                    <p> 📞: {contact.phone}</p>
                    <p> 🏰: {contact.address}</p>
                </div>
                <div className="botones d-flex justify-content-center">

                    <button className="btn btn-warning col-1" type="button" onClick={() => actions.eliminarContacto(id)}>
                        <i className="fas fa-trash-alt" />
                    </button>

                    <button className="btn btn-dark editar col-1" onClick={() => {

                        actions.saveContact(contact)
                        navegar("/editContact/")

                    }}
                    >
                        ✏️
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;

