import React from 'react';
import Produto from '../components/produtos.jsx';
import '../css/PaginaProdutos.css';

const PaginaProdutos = () => {
    const produtos = [
        { id: 1, nome: 'Produto 1', preco: 'R$ 100', imagem: '/images/produto1.jpg' },
        { id: 2, nome: 'Produto 2', preco: 'R$ 150', imagem: '/images/produto2.jpg' },
        { id: 3, nome: 'Produto 3', preco: 'R$ 200', imagem: '/images/produto3.jpg' },
        { id: 4, nome: 'Produto 4', preco: 'R$ 250', imagem: '/images/produto4.jpg' },
    ];

    return (
        <section className="pagina-produtos">
            <h1>Página de Produtos</h1>
            <div className="produtos-lista">
                {produtos.map(produto => (
                    <Produto 
                        key={produto.id} 
                        nome={produto.nome} 
                        preco={produto.preco} 
                        imagem={produto.imagem} 
                    />
                ))}
            </div>
        </section>
    );
};

export default PaginaProdutos;

