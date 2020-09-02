import React, { useState } from 'react';
import './style.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { useEffect } from 'react';


const imagenes=[]
const url='https://api.tissini.app/api/v2/categories/60/products';

export default function Catalogs() {
    const [imgs, setImgs] = useState([])

useEffect(() => {
    axios.get(url).then(response => {
        response.data.products.forEach((element) => {
            element.images.forEach(item => {
                imagenes.push({
                    url:item.url, precio:element.price
                });
            })
        });
        setImgs(imagenes)
    })
},[])
    
    return(
        <div >
            <Header />
            <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel" >
                <ol class="carousel-indicators hrstyle">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner" >
                    <div class="carousel-item active">
                        <img class="d-block w-100" className='carruselstyle  mx-auto d-block' src="https://api.tissini.app/img/products/textiles/ropa-interior/2006-186_1.jpg" alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" className='carruselstyle  mx-auto d-block'src="https://api.tissini.app/img/products/textiles/ropa-interior/2006-186_0.jpg" alt="Second slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev"  href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div>
                <div>
                    {imgs.map((item, key) => (
                        <div className='d-flex flex-column align-items-center'>
                            <div >
                                <img className='catalog' src={`https://api.tissini.app${item.url}`} alt='imagen-catalogo' />
                            </div>
                            <div className='buttom justify-content-between d-flex'>
                                <div className='butAdd d-flex align-items-center justify-content-center '>
                                    Agregar
                                </div>
                                <h1 className='precio'>
                                    $ {item.precio}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}