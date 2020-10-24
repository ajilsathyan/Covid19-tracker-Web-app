import React, {Component} from 'react';
import './India.css'
import { Card  } from 'react-bootstrap';
import Statedata from './Statedata';
import Axios from 'axios'

class India extends Component{



  constructor(){
    super();
    this.state = {

      data:{ }
    }
  }

  componentDidMount(){

    Axios.get("https://corona.lmao.ninja/v2/countries/india").then(res=>{
 
           this.setState({data:res.data});
    })
  }

  render(){

    return(

            <div className="Row">
                 
                 <div className="col-md-12 col">
                  <img src="https://www.countryflags.io/in/shiny/64.png"/>
                  <h3>INDIA</h3>
                 </div>
                 <div className="col-md-12">
                     <div className="row">

                       <div className="col-md-3">

                          <Card style={{ width: '18rem'}} className="badge badge-primary">
                                <Card.Body className="text-center">
                                  <Card.Title>TOTAL CASES</Card.Title>
                                    <h3>{this.state.data.cases}</h3>
                                </Card.Body>
                         </Card>
                      </div>

                      <div className="col-md-3">
                          <Card style={{ width: '18rem'}} className="badge badge-warning">
                                <Card.Body className="text-center" >
                                  <Card.Title>ACTIVE CASES</Card.Title>
                                  <h3>{this.state.data.active}</h3>
                                </Card.Body>
                         </Card>
                      </div>

                      <div className="col-md-3">
                          <Card style={{ width: '18rem'}} className="badge badge-success">
                                <Card.Body className="text-center">
                                  <Card.Title>RECOVERED</Card.Title>
                                  <h3>{this.state.data.recovered}</h3>
                               </Card.Body>
                         </Card>
                      </div>

                      <div className="col-md-3">
                          <Card style={{ width: '18rem'}} className="badge badge-danger">
                                <Card.Body className="text-center">
                                  <Card.Title>TOTAL DEATHS</Card.Title>
                                  <h3>{this.state.data.todayDeaths}</h3>
                                </Card.Body>
                         </Card>
                      </div>

                     </div>
                 </div>
                 <div className="col-md-12">
                     
                     <Statedata/>

                 </div>



            </div>




    );
  }




}

export default India;