import React, { useState }  from 'react';
import Imagen from '../assets/email.png';
import { Button } from './Button';
import db from '../firebase';
import { collection, addDoc} from "firebase/firestore/lite";
import ReactJsAlert from "reactjs-alert";

function Contact() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');  
    const [mensaje, setMensaje] = useState('');  

    const createDoc = async()=>{
        const usuario = { 
          nombre: nombre, 
          correo: correo,
          telefono: telefono,
          mensaje: mensaje
        }
        alert("Recibimos tus datos, en breve te contactaremos.")
        await addDoc(collection(db,'contactanos'),usuario);  
        setNombre('');
        setCorreo('');
        setTelefono('');     
        setMensaje('');
    } 

    const nombreChangeHandler = (event) => {
        setNombre(event.target.value);
    }

    const correoChangeHandler = (event) => {
        setCorreo(event.target.value);
    }

    const telefonoChangeHandler = (event) => {
        setTelefono(event.target.value);
    }

    const mensajeChangeHandler = (event) => {
        setMensaje(event.target.value);
    }

    return (
        <div class="contact-us">
            <div class="contact-us-section">
                <p class="list-2 contact-title">Dejanos tus datos y te contactaremos.</p>        
                <input type="text" onfocus="this.value=''" class="name" placeholder='Nombre' value={nombre} onChange={nombreChangeHandler}/>
                <input type="email" onfocus="this.value=''" class="email" placeholder='Correo Electrónico' value={correo} onChange={correoChangeHandler}/>
                <input type="tel" onfocus="this.value=''" class="tel" placeholder='Teléfono' value={telefono} onChange={telefonoChangeHandler}/>
                <input type="text" onfocus="this.value=''" class="msj" placeholder='Mensaje' value={mensaje} onChange={mensajeChangeHandler}/>
                <Button onClickHandler={createDoc}>Envíar</Button>   
            </div>
            <img className="img-contact" src={Imagen}/>
        </div>
    )
}

export {Contact};