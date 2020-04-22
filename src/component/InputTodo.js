import React, { Component } from "react"


class InputTodo extends Component{
    render(){
        return(
                <label>
                    <input  placeholder="Tâches à ajouter" onChange={this.props.contentTodo} onKeyDown={this.props.addTodo}/>
                </label>
        )
    }
}


export default InputTodo

