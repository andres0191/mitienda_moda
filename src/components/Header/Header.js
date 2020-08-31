import React, { Component } from 'react';
import './style.scss';
import Tel from './Tel/Tel';
import Logout from './Logout/Logout';


export default function Header() {
    return(
        <div className='header'>
            <ul  className=' d-flex justify-content-between align-items-center '>
                <p>Cliente Pruebas</p>
                <div className=' icons d-flex justify-content-around'>
                    <Tel />
                    <Logout />
                </div>
            </ul>
        </div>
    )
}