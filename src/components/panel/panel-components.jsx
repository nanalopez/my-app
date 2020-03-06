import React from 'react';
import AddUser from '../add-user/add-user-components';
import Search from '../search/search';
import './panel.css';

export default function Panel(props){
    return(
        
        <div className="Panel">
            <AddUser
            funcionAgregar={props.funcionAgregar} 
            funcionObtenerPersona={props.funcionObtenerPersona}/>
            <Search
            funcionBuscarPersona={props.funcionBuscarPersona}/>
        </div>
    )
}

