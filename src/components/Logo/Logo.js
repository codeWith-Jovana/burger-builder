import React from 'react';
import './Logo.css';
import LogoImage from '../../assets/images/logo.png';

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img className="LogoImage" src={LogoImage} alt="MyBurgerLogo" />
    </div>
);

export default logo;