import React,{ Component} from "react";
import image1 from '../assets/image1.png';

export default class Home extends Component{
    render(){
        return(
            <div>
                <div className="jumbotron jumbotron-fluid newstyle">
        <div className="container">
            <h1 className="display-3"> Buy Policy</h1>
            <p className="lead">offers a range of life plans and policies to help you protect you and your familiy</p>
            <a href="https://www.policy.com/terms-and-conditions" class="btn btn-primary">Know More</a>
            <hr className="my-2" />
        </div>
    </div>
    <div className="card">
                <img className="card-img-top" src={image1} alt="life quote"/>
                <div className="card-body">
                    <h4 className="card-title">Policy</h4>
                    <p className="card-text">One Step To Buy Policy</p>
                </div>
            </div>
           
        
          
            <footer className="text-center text-black" style={{backgroundColor: "#f1f1f1"}}>

            <div className="container pt-4">
                <section className="mb-4">
                <a className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark">
              
              <i class="bi bi-twitter"></i>
            </a>
            <a className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark">
              
              <i class="bi bi-whatsapp"></i>
            </a>
            <a className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark">
              
              <i class="bi bi-facebook"></i>
            </a>
                </section>
            
            </div>
      
            <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
              © 2020 Copyright:
              <a className="text-dark" href="https://policyteam.com/">policyTeam.com</a>
            </div>
    
          </footer>
          </div>
            
          )
    }
}



      
      
        
             