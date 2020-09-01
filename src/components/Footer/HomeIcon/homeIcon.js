import React from 'react';
import './style.scss';
import { useHistory } from "react-router-dom";
import 'sweetalert2/src/sweetalert2.scss';



export default function HomeIcon() {
    let History = useHistory()
    const Alerta = () => {
            History.push('/categorias')
    }
    return(
        <div>
            <button onClick={Alerta} className='button' type="button" > </button>
        </div>
    )
}