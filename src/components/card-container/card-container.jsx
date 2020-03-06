import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './card-container.css';
import Card from '../card/cards.jsx';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
  
    },
}));

const CardContainer = (props) => {
    const classes = useStyles();
    return(

        <div className={classes.root}>
            <Grid container spacing={5}>                
                {
                    props.personas.map( persona => { 
                        return(                            
                            <Card 
                            key = {persona.id}
                            id = {persona.id}
                            nombre={persona.name}
                        />                           
                        )
                    })
                }                                            
            </Grid>
        </div>
    )
}

export default CardContainer;