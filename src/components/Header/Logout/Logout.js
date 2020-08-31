import React from 'react';
import './style.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { useHistory } from "react-router-dom";


export default function Logout() {
    let History = useHistory()
        const Alerta = (event) => {
    
        Swal.fire({
            title: '¿Quieres Salir?',
            text: "Dándole un toque a este botón sales de la Tienda. Si quieres navegar en la Tienda utiliza las opciones de la parte inferior:",
            showCancelButton: true,
            confirmButtonColor: '#F06292',
            cancelButtonColor: '#F06292',
            cancelButtonText: 'VOLVER',
            confirmButtonText: 'SALIR DE LA TIENDA!'
            }).then((result) => {
            if (result.value) {
                History.push('/inicio')
            }
            })
    }
    return(
        <div>     
                <button onClick={Alerta} className='button' type="button" >
                    <div class="v-btn__content">
                    <i className="material-icons logout">exit_to_app</i>
                    </div>
                </button>
        </div>
    )
}
