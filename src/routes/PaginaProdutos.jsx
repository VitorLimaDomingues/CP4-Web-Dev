import React from 'react';
import Produto from '../components/produtos.jsx';
import '../css/PaginaProdutos.css';

const PaginaProdutos = () => {
    const produtos = [
        { id: 1, nome: 'Chuteira Society Nike Beco', preco: 'R$ 189,99', imagem: '/src/assets/produto1.jpg' },
        { id: 2, nome: 'Tênis Nike Revolution 7 Masculino', preco: 'R$ 299,99', imagem: '/src/assets/produto2.jpg' },
        { id: 3, nome: 'Camiseta Masculina NBA', preco: 'R$ 76,90', imagem: '/src/assets/produto3.jpg' },
        { id: 4, nome: 'Bermuda Masculina Oxer ', preco: 'R$ 42,70', imagem: '/src/assets/produto4.jpg' },
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