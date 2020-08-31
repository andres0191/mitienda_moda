import React from 'react';
import './style.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


export default function Category(props) {
    return(
        <div className='hrstyle'>
            <Header />
            <div>
                {/* producos de entrega inmediata */}
                <img src={'https://mitienda.moda/img/productos-de-entrega-inmediata.e07d1e57.png'} />
            </div>

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner" >
                    <div class="carousel-item active">
                        <img class="d-block w-100" className='carruselstyle' src="https://api.tissini.app/img/categories/ropa-interior-prominent.jpg" alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" className='carruselstyle'src="https://api.tissini.app/img/categories/seamless-prominent.jpg" alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" className='carruselstyle'src="https://api.tissini.app/img/categories/tapabocas-prominent.jpg" alt="Third slide"/>
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
                <img src={'https://api.tissini.app/img/categories/newarrivals.png?vuetify-preload'} />
            </div>
            <div >
                <img className='recienllegados' src={"https://api.tissini.app/img/products/concord/recamaras/AranzaVinoSCF_0.jpg"} />
                <img className='recienllegados' src={'https://api.tissini.app/img/products/textiles/blusas/2006-109_0.jpg'} />
                <img className='recienllegados' src={"https://api.tissini.app/img/products/textiles/sport/2006-192_0.jpg"} />
                <img className='recienllegados' src={"https://api.tissini.app/img/products/textiles/sport/2006-113_0.jpg"} />
                
            </div>
            {props.cat.map((category, key) => (
                <div key={key}>
                    <img src={`https://api.tissini.app${category.image}`} />
                </div>
                ))}
            <Footer />
        </div>
    )
}
