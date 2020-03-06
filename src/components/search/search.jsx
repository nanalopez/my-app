import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

export default function Search(props){
    const classes = useStyles();
    return(
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Buscar" variant="outlined" onChange={props.funcionBuscarPersona}/>
        </form>
    )
}