import React, { Component } from 'react';

class CreateTodos extends Component {


    constructor(props){
        super(props);

    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this)
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this)
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this)
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
        todo_description:'',
        todo_responsible:'',
        todo_priority:'',
        todo_completed:false
    }
}

    //I'm using a as the event listener to clear out a doubt that
    //I currently have

    onChangeTodoDescription(a){
        this.setState({
            todo_description: a.target.value
        });
    }


    onChangeTodoResponsible(a){
        this.setState({
            todo_responsible: a.target.value
        });
    }

    onChangeTodoPriority(e){
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault()

        console.log('Form Submitted')
        console.log(`Todo Description: ${this.state.todo_description}`)

        this.setState({
        todo_description:'',
        todo_responsible:'',
        todo_priority:'',
        todo_completed:false
        })
    }


    render() {
        return (
            <div style={{marginTop: 20}}> 
                <h3> Create new Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" className="form-control"
                        value={this.state.todo_description}
                        onChange={this.onchangeTodoDescription} 
                         />

                    </div>
                </form>
            </div>
        );
    }
}

export default CreateTodos;