import React, {Component} from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      passsword: '',
      select: 1,
      radio: 'yes',
      textarea: 'textarea'
    }
    this.onHandleChange = this.onHandleChange.bind(this);
  }
  onHandleChange(event) {
    var target, name, value;
    target = event.target;
    name = target.name;
    value = target.value;
    this.setState({
      [name]:value
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
                    <input type="text" name="username" className="form-control" onChange={this.onHandleChange} placeholder="username ..."/>
                    <input type="passsword" name="passsword" className="form-control" onChange={this.onHandleChange} placeholder="passsword ..."/>
                  </div>
                  <select name="select" className="form-control" onChange={this.onHandleChange} defaultValue={1}>
                    <option value="0">Nữ</option>
                    <option value="1">Nam</option>
                    <option value="2">Chưa biết</option>
                  </select>
                  <div className="radio">
                    <label>
                        <input type="radio" name="radio" value="yes" defaultChecked onChange={this.onHandleChange}/>
                        yes
                    </label>
                    <label>
                        <input type="radio" name="radio" value="no" onChange={this.onHandleChange}/>
                        no
                    </label>
                  </div>
                  <textarea name="textarea"  className="form-control" rows="3" onChange={this.onHandleChange}></textarea>
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
