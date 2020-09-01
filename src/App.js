import React from 'react';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Catalogs from './components/Catalogs/Catalogs';
import CarShop from './components/Carshop/Carshop';
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios'


const url = 'https://api.tissini.app/api/v2/categories'
export default function App() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get(url)
    .then(res => {
      setCategorias(res.data)
      console.log(res.data)
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/inicio">
          <Home />
        </Route>
        <Route path="/Categorias">
        < Category cat={categorias} />
        </Route>
        <Route path="/Catalogo">
          <Catalogs />
        </Route>
        <Route path="/carrito">
          <CarShop />
        </Route>
      </Switch>
    </Router>
  );
}

/* <div class="v-image__image v-image__image--cover" style="background-image: url(&quot;https://mitienda.moda/img/productos-de-entrega-inmediata.e07d1e57.png&quot;); background-position: center center;"></div> */