import React, { useState }  from 'react';
import db from '../firebase';
import { collection, addDoc } from "firebase/firestore/lite";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Imagen from '../assets/IMG_1907.PNG'
import { getValue } from '@testing-library/user-event/dist/utils';
import { Button } from './Button';
import ReactJsAlert from "reactjs-alert";

function Reservation() {
  const [startDate, setStartDate] = useState(new Date());
  const [info, setInfo] = useState();
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');  

  const createDoc = async()=>{
    const usuario = { 
      nombre: nombre, 
      telefono: telefono,
      date: startDate
    }    
    alert("Reservaste con éxito, te esperamos.")
    await addDoc(collection(db,'coleccion-demo'),usuario);
    setNombre('');
    setTelefono('');
  } 

  const nombreChangeHandler = (event) => {
    setNombre(event.target.value);
  }

  const telefonoChangeHandler = (event) => {
    setTelefono(event.target.value);
  }

  return (  
    
    <div className="contact-sec">
      <img className="img-reservation" src={Imagen}/>
      <div className="contact-section">
        <p className="list-2 contact-title">¡Reserva tu mesa!</p>        
        <input type="text" className="name" placeholder='Nombre' value={nombre} onChange={nombreChangeHandler} />
        <input type="tel" className="tel" placeholder='Telefono' value={telefono} onChange={telefonoChangeHandler}/>        
        <DatePicker
          selected={startDate}
          onChange={setStartDate}
          input={false}
          timeInputLabel="Time:"
          dateFormat="dd/MM/yyyy HH:mm"          
          timeConstraints={{
            hours: { min: 13, max: 23 },
            minutes: { min: 0, max: 59 }            
          }}
          showTimeInput
        />       
        <Button onClickHandler={createDoc}>Envíar</Button>             
      </div>      
    </div>
  )
}

export { Reservation };
 