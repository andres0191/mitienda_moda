import React from 'react';
import './style.scss';
import { useHistory } from "react-router-dom";
import 'sweetalert2/src/sweetalert2.scss';

export default function CatIcon() {
    let History = useHistory()
    const Alerta = () => {
            History.push('/Catalogo')
    }
    return(
        <div class="v-btn__content click">
            <button onClick={Alerta} className='button' type="button" >
            </button>
        </div>

        
    )
}