import React, { useEffect, useState } from 'react';
import HomeHeader from '../HomeHeader/HomeHeader';
import Team from '../Team/Team';
import Grid from '@material-ui/core/Grid';
import { Box, makeStyles } from '@material-ui/core';

const useStyles= makeStyles({
    gridContainer:{
        paddingLeft: '60px'
    }
})

const Home = () => {
    const [teams,setTeams]= useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
        .then(res=>res.json())
        .then(data=>setTeams(data.teams))
    },[])
    const classes=useStyles();
    return (
        <div>
            <HomeHeader></HomeHeader>
            <Box width="75%" style={{margin: '0 auto'}}>
            <Grid container 
                spacing='4'
                direction="row"
                justify="center"
                alignItems="center"
                >
             {
                teams.map(tm=> <Team team={tm}></Team> )
            }
             </Grid>
            
            
        
            </Box>
            </div>
    );
};

export default Home;