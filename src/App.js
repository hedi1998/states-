import React, { Component } from 'react'
import {Button ,CloseButton,Modal} from 'react-bootstrap'
import './App.css'
import image from './photo.jpg'
export default class App extends Component {
  state={
  show : false ,
  name: "Hedi Magroun ",
  bio : "Noob at React" ,
  prof : "Student",
  image : image,


     }  

 
 handleShow=()=>{
    this.setState({show : true})
  };
 handleClose=()=>{
    this.setState({show : false})
  }
 
 
  render() {

    return (
      
      <div className="Button">
      
        <Button variant="primary" onClick={this.handleShow}>
        Click Me!!
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
  
        <Modal.Header closeButton>
          <Modal.Title>{this.state.name}</Modal.Title>
        </Modal.Header>
<Modal.Body>{this.state.bio}</Modal.Body>
<Modal.Body>{this.state.prof}</Modal.Body>
<Modal.Body><img src= {this.state.image}></img></Modal.Body>
 
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  
      </div>
    )
  }
}
