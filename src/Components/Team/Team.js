import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '20px 0',
    padding: '10px'
  },
  media: {
    height: 150,
    width: 150,
  },
});

const Team = (props) => {
  const { idTeam, strTeam, strTeamBadge, strSport } = props.team;
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card container  className={classes.root}>
        <CardActionArea>
          <CardMedia
            style={{ margin: "0 auto" }}
            className={classes.media}
            image={strTeamBadge}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {strTeam}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Sports type: {strSport}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            style={{ margin: "0 auto" }}
            variant="contained"
            color="primary"
          >
            Explore
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Team;
