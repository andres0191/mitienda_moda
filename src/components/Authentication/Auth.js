import React, { useState } from 'react';
import './style.scss';
import ImgMiTienda from '../../img/Login/logomitiendamoda.png';
import InputMask from 'react-input-mask';
import 'bootstrap/dist/css/bootstrap.css';

export default function auth() {

    return (
        <div className='back d-flex align-items-center justify-content-center flex-column' style={{ border: '3px solid green' }}>
            <div style={{ width: '24%', padding: '2rem' }} className='container   mt-md-10 justify-content- d-flex flex-column align-items-center'>
                <br /><br /><br />
                <div className='row justify-content-start d-flex justify-content-center flex-column logoLogin align-items-center'>
                    <img width='60%' alt="@andres0191" src={ImgMiTienda} className=' pr-1' />
                    <br />
                    <h3 className='textInput'>
                        Ingresa el numero de telefono<br />de tu asesora independiente.
                    </h3>
                </div><br />
                <div className='input-field'>
                    <InputMask mask="999 999 9999" maskChar={null} id='name' required className='inputNumber' />
                    <label for='name'>
                        Telefono:
                    </label>
                </div>
            </div>
        </div>
    )
}
