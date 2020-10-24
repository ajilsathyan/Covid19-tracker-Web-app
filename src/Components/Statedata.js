import React, {Component} from 'react';
import {Card,Accordion  ,Button} from 'react-bootstrap';
import Axios from 'axios';
class Statedata extends Component{
      

     constructor(){
         super();
         this.state={

            stateData : { }
         }
     }
       
     componentDidMount() {
        Axios.get("https://api.covid19india.org/state_district_wise.json")
          .then(res => {
            const persons = res.data;
            this.setState({ stateData : persons });
          });
      }

      
  render(){


    let keys = Object.keys(this.state.stateData);

    return(

            <div className="statedata">
               
              <div className="row">
                  <div className="col-md-12">
                  <Accordion>

                    {
                    keys.map((item,ky)=>{

                      let districts = this.state.stateData[item].districtData;
                      let district_keys = Object.keys(districts);


                      let total_active= 0;
                      let total_confirmed = 0;
                      let total_deaths = 0;
                      let total_recovered = 0;

                      let district_list =[];
                      for(let x in districts){
                        total_active += districts[x].active;
                        total_confirmed += districts[x].confirmed;
                        total_deaths += districts[x].deceased;
                        total_recovered += districts[x].recovered;

                        let ob = districts[x];
                        ob["district_name"] = x;
                        district_list.push(ob);


                      }
                      console.log(district_list);

                      return(
                        <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="primary" eventKey={ky}>
                              {item} - <span className="btn btn-dark p-1 mr-2">Total Cases -{total_confirmed}</span> 
                              <span className="btn btn-dark p-1 mr-2">Active- {total_active}</span>
                              <span className="btn btn-dark p-1 mr-2">Recovered - {total_recovered}</span>  
                              <span className="btn btn-dark p-1 mr-2">Death - {total_deaths}</span>
                               
                                                    
                              
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={ky}>
                           <Card.Body>
                             <table className=" table table-bordered table-striped">
                               <thead>
                                 <tr>
                                   <td>Districts</td>
                                   <td>Confirmed</td>
                                   <td>Active</td>
                                   <td>Recovered</td>
                                   <td>Deaths</td>
                                 </tr>
                               </thead>
                               <tbody>
                                 {

                                   district_list.map((item,ky)=>{

                                    return(
                                      <tr>
                                         <td>{item.district_name}</td>
                                         <td>{item.confirmed}</td>
                                         <td>{item.active}</td>
                                         <td>{item.recovered}</td>
                                         <td>{item.deceased}</td>
                                      </tr>
                                    )
                                   })
                                 }
                               </tbody>

                             </table>
                           </Card.Body>
                        </Accordion.Collapse>
                      </Card>

                      )
                    })
                    }

                     </Accordion> 

                  </div>
              </div>


            </div>




    );
  }




}

export default Statedata;