import { Box } from '@material-ui/core';
import React from 'react';
import maleImage from '../../Assets/Images/male.png'
import femaleImage from '../../Assets/Images/lieke.jpg'

const ShortDetail = (props) => {
    const {intFormedYear ,strTeam,strGender,strCountry,strSport}= props.detail;
    return (
        <Box style={{backgroundColor: '#FC4D57',color: 'white',margin: '30px 0px'}} borderRadius={10} alignItems='center' padding='10px 10px 10px 20px' textAlign='left' justifyContent='space-between' display='flex'>
            <div>
                <h1>{strTeam}</h1> <br/> 
                <p>Founded: {intFormedYear}</p>
                <p>Country: {strCountry}</p>
                <p>Sport: {strSport}</p>
                <p>Gender: {strGender}</p>
            </div>
            <div>
                <img style={{borderRadius: '10px'}} src={femaleImage} alt=""/>
            </div>
        </Box>
    );
};

export default ShortDetail;