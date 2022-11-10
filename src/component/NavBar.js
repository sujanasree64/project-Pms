import React,{ Component} from "react";
import { Link, NavLink } from "react-router-dom";

export default class NavBar extends Component{
    click = false;
    constructor(props){
        super(props);
        this.state ={

        }
    }
    handleClick =() =>{
        this.click = true;
    }
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar navbar sticky-top navbar navbar-dark bg-dark" >
  <a class="navbar-brand" href="#"><i class="bi bi-p-square-fill"></i>MS </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/addpolicy">Policy Registration</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/policytypes">Policy Types</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/listpolicy">Status </a>
      </li>
      
      
    </ul>
    <li class="form-inline my-2 my-lg-0">
        <a class="nav-link " href="/listuser"><i class="bi bi-person-circle"></i></a>
      </li>
     
  </div>
</nav>
        )
    }
}