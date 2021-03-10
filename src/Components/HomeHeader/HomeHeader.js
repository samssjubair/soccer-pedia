import React from 'react';
import coverImage from '../../Assets/Images/stadium.png'
import './HomeHeader.css'

const HomeHeader = (props) => {
    let isHome;
    if(props.images){
        isHome=false;
        const {strTeamBadge,strStadiumThumb} =props.images;
        return (
            <div className="header-container">
                <img className="header-img bright-100" src={ strStadiumThumb } alt=""/>
                <img className="centered" src={strTeamBadge} alt=""/>
            </div>
        );
    }
    else{
        isHome=true;
        console.log(isHome);
        return (
            <div className="header-container">
                <img className="header-img bright-50" src={ coverImage } alt=""/>
                <h1 className="centered">English Premier League</h1>
            </div>
        );
    }
    
    
};

export default HomeHeader;