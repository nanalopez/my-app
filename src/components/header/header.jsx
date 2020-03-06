import React from 'react';
import './header.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({


    button: {
        margin: theme.spacing(1),
      },
  }));

export default function HeaderContainer(){
    const classes = useStyles();
    return(
        <div className="titulo">
            <h2>ACADEMLO</h2>
            <h2>Panel de usuario</h2>
            <form className={classes.root} noValidate autoComplete="off">
                <Button variant="contained">Iniciar sesion</Button>
            </form>
        </div>
    )
}