import React,{Component} from "react"

class TodoForm extends Component{
    render(){
        return(
            <div className="todo-form card" style={this.props.showForm}>
                <h4>Préparer une journée</h4>
                <label className="label"> Date:
                    <input 
                        className="input is-primary" 
                        required 
                        name="date" 
                        type="date" 
                        value={this.props.date} 
                        onChange={this.props.change}
                    />
                </label>
                <label className="label"> Taches :
                    <input 
                        className="input is-primary" 
                        name="tache" 
                        type="text" 
                        value={this.props.tache} 
                        onChange={this.props.change} 
                        onKeyDown={this.props.submitTache}
                    />
                </label>
                <button className="button is-primary" onClick={this.props.submitTodo}>Valider</button>
                <div style={{marginTop: "15px"}}>
                    {this.props.item.map((tache, index)=>{
                        return(
                            <div key={index} className="control">
                                <input className="input is-primary is-focused" type="text" readOnly value={tache} />
                            </div>
                        )
                        
                    })}
                </div>
            </div>
        )
    }
}

export default TodoForm 