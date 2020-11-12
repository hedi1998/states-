import React, { Component } from 'react'

class Sara extends Component {

    state = {
        name: "Sara"
      };
      handleClick=()=>this.setState({name:'Arya'})


    render() {
        return (
            <div>
                 <h1>Hello {this.state.name}</h1>
     <button onClick={this.handleClick}> ClickMe</button>
            </div>
        )
    }
}
export default Sara;