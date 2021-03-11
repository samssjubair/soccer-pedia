import { Box } from "@material-ui/core";
import React from "react";
import ShortDetail from "../ShortDetail/ShortDetail";
import "./DetailBody.css";
import {
  faTwitter,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { lightBlue,red, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: 'center',
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  lightBlue: {
    color: theme.palette.getContrastText(lightBlue[200]),
    backgroundColor: lightBlue[200],
  },
  red: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[900]),
    backgroundColor: deepPurple[900],
  },
}));

const DetailBody = (props) => {
  const classes = useStyles();

  const {
    strTeam,
    intFormedYear,
    strFacebook,
    strYoutube,
    strTwitter,
    strGender,
    strCountry,
    strSport,
    strDescriptionEN,
    strStadiumDescription
    
  } = props.club;
  return (
    <Box width="75%" style={{ margin: "0 auto", textAlign: "center" }}>
      <div>
        <ShortDetail
          detail={{ strTeam, intFormedYear, strGender, strCountry, strSport }}
        ></ShortDetail>
        <p className="justify">
          {" "}
          <strong>Club Description:</strong> {strDescriptionEN}
        </p>{" "}
        <br />
        <p className="justify">
          <strong>Stadium Description:</strong> {strStadiumDescription}
        </p>
      </div>
      <div>
        <div style={{marginTop: '20px'}} className={classes.root}>
            <a rel={'external'} target="_blank" href={`http://${strTwitter}`}>
                <Avatar  className={classes.blue}><FontAwesomeIcon icon={faTwitter} /></Avatar>  
            </a>
            <a rel={'external'} target="_blank" href={`http://${strFacebook}`}>
                <Avatar className={classes.purple}><FontAwesomeIcon icon={faFacebook} /></Avatar>
            </a>
            <a rel={'external'} target="_blank" href={`http://${strYoutube}`}>
                <Avatar className={classes.red}><FontAwesomeIcon icon={faYoutube} /></Avatar>  
            </a>
          
          
          
        </div>

        

        
        
      </div>
    </Box>
  );
};

export default DetailBody;
