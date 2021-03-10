import React from 'react';
import HomeHeader from '../HomeHeader/HomeHeader';

const NotFound = () => {
    return (
        <div style={{textAlign:'center'}}>
            <HomeHeader ></HomeHeader>
            <h1>404! page not found.</h1>
            <h2>Try again after some time.</h2>
        </div>
    );
};

export default NotFound;