// import logo from './logo.svg';

import './App.css';

import { BrowserRouter,Route,Switch } from "react-router-dom";

import Home from './component/Home';
import { AddPolicy } from './component/AddPolicy';
import { ListPolicy } from './component/ListPolicy';
import NavBar from './component/NavBar';
import { UpdatePolicy } from './component/UpdatePolicy';
import PolicyTypes from './component/PolicyTypes';
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
      
      </Switch>
      </div>
    </BrowserRouter>
    </div>
  )}

export default App;
