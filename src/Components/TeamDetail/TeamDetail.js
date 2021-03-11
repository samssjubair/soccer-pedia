import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailBody from '../DetailBody/DetailBody';
import HomeHeader from '../HomeHeader/HomeHeader';

const TeamDetail = () => {
    const {teamId}=useParams();
    const [club,setClub]= useState({});
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
        .then(res=>res.json())
        .then(data=>setClub(data.teams[0]))
    },[teamId])
    const {strStadiumThumb,strTeamBadge}=club;
    return (
        <div style={{backgroundColor: 'rgb(34 35 39)',color: 'white'}}>
            <HomeHeader images={{strTeamBadge,strStadiumThumb}}></HomeHeader>
            <DetailBody club={club}></DetailBody>
        </div>
    );
};

export default TeamDetail;