import React from 'react';
import './Header.scss';
import logo from '../../assets/img/logo.png';

function Header(){
    return (
        <div className='header'>
        <div className='header-logo'>
            <img src={logo} alt="logo"/>
        </div>
        <nav className="header-nav">
            <ul>
                <li><a href="#">Главная</a></li>
                <li><a href="Card.jsx">Слова для заучивания</a></li>
                <li><a href="#">Режим тренировки</a></li>
            </ul>
        </nav>
        </div>
    )
}
export default Header;