import React, {useState} from 'react';
import './style.scss';
import ImgMiTienda from '../../img/logomitiendamoda.png';


export default function auth() {

const verifyType =(event)=>{
    if ( isNaN(event.target.value)){
        /* event.preventDefault(); */
        console.log('no number')
        return;
    }
    console.log('number')
} 

    return(
        <div className='back  align-center justify-center column fill-height'>
            <div className='form '>
                <img width='30%' alt="@andres0191" src={ImgMiTienda} >
                </img>
                <h3 className='text1'>
                Ingresa el numero de telefono<br/>de tu asesora independiente.
                </h3>
                {/* <input aria-label="Telefono" type='Number' maxLength='12' /> */}
                <input
                className='inputTel'
                placeholder='Telefono'
                /* type='number' */
                onKeyDown={verifyType}/>
            </div>
        </div>
    )
}