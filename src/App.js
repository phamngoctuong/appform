import React, {Component} from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
    this.onHandleChange = this.onHandleChange.bind(this);
  }
  onHandleChange(event) {
    this.setState({
      username : event.target.value
    });
  }
  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="panel panel-default">
            <div className="panel-heading">From</div>
              <div className="panel-body">
                <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="datainput" className="form-control" id="formlt" onChange={this.onHandleChange} placeholder="Input field"/>
                  </div>
                  <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                  <button type="reset" className="btn btn-default">Reset</button>
                </form>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;