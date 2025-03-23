import React from 'react';

const Produto = ({ nome, preco, imagem }) => {
    return (
        <div className="produto">
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <p>Preço: {preco}</p>
        </div>
    );
};

export default Produto;
