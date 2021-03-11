import { Box, Grid } from '@material-ui/core';
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
    const displayImage= strGender==='Female' ? 
    <img style={{borderRadius: '10px',height: '200px',width:'100%'}} src={femaleImage} alt=""/> :
    <img style={{borderRadius: '10px',height: '200px',width:'100%'}} src={maleImage} alt=""/> ;

    return (
        <Grid container style={{backgroundColor: '#FC4D57',color: 'white',margin: '30px 0px',padding:'20px', textAlign:'left',borderRadius: '10px',display:'flex',alignItems:'center', justifyContent:'space-between'}}   >
            <Grid style={{marginBottom:'20px'}} item sm={12} md={8}>
                <h1>{strTeam}</h1> <br/> 
                <p><FontAwesomeIcon fixedWidth  size='xs' icon={faMapMarkerAlt} /> &nbsp; Founded: {intFormedYear}</p>
                <p><FontAwesomeIcon fixedWidth  size='xs' icon={faFlag} /> &nbsp;Country: {strCountry}</p>
                <p><FontAwesomeIcon fixedWidth  size='xs' icon={faFutbol} /> &nbsp;Sport: {strSport}</p>
                <p><FontAwesomeIcon fixedWidth  size='xs' icon={faMars} /> &nbsp;Gender: {strGender}</p>
            </Grid>
            <Grid item sm={12} md={4}>
                {
                    displayImage
                }
            </Grid>
        </Grid>
    );
};

export default ShortDetail;