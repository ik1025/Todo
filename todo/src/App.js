import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    todoList :[]
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-2">
          <div className="container">
            <h1 className="display-2">Things To Do</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
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
      </div>
    );
  }

  handleSubmit = (e) => {
    var taskDesc = e.target.elements.TodoTask.value;
    console.log(taskDesc);

    if(taskDesc.length > 0) {
      this.setState({
        todoList:[...this.state.todoList, taskDesc]
      })
      e.target.reset();
    }
    e.preventDefault();
  }

}

export default App;
