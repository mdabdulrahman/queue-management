import React, { Component } from 'react'

export default class AplList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         view:true
      }
    }
    noview(obj){
        return (<div key={obj.aplno} className="noview">
          <h1>{obj.btype}</h1>
          <h1>{obj.bname}</h1>
          <h1>{obj.aplno}</h1>
          <button className='btn-secondary' onClick={()=>{this.setState({view:false})}}>View</button>
      
          </div>)
      }
      onview(obj){
        return (<div key={obj.aplno} className="onview w-full">
             <span className='shadow p-3 col-span-3 font-bold primary-text secondary-bg'>Application No : {obj.aplno}</span>
       <h1>Buisness Type : {obj.btype}</h1>
          <h1>Buisness Name : {obj.bname}</h1>
          <h1>Owner Name : {obj.Oname}</h1>
          <h1>Phone Number : {obj.number}</h1>
          <h1>Email Id : {obj.email}</h1>
         <h1>Country : {obj.country}</h1>
         <h1>State : {obj.state}</h1>
<h1>City : {obj.city}</h1>
<h1 >Google Map : <a href={obj.gurl} target="blank">GO to Map</a></h1>
<button className='success-btn'>Accept</button>
<button className='fail-btn'>Reject</button>
<button className='btn-secondary' onClick={()=>this.setState({view:true})}>Viewless</button>
          </div>)
      }
     
       getList(){
        return this.state.view?this.noview(this.props.data):this.onview(this.props.data)
    }
  render() {
    return (
      <div>{this.getList()}</div>
    )
  }
}
