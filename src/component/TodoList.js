import React,{Component} from "react"

class TodoList extends Component{
    render(){
        return(
            <div className="columns is-multiline is-centered todo-list">
                {this.props.todo.map((jour, index)=>{
                    return(
                        <div className="column is-6 day-todo" key={index}>
                            <article className="message is-primary">
                                <div className="message-header">
                                    <h3 className="subtitle is-5"> Journée du {jour.time}</h3>
                                    <button className="delete" aria-label="delete" onClick={this.props.deleteDay}></button>
                                </div>
                            
                                <div className="message-body">
                                    {jour.taches.map((item,key)=>{
                                        return(
                                            <div key={key} className="control has-icons-right">
                                                <input className="input is-focused" type="text" readOnly value={item} onClick={()=>this.props.deleteTache(index, key)} />
                                                <span className="icon is-right">
                                                    <i className="fas fa-check"></i>
                                                </span>
                                          </div>
                                        )
                                    })}
                                </div>
                            </article>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TodoList 