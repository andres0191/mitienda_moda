import React from 'react';
import './style.scss';
import ImgMiTienda from '../../img/Login/logomitiendamoda.png';
import InputMask from 'react-input-mask';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react'

export default function Auth() {
const [error, setError] = useState(false); 
const handleOnChange = (event) => {
    const inputText = event.target.value;
    inputText !== '786 547 0213' && inputText.length === 12 ? setError(true) : setError(false);
    console.log(inputText)
}

    return (
        <div className='back d-flex align-items-center justify-content-center '>
            <div className='textBox textBoxResp mt-md-10 justify-content- d-flex flex-column align-items-center'>
                <br /><br /><br />
                <div className='row justify-content-start d-flex justify-content-center logoLogin align-items-center'>
                    <img width='60%' alt="@andres0191" src={ImgMiTienda} className=' pr-1' />
                    <br />
                    <h3 className='textInput'>
                        Ingresa el numero de telefono<br />de tu asesora independiente.
                    </h3>
                </div><br />
                <div className='input-field'>
                    <InputMask mask="999 999 9999" maskChar={null} id='name' required className='inputNumber' onChange={handleOnChange}/>               
                    {error ? <p style={{color: '#ff5252', fontSize: '12px'}}>Este número no es valido o no está registrado.</p> : ''}
                    {error ? <label  style={{color: '#ff5252', fontSize: '12px'}}>Telefono</label> :           <label htmlFor='name'> Telefono: </label>}
                </div>
            </div>
        </div>
    )
}
