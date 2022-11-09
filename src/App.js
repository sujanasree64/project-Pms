// import logo from './logo.svg';

import './App.css';

import { BrowserRouter,Route,Switch } from "react-router-dom";

import Home from './component/Home';
import { AddPolicy } from './component/AddPolicy';
import { ListPolicy } from './component/ListPolicy';
import NavBar from './component/NavBar';
import { UpdatePolicy } from './component/UpdatePolicy';
import PolicyTypes from './component/PolicyTypes';
import { ListUser } from './User Component/ListUser';
import { AddUser } from './User Component/AddUser';
function App() {
  return (
    <div >
    <BrowserRouter>
    
    <NavBar/>
    <div className='Container-fluid'>
      <Switch>
        <Route path="/addpolicy" component={AddPolicy}  ></Route>
        <Route path="/listpolicy" component={ListPolicy}  ></Route>
        <Route path="/" exact component={Home}  ></Route>
        <Route path="/updatepolicy/:Id"  component={UpdatePolicy}  ></Route>
        <Route path="/policytypes"  component={PolicyTypes}  ></Route>
        
        <Route path="/listuser" component={ListUser}  ></Route>
        <Route path="/adduser" component={AddUser}></Route>


      </Switch>
      </div>
    </BrowserRouter>
    </div>
  )}

export default App;
