import React from 'react';
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
    <>
        
        <section className="nav">
            <Link to="/" className="tlink">Home</Link>
            <Link to="/produto" className="tlink">Produto</Link>
            <Link to="/sobre" className="tlink">Sobre</Link>
        </section>
        <hr />
    </>    
    )
}

export default Nav