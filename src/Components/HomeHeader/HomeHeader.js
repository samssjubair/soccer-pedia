import React from 'react';
import coverImage from '../../Assets/Images/stadium.png'
import './HomeHeader.css'

const HomeHeader = () => {
    return (
        <div className="header-container">
            <img className="header-img" src={coverImage} alt=""/>
            <h1 className="centered-txt">SoccerPedia</h1>
        </div>
    );
};

export default HomeHeader;