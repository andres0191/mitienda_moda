import React from 'react';
import './style.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { useEffect } from 'react';


const imagenes=[]
const precio=[]
const url='https://api.tissini.app/api/v2/categories/60/products';

export default function Catalogs() {

useEffect(() => {
    axios.get(url).then(response => {
        response.data.products.forEach((element) => {
            element.images.forEach(item => {
                imagenes.push(item.url);
                console.log(item.url)
            })
        });
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
                    {imagenes.map((item, key) => (
                        <div>
                            <img className='catalog mx-auto d-block' src={`https://api.tissini.app${item}`} />
                        </div>
                            
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}