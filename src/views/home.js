import React from 'react';

function Home(){
    return(
        <div className="jumbotron">
            <h1 className="display-3">Bem Vindo!</h1>
            <p className="lead">
                Cadastre seus Produtos.</p>
            <hr className="my-4"/>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="/cadastro-produtos" role="button">Cadastrar</a>
            </p>
        </div>
    )
}

export default Home;