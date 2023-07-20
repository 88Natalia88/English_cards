import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';
import logo from '../../assets/img/logo.png';

function Header(){
    return (
        <div className='header-container'>
        <div className='header'>
            <div className='header-logo'>
                <Link to="/English_cards"><img src={logo} alt="logo"/></Link>
            </div>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/English_cards">Главная</Link></li>
                    <li><Link to="/English_cards/game">Слова для заучивания</Link></li>
                    <li><Link to="/English_cards/training">Режим тренировки</Link></li>
                </ul>
            </nav>
            </div>
        </div>
    )
}
export default Header;