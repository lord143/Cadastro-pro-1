import React from "react";

import {BrowserRouter as Router ,Switch ,Route, Link } from 'react-router-dom';

import Home from './views/home'
import CadastroProduto from './views/cadastro/produtos'
import ConsultaProdutos from './views/cadastro/consulta'

function Rotas() {
    return (        
        <Router>
            <div className='App'>
                <Link to='/cadastro-produtos'></Link>
                <Link to='/'></Link>
                <link to='/cadastro-consulta'></link>
            </div>
            <Switch>
                <Route exact path="/cadastro-produtos/:sku?" component={CadastroProduto}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/consulta-produtos" component={ConsultaProdutos}/>
            </Switch>

        </Router>
    )
}

export default Rotas;
