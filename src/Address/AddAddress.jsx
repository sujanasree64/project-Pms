import React,{ Component } from "react";
import AddressService from "../service/AddressService";
export class AddAddress extends Component{
    constructor(props){
        super(props);
        this.state={
            doorNum:'',
            streetName:'',
            state:'',
            city:'',
            pincode:'',
            userId:'',
			
    }
    this.changeDoorNumHandler = this.changeDoorNumHandler.bind(this);
    this.changeStreetNameHandler = this.changeStreetNameHandler.bind(this);
    this.changeStateHandler = this.changeStateHandler.bind(this);
    this.changeCityHandler = this.changeCityHandler.bind(this);
    this.changePincodeHandler = this.changePincodeHandler.bind(this);
    this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
    
    this.saveAddress = this.saveAddress.bind(this)
    }
    saveAddress = (e) => {
        e.preventDefault();
        let address = {
            doorNum:this.state.doorNum,
            streetName:this.state.streetName,
            state:this.state.state,
            city:this.state.city,
            pincode:this.state.pincode,
            userId:this.state.userId,
			
                }
                console.log('address =>' + JSON.stringify(address))
                AddressService.createAddress(address).then(res => {
                    alert("Address added successfully....")
                })
                
    }
    cancel(){
        alert("leaving with out saving.....")
    }
    changeDoorNumHandler(event){
        this.setState({doorNum:event.target.value})
    }
    changeStreetNameHandler(event){
        this.setState({streetName:event.target.value})
    }
    changeStateHandler(event){
        this.setState({state:event.target.value})
    }
    changeCityHandler(event){
        this.setState({city:event.target.value})
    }
    changePincodeHandler(event){
        this.setState({pincode:event.target.value})
    }
    changeUserIdHandler(event){
        this.setState({userId:event.target.value})
    }
    render(){
        return(
            <div>
                <br></br>
                <div>
                <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2>Address <i class="bi bi-geo-alt-fill"></i></h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                  <label >Door Number</label>
                                  <input type="number" name="doornum" id="" className="form-control" placeholder="Enter doorNum" 
                                   value={this.state.doorNum} onChange={this.changeDoorNumHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Street Name</label>
                                  <input type="text" name="streetName" id="" className="form-control" placeholder="Enter streetName" 
                                   value={this.state.streetName} onChange={this.changeStreetNameHandler} />
                                </div>
                                <div className="form-group">
                                  <label >State</label>
                                  <input type="text" name="state" id="" className="form-control" placeholder="Enter state" 
                                   value={this.state.state} onChange={this.changeStateHandler} />
                                </div>
                                <div className="form-group">
                                  <label >City</label>
                                  <input type="text" name="city" id="" className="form-control" placeholder="Enter city" 
                                   value={this.state.city} onChange={this.changeCityHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Pincode</label>
                                  <input type="number" name="pincode" id="" className="form-control" placeholder="Enter pincode" 
                                   value={this.state.pincode} onChange={this.changePincodeHandler} />
                                </div>
                                <div className="form-group">
                                  <label >UserId</label>
                                  <input type="number" name="userId" id="" className="form-control" placeholder="Enter userId" 
                                   value={this.state.userId} onChange={this.changeUserIdHandler} />
                                </div>
                                

                                <button type="button" className="btn btn-success" onClick={this.saveAddress}>Submit</button>
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


