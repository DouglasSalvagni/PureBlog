import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
    return(
        <header id='main-header'>
            <div className='header-content'>
                <Link to='/'>Blog programador</Link>
                <Link to='/login'>Entrar</Link>
            </div>
        </header>
    );
}

export default Header;