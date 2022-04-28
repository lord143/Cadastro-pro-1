import React from "react";

export default (props) => (

        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Nome</th> 
                    <th>SKU</th>                                                       
                    <th>Preço</th>
                    <th>Fornecedor</th>
                    <th>Setor</th>
                    <th>Anexo</th>
                    <th>Ações</th>
                </tr>

            </thead>
            <tbody>
                {props.produtos.map( (produto, index) => {
                    return (
                        <tr key={index}> 
                            <th>{produto.nome}</th>                                       
                            <th>{produto.sku}</th>                                                                
                            <th>{produto.preco}</th>
                            <th>{produto.fornecedor}</th>
                            <th>{produto.Setor}</th>
                            <th>{produto.anexo}</th>
                            <th>
                                <button onClick={() => props.editarAction(produto.sku)} 
                                    className="btn btn-primary">Editar</button>
                                <button onclick={() =>props.deLetarAction(produto.sku)} 
                                    className="btn btn-danger">Remover</button>
                            </th>
                        </tr>
                    )

                    }) 
                }
            </tbody>

         </table>
)