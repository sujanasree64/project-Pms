import React, { Component } from "react";
import UserService from "../service/UserService";
export class UpdateUser extends Component{
    constructor(props){
        super(props);
            this.state ={
                userId: this.props.match.params.Id,
                pan: '',
                fName: '',
                lName: '',
                userName: '',
                email: '',
                dob: '',
                
                pNumber: '',
                salary: '',

            }
            this.changeUserPanHandler = this.changeUserPanHandler.bind(this);
        this.changeUserFnameHandler = this.changeUserFnameHandler.bind(this);
        this.changeUserLnameHandler = this.changeUserLnameHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeUserEmailHandler = this.changeUserEmailHandler.bind(this);
        this.changeUserDobHandler = this.changeUserDobHandler.bind(this);
        
        this.changeUserPnumberHandler = this.changeUserPnumberHandler.bind(this);
        this.changeUserSalHandler = this.changeUserSalHandler.bind(this);

        
        this.updateUser = this.updateUser.bind(this)
        
    }
    componentDidMount(){
        UserService.getUser(this.state.userId).then((res) =>{
            console.log(res.data)
            let user = res.data;
            
            this.setState({
                pan: user.pan,
                fName: user.fName,
                lName: user.lName,
                userName: user.userName,
                email: user.email,
                dob: user.dob,
                
                pNumber: user.pNumber,
                salary: user.salary,

            });
        });
    }
    updateUser = (e) => {
        e.preventDefault();
        let user ={
                pan: this.state.pan,
                fName: this.state.fName,
                lName: this.state.lName,
                userName: this.state.userName,
                email: this.state.email,
                dob: this.state.dob, 
                
                pNumber: this.state.pNumber,
                salary: this.state.salary


        }
        console.log('user =>'+JSON.stringify(user));
        UserService.updateUser(user,this.state.userId).then(res => {
            console.log(user,this.state.userId);
            alert("user updated successfully")
        });
        this.props.history.push("/listuser");
    }
    cancel(){
        alert("leaving witout saving...")
    }
    changeUserPanHandler(event){
        this.setState({pan:event.target.value})
    }
    changeUserFnameHandler(event){
        this.setState({fName:event.target.value})
    }
    changeUserLnameHandler(event){
        this.setState({lName:event.target.value})
    }
    changeUserNameHandler(event){
        this.setState({userName:event.target.value})
    }
    changeUserEmailHandler(event){
        this.setState({email:event.target.value})
    }
    changeUserDobHandler(event){
        this.setState({dob:event.target.value})
    }
    
    changeUserPnumberHandler(event){
        this.setState({pNumber:event.target.value})
    }
    changeUserSalHandler(event){
        this.setState({salary:event.target.value})
    }
    render(){
        return(
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2>Edit user</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                  <label >Pan</label>
                                  <input type="text" name="Pan" id="" className="form-control" placeholder="Enter pan" 
                                   defaultValue={this.state.pan} onChange={this.changeUserPanHandler} />
                                </div>
                                <div className="form-group">
                                  <label >First name</label>
                                  <input type="text" name="fName" id="" className="form-control" placeholder="Enter fName" 
                                   defaultValue={this.state.fName} onChange={this.changeUserFnameHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Last Name</label>
                                  <input type="text" name="lName" id="" className="form-control" placeholder="Enter lName" 
                                   defaultValue={this.state.lName} onChange={this.changeUserLnameHandler} />
                                </div>
                                <div className="form-group">
                                  <label >User Name</label>
                                  <input type="text" name="userName" id="" className="form-control" placeholder="Enter userName" 
                                   defaultValue={this.state.userName} onChange={this.changeUserNameHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Email</label>
                                  <input type="mail" name="email" id="" className="form-control" placeholder="Enter email" 
                                   defaultValue={this.state.email} onChange={this.changeUserEmailHandler} />
                                </div>
                                <div className="form-group">
                                  <label >DOB</label>
                                  <input type="date" name="dob" id="" className="form-control" placeholder="Enter dob" 
                                   defaultValue={this.state.dob} onChange={this.changeDurationHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Phone Number</label>
                                  <input type="number" name="pNumber" id="" className="form-control" placeholder="Enter pNumber" 
                                   defaultValue={this.state.pNumber} onChange={this.changeUserPnumberHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Salary</label>
                                  <input type="number" name="salary" id="" className="form-control" placeholder="Enter salary" 
                                   defaultValue={this.state.salary} onChange={this.changeUserSalHandler} />
                                </div>

                                <button type="button" className="btn btn-success" onClick={this.updateUser}>Update</button>
                                <button type="button" className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}