import React, {Component} from 'react';
import Axios from 'axios';
class World extends Component{
  

    constructor(){
      super();
      this.state = {

        data : []
      }
    }

    componentDidMount(){
      Axios.get("https://corona.lmao.ninja/v2/countries").then(res=>{

        this.setState({data:res.data});
        console.log(res.data);
      })
    }
    
  render(){

    return(

            <div className="row">
                 <div className="col-md-12">
                   <table className="table table-primary table-bordered table-striped">
                     <thead>
                       <tr>
                         <td>Country</td>
                         <td>Total Cases</td>
                         <td>Recovered</td>
                         <td>Death</td>  
                         <td>TodayCases</td>
                         <td>TodayRecovered</td>
                         <td>TodayDeaths </td>
                         
                       </tr>
                     </thead>
                     <tbody>
                       {
                       this.state.data.map((item,key)=>{
                         return(
                                
                          <tr>
                            <td>{item.country}
                            <img style={{width:"50px",height:"50px",paddingLeft:"5px"}} src={item.countryInfo.flag}/>
                            </td>
                            <td>{item.cases}</td>
                            <td>{item.recovered}</td>
                            <td>{item.deaths}</td>
                            <td>{item.todayCases}</td>
                            <td>{item.todayRecovered}</td>
                            <td>{item.todayDeaths}</td>
                            

                          </tr>

                         )
                       })

                       }
                     </tbody>
                   </table>
                 </div>
            </div>




    );
  }




}

export default World;