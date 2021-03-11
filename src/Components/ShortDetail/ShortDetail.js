import { Box } from '@material-ui/core';
import React from 'react';
import maleImage from '../../Assets/Images/male.png';
import femaleImage from '../../Assets/Images/lieke.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { faMars } from '@fortawesome/free-solid-svg-icons'

const ShortDetail = (props) => {
    const {intFormedYear ,strTeam,strGender,strCountry,strSport}= props.detail;
    return (
        <Box style={{backgroundColor: '#FC4D57',color: 'white',margin: '30px 0px'}} borderRadius={10} alignItems='center' padding='10px 10px 10px 20px' textAlign='left' justifyContent='space-between' display='flex'>
            <div>
                <h1>{strTeam}</h1> <br/> 
                <p><FontAwesomeIcon fixedWidth  size='xs' icon={faMapMarkerAlt} /> &nbsp; Founded: {intFormedYear}</p>
                <p><FontAwesomeIcon fixedWidth  size='xs' icon={faFlag} /> &nbsp;Country: {strCountry}</p>
                <p><FontAwesomeIcon fixedWidth  size='xs' icon={faFutbol} /> &nbsp;Sport: {strSport}</p>
                <p><FontAwesomeIcon fixedWidth  size='xs' icon={faMars} /> &nbsp;Gender: {strGender}</p>
            </div>
            <div>
                <img style={{borderRadius: '10px',height: '200px'}} src={maleImage} alt=""/>
            </div>
        </Box>
    );
};

export default ShortDetail;