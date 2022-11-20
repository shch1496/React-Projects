import React, { Component } from 'react'

export default class Todo extends Component {

    constructor() {
        super();
        this.state = {
           tasks: [ //4k -> 8k
            {
              id: 1, task: "Revise JS"
            },
            { 
              id: 2, task: "Revise DSA"
            } 
          ],
           currTask: "",
        }
    }

  
    handleAddTask =() => {
       this.setState({
          tasks: [...this.state.tasks, {id:this.state.tasks.length+1, task:this.state.currTask}] //8k
       })
    }

    handleChange = (e) => {
          this.setState({
            currTask: e.target.value
          })
    }


    handleDelete = (id) => {
       let narr = this.state.tasks.filter(taskObj => taskObj.id !== id);
       this.setState({
           tasks: [...narr]
       });
    }

  

  render() {
    return (
      <div>
          <input type="text" placeholder="Enter your task" onChange={this.handleChange}></input>
          <button onClick={this.handleAddTask}>Add</button>
          { this.state.tasks.map((taskObj, idx) => {
            return (
               <li key={taskObj.id}>
                    <p>{idx} {taskObj.task}</p>
                    <button style={{backgroundColor: "red"}} onClick={() => this.handleDelete(taskObj.id)}>Delete</button>
              </li>
            );

          })}
      </div> 
    )
  }
}
