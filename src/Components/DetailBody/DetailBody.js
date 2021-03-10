import { Box } from '@material-ui/core';
import React from 'react';
import ShortDetail from '../ShortDetail/ShortDetail';
import './DetailBody.css'


const DetailBody = (props) => {
    const {strTeam,intFormedYear,strFacebook,strYoutube,strTwitter,strGender,strCountry,strSport,strDescriptionEN,strStadiumDescription,strTeamJersey}=props.club;
    return (
        <Box width="75%" style={{margin: '0 auto',textAlign: 'center'}}>
            <div>
                <ShortDetail detail={{strTeam,intFormedYear,strGender,strCountry,strSport}}></ShortDetail>
                <p className="justify"> <strong>Club Description:</strong>  {strDescriptionEN}</p> <br/>
                <p className="justify"><strong>Stadium Description:</strong> {strStadiumDescription}</p>
            </div>
        </Box>
    );
};

export default DetailBody;