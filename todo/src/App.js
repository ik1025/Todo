import React, {Component} from 'react';
import List from './List';
import './App.css';

class App extends Component {

  state = {
    todoList :[],
    count: 0
  }

  render() {

    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-2">
          <div className="container">
            <h1 className="display-2">Things To Do</h1>
            <p className="lead">You can enter things to do below</p>
          </div>
        </div>

        <form className="mb-3" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Your text here" autoComplete="off" id="inputGroup-sizing-lg" name="TodoTask"/>
            <div className="input-group-append">
              <button type="submit" className="btn btn-outline-success">Add</button>
            </div>
          </div>
        </form>

        <ul className="list-group">
          {this.state.todoList.map(
            (item, index) =>{
              return <div>
                <div className="card">
                  <div className="card-header">{item}</div>
                    <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button className="btn btn-sm btn-danger float-right" onClick={(event) => {this.deleteTodoTask(event,index)}}>Delete</button>
                  </div>
                </div>
                <br />
              </div>
            }
          )}
        </ul>
        <br /><br />

        <List count={this.state.count}/>
      </div>
    );
  }

  handleSubmit = (e) => {
    var taskDesc = e.target.elements.TodoTask.value;

    if(taskDesc.length > 0) {
      this.setState({
        todoList:[...this.state.todoList, taskDesc]
      })
      e.target.reset();
    }
    e.preventDefault();
  }


  deleteTodoTask = (e,index, count) => {
    var taskArray = [...this.state.todoList]
    var newcount = this.state.count + 1;
    taskArray.splice(index,1)
    this.setState({todoList: taskArray})
    this.setState({count: newcount})
  }

}

export default App;
