import React from "react"
import CountryDetails from "./CountryDetails"
export default class Country extends React.Component{
    constructor(props) {
        super(props);
          (this.state = {
              country:[],
              search:"",
              countryNames:[]
          })}
    componentDidMount(){
        fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            country: result,
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
    }
    onChangeHandeler=(e)=>{
        this.setState({
            search:e.target.value
        })
    }
    
    setDetails=(name)=>{
        let flag=this.state.countryNames.length!==0?window.confirm("Do you want to compare contries detail?"):true
        if (flag) { 
            let countries= this.state.countryNames
        countries.push(name);
        countries=[...new Set(countries)]
        this.setState({
            countryNames:countries,
            search:""
        })
          }else{
            let data=[]
            data.push(name)
            this.setState({
                countryNames:data,
                search:""
            })
          }
       
    }
    render(){
        let showContries=[]
        this.state.country.map((item,index)=>{
            if(item.name && this.state.search.length>0){
                if(item.name.toLowerCase().includes(this.state.search.toLowerCase())){
                    showContries.push(item)
                }
            }
           
        })
        return(<div className="container">
            <header> 
            <h1 className="blue">Country Information</h1>
            </header> 
            <div><br/>
                <input placeholder="Search" value={this.state.search} onChange={this.onChangeHandeler}/>
            </div>
            <div>
            <ul>
                    {showContries.map((item,index)=>{
                        return<div  key={item.name}>
                            <li key={item.name} >
                         <button className="btnClass" onClick={()=>this.setDetails(item.name)}>{item.name} <img src={`https://www.countryflags.io/${item.alpha2Code}/flat/16.png`}/></button>
                           </li><br/>
                        </div> 
                    },this)}
                </ul>
            </div>
            <CountryDetails data={this.state.countryNames} countries={this.state.country}/>
            </div>)
    }
}