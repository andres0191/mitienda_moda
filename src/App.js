import React from 'react';
/* import Auth from './components/Authentication/Auth'; */
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Catalogs from './components/Catalogs/Catalogs';
import CarShop from './components/Carshop/Carshop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 /*  Link */
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Home" /* path='/' */>
          <Home />
        </Route>
        <Route path="/Category">
          Pagina de Categorias
        < Category />
        </Route>
        <Route path="/Catalogs">
          Pagina de Catalogo
          <Catalogs />
        </Route>
        <Route path="/Carshop">
          Pagina de Carrito de compras
          <CarShop />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
