import React from 'react';
import './Footer.scss';
import linkedin from '../../assets/img/linkedin.png';
import telegram from '../../assets/img/telegram.png';
import facebook from '../../assets/img/facebook.png';

function Footer(){
    return(
        <div className='footer'>
            <div className="footer__copyright"><p>2023&copy; Nataliia Balashova</p></div>
            <div className='footer__contacts'>
                <a href="https://www.linkedin.com/in/nataliia-balashova/"><img src={linkedin}></img></a>
                <a href="https://t.me/Nataliia_Balashova"><img src={telegram}/></a>
                <a href="https://www.facebook.com/profile.php?id=100080057022262"><img src={facebook}/></a>
            </div>
        </div>
    )
}
export default Footer;