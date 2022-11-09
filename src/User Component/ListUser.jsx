import React, { Component } from "react";
import UserService from "../service/UserService";
import { Link } from "react-router-dom";
export class ListUser extends Component{
    constructor(props){
        super(props);
        this.state ={
            users: []

        }
    }
    componentDidMount(){
        UserService.getAllUsers().then ((res) =>{
            console.log(res.data);
            this.setState({users : res.data});
        })
    }
    deleteUser(userId){
        console.log(userId);
        UserService.deleteUser(userId).then(res =>{

            this.setState({users:this.state.users.filter(user => user.userId !== userId)});
            alert("user deleted successfully")
        })
    }
    updateuser(userId){

    }
    
    render(){
        return(
            <div>
                <h2 className =  "text-center">Users</h2>
                <div className="row">
                    <table className="table table-striped table-inverse">
                        <thead >
                            <tr>
                                <th className="text-center align-middle">fName</th>
                                <th className="text-center align-middle">lName</th>
                                <th className="text-center align-middle">userName</th>
                                <th className="text-center align-middle">pan</th>
                                <th className="text-center align-middle">email</th>
                                <th className="text-center align-middle">dob</th>
                                <th className="text-center align-middle">pNumber</th>
                                <th className="text-center align-middle">salary</th>
                                <th className="text-center align-middle">userid</th>
                                <th className="text-center align-middle">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                              {
                                this.state.users.map(
                                    user =>
                                    <tr key={user.pan}>
                                    <td className="text-center align-middle">{user.fName}</td>
                                    <td className="text-center align-middle">{user.lName}</td>
                                    <td className="text-center align-middle">{user.userName}</td>
                                    <td className="text-center align-middle">{user.pan}</td>
                                    <td className="text-center align-middle">{user.email}</td>
                                    <td className="text-center align-middle">{user.dob}</td>
                                    <td className="text-center align-middle">{user.pNumber}</td>
                                    <td className="text-center align-middle">{user.salary}</td>
                                    <td className="text-center align-middle">{user.userId}</td>
                                       
                                        <td >
                                        {/* <button type="button" className="btn btn-success" style={{marginRight:"10px"}}>
                                           <Link to={"/updateuser/" + user.userId} className="stylelink">
                                                update
                                            </Link>
                                        </button>             */}
                                        <button className="btn btn-danger" onClick={()=>this.deleteUser(user.userId)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                              }
                            </tbody>
                    </table>
                </div>
            </div>
        )
    }
}