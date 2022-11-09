import React, { Component } from "react";
import PolicyService from "../service/PolicyService";
import { Link } from "react-router-dom";
export class ListPolicy extends Component{
    constructor(props){
        super(props);
        this.state = {
            policys: []
        }
        
    }
    
    componentDidMount(){
        PolicyService.getAllPolicy().then ((res) =>{
            console.log(res.data);
            this.setState({policys : res.data});
        })
    }
    deletePolicy(policyId){
        console.log(policyId);
        PolicyService.deletePolicy(policyId).then(res =>{

            this.setState({policys:this.state.policys.filter(policy => policy.policyId !== policyId)});
            alert("policy deleted successfully")
        })
    }
    updatePolicy(policyId){

    }
    
    render(){
        return(
            <div>
                <h2 className =  "text-center">Policy Register List</h2>
                <div className="row">
                    <table className="table table-striped table-inverse">
                        <thead >
                            <tr>
                                <th className="text-center align-middle">Policy Name</th>
                                <th className="text-center align-middle">Policy Type</th>
                                <th className="text-center align-middle">termAccount</th>
                                <th className="text-center align-middle">startDate</th>
                                <th className="text-center align-middle">companyName</th>
                                <th className="text-center align-middle">duration</th>
                                <th className="text-center align-middle">intialDeposit</th>
                                <th className="text-center align-middle">userType</th>
                                <th className="text-center align-middle">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                              {
                                this.state.policys.map(
                                    policy =>
                                    <tr key={policy.policyId}>
                                        <td className="text-center align-middle"> {policy.policyName}</td>
                                        <td className="text-center align-middle">{policy.policyType}</td>
                                        <td className="text-center align-middle">{policy.termAccount}</td>
                                        <td className="text-center align-middle">{policy.startDate}</td>
                                        <td className="text-center align-middle">{policy.companyName}</td>
                                        <td className="text-center align-middle">{policy.duration}</td>
                                        <td className="text-center align-middle">{policy.intialDeposit}</td>
                                        <td className="text-center align-middle">{policy.userType}</td>
                                       
                                        <td >
                                        <button type="button" className="btn btn-success" style={{marginRight:"10px"}}>
                                           <Link to={"/updatepolicy/" + policy.policyId} className="stylelink">
                                                update
                                            </Link>
                                        </button>            
                                        <button className="btn btn-danger" onClick={()=>this.deletePolicy(policy.policyId)}>Delete</button>
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