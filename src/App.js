import React from 'react';
import './App.css';
import Header from './components/header/header';
import PanelContainer from './components/panel/panel-components';
import CardContainer from './components/card-container/card-container';
import Container from '@material-ui/core/Container';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      //Clave:Valor
      personas: [],
      nombre: "Yuliana",
      buscarPersona: "",
      respaldoPersona: [],
    }
  }

  componentDidMount(){
    fetch('')
      .then(response => response.json())
      .then(arregloPersonas => this.setState({personas : arregloPersonas}))
  }

  //Al utilizar las funciones de flecha el contexto será el mismo en el que se declaró
  agregarTarjeta = () => {
    let personasModificadas = this.state.personas;
    personasModificadas.push({
      "id": 1,
      "name": this.state.nombre,
      "username": "Bret",
      "email": "Sincere@april.biz",    
    });
    this.setState({personas: personasModificadas});
    this.setState({respaldoPersonas: personasModificadas});
  }

  // saludo(){
  //   Recuerda colocar el bind(this) dentro del constructor
  //   this.saludo = this.saludo.bind(this)
  //   console.log(this.state.nombre);
  // }

  obtenerPersona = (event) => {
    this.setState({nombre: event.target.value});
  }

  buscarPersona = (event) => {
    let respaldoPersonas = this.state.respaldoPersonas;
    let arregloPersonasRespaldo = respaldoPersonas.filter(persona => persona.name.includes(event.target.value));
    this.setState({personas: arregloPersonasRespaldo});
  }

  borrarPersona = (event, id)=>{

  }

  render(){
    return (
      <Container maxWidth="lg">
        <Header />
        <PanelContainer 
          funcionAgregar={this.agregarTarjeta} 
          funcionObtenerPersona={this.obtenerPersona} 
          funcionBuscarPersona={this.buscarPersona} 
        />
        <CardContainer personas={this.state.personas} />
        {/* <button onClick={ this.saludo }>Boton ejemplo</button> */}
      </Container>
    )
  }
}