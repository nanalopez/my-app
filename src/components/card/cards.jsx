import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import './card.css';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {deepPurple} from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(8),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: 140,
      width: 130,
      margin: 20,
      
    },

    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
}));

export default function Card(props){
    const classes = useStyles();
    return(
        <div className="espace">
        
        <Paper className={classes.paper}>
        <Grid container direction="column" justify="center"
  alignItems="center"spacing={4}>
          <Grid item xs={4}>
    <Avatar className={classes.purple}>{props.nombre.charAt(0)}</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{props.nombre}</Typography>
          </Grid>
          <IconButton aria-label="delete" className={classes.margin} color="secondary" >
          <DeleteIcon />
        </IconButton>
        </Grid>
      </Paper>
        </div>
    )
}