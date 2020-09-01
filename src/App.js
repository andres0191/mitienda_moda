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
import { createBrowserHistory } from 'history';


const url = 'https://api.tissini.app/api/v2/categories'
export default function App() {
  const [categorias, setCategorias] = useState([]);
 const [navigation, setNavigation] = useState(false)
  let History = createBrowserHistory();

 

  useEffect(() => {
    if(!navigation){
      History.push('/inicio')
      setNavigation(true)
    } 
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
        <Route path="/categorias">
        < Category  cat={categorias}  />
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

