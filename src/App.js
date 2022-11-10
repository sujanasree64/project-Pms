// import logo from './logo.svg';

import './App.css';

import { BrowserRouter,Route,Switch } from "react-router-dom";

import Home from './component/Home';
import { AddPolicy } from './component/AddPolicy';
import { ListPolicy } from './component/ListPolicy';
import Header from './component/Header';
import { UpdatePolicy } from './component/UpdatePolicy';
import PolicyTypes from './component/PolicyTypes';
import { ListUser } from './User Component/ListUser';
import { AddUser } from './User Component/AddUser';
import { UpdateUser } from './User Component/UpdateUser';
import { AddAddress } from './Address/AddAddress';
function App() {
  return (
    <div >
    <BrowserRouter>
    
    <Header/>
    <div className='Container-fluid'>
      <Switch>
        <Route path="/addpolicy" component={AddPolicy}  ></Route>
        <Route path="/listpolicy" component={ListPolicy}  ></Route>
        <Route path="/" exact component={Home}  ></Route>
        <Route path="/updatepolicy/:Id"  component={UpdatePolicy}  ></Route>
        <Route path="/policytypes"  component={PolicyTypes}  ></Route>
        
        <Route path="/listuser" component={ListUser}  ></Route>
        <Route path="/adduser" component={AddUser}></Route>
        <Route path="/updateuser/:Id"  component={UpdateUser}  ></Route>
        <Route path="/addaddress" component={AddAddress}></Route>



      </Switch>
      </div>
    </BrowserRouter>
    </div>
  )}

export default App;
