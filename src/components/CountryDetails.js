import React from "react";
export default class CountryDetails extends React.Component{
render(){
    let showDetails=[]
    this.props.data.map((item,index)=>{
        this.props.countries.map((country,i)=>{
            if(item==country.name){
                showDetails.push(country)
            }
        })
    })
    return(
    <div>
      <ul className="additionalCss">
                    {showDetails.map((item,index)=>{
                        return<div className="countryDetails"  key={item.name}>
                            <li key={item.name} >
                            <div>
                                <h1 className="green">Name: {item.name}</h1>
                                <h3 className="blue">Population: {item.population}</h3>
                                <span>Region: {item.region}</span>
                                <h2 className="red">Country Code: {item.callingCodes}</h2>
                                <h4>Capital: {item.capital}</h4>
                                <p>Currency: {item.currencies[0].name}</p>
                                <h5>Time Zone: {item.timezones}</h5>
                                <img width={50} height={50} src={item.flag}></img>
                                
                            </div>
                           
                           </li><br/>
                           {index!==showDetails.length-1?<h1>V/S</h1>:null}
                        </div> 
                    },this)}
                </ul>
                </div>
        )
}
}
