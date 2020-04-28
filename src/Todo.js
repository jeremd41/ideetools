import React, { Component } from "react"
import base from "./firebase"

// Import Component
import TodoForm from "./component/TodoForm"
import TodoList from "./component/TodoList"


class Todo extends Component{
    state={
        todo:[],
        date:"",
        item:[],
        tache:"",
        showForm: false
    }

    componentDidMount() {
        this.ref = base.syncState('/', {
          context: this,
          state: 'todo',
          asArray: true
        });
      }

      handleChange = event => {
        event.preventDefault()
        this.setState({ [event.target.name]: event.target.value });
      };

    addTacheKey = (e) =>{
        if (e.keyCode === 13){
            const newList = this.state.item
            newList.push(this.state.tache)
            
            this.setState({
                item: newList,
                tache: ""
            })
        }
    }

    addTodo = (e) =>{
        const newTodo = this.state.todo
            newTodo.push({
                taches: this.state.item,
                time: this.state.date
            })
            this.setState({
                todo: newTodo,
                item: [],
                showForm: !this.state.showForm
            })
    }

    removeDay = (index) => {
        const newTodo = this.state.todo;
        newTodo.splice(index,1);
        this.setState({
          todo: newTodo
        });
    }

    removeTache = (index, key)=>{
       const newDay = this.state.todo.filter(item =>{
           return item.key == index
       })
       console.log(newDay.taches)
       /*newDay.taches.splice(key,1)
       this.setState({
           todo: newDay
       })*/
    }

    handleForm = () =>{
        this.setState({
            showForm: !this.state.showForm
        })
    }
    

    render(){
        return(
            <div>
                <section className="header hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                        <h1 className="title">
                            IdéeCode
                        </h1>
                        <h2 className="subtitle">
                            App Todo
                        </h2>
                        </div>
                    </div>
                </section>
                <button className="add-day" onClick={this.handleForm}>Add day +</button>
                <div className="wrapper">
                    <TodoForm 
                        showForm={this.state.showForm ? {display:"block"}:{display:"none"}}
                        date={this.state.date}
                        tache={this.state.tache}
                        change={this.handleChange}
                        submitTache={this.addTacheKey}
                        submitTodo={this.addTodo}
                        item={this.state.item}
                    />
                    <TodoList 
                        todo={this.state.todo} 
                        deleteDay={this.removeDay}
                        deleteTache={this.removeTache}
                    />
                </div>
                <footer style={{marginTop:"50px"}} className="footer is-primary">
                    <div className="content has-text-centered">
                        <p>
                        <strong>App Todo</strong> by Jeremy DIARD. The source code is licensed
                        <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content
                        is licensed <a href="http://ideecode.com">IdéeCode</a>.
                        </p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Todo