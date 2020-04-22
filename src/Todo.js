import React, { Component } from "react"
import base from "./firebase"

// Import Component
import InputTodo from "./component/InputTodo"


class Todo extends Component{
    state={
        list:[],
        date: Date.now(),
        item:"",
    }

    componentDidMount() {
        this.ref = base.syncState('/', {
          context: this,
          state: 'list',
          asArray: true
        });
      }

    handleChange = (e) =>{
        e.preventDefault()
        this.setState({
            item: e.target.value
        })
    }

    addTodoKey = (e) =>{
        if (e.keyCode === 13){
            this.state.list.push({
                tache: this.state.item,
                time: this.state.date
            })
            this.setState({
                item: ""
            })
        }
    }

    addTodo = (e) =>{
            this.state.list.push({
                tache: this.state.item,
                time: this.state.date
            })
            this.setState({
                item: ""
            })
    }

    removeItem = (index) => {
        const newList = this.state.list;
        newList.splice(index);
        this.setState({
          list: newList
        });
      }
    

    render(){
        return(
            <div>
                <InputTodo valeur={this.state.item} contentTodo={this.handleChange} addTodo={this.addTodoKey} />
                <button onClick={this.addTodo}>Ajouter</button>
                {this.state.list.map((item, index) =>{
                    return(
                        <div key={index}>
                            <p onClick={this.removeItem}>{item.tache}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Todo