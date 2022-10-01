import React, { Component } from 'react'

export default class AplList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         view:true,
         reject:true
      }
      this.reasonReject={
        reason:""
      }
    }
  
    reject(){
      return this.state.reject?null:this.getRejectForm(this.props.data.aplno)
    }
    getRejectForm(){
return (<div className='form leading-normal animate__animated animate__zoomIn p-2 gap-4 flex-row col-span-3  w-3/4 h-16'>
<label className='font-bold'>Reason : </label>
<textarea onChange={(e)=>{this.reasonReject.reason=e.target.value;}} className='form-control pt-4 resize-none' rows="6" cols="40"></textarea>
<div className='flex justify-between pt-4'>
<button className='fail-btn' onClick={()=>this.props.reject(this.props.data.aplno,this.reasonReject.reason,this.props.data)}>Reject</button>
<button className='btn-secondary' onClick={()=>this.setState({view:this.state.view,reject:true})}>Cancel</button>
</div>
</div>)
    }
    noview(obj){
    
        return (<div key={obj.aplno} className="noview">
          <h1>{obj.btype}</h1>
          <h1>{obj.bname}</h1>
          <h1>{obj.aplno}</h1>
          <button className='btn-secondary' onClick={()=>{this.setState({view:false,reject:true})}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

            View</button>
      
          </div>)
      }
      onview(obj){
        return (<div key={obj.aplno} className="onview w-full">
             <span className='shadow  flex items-center justify-center gap-2 p-3 col-span-3 font-bold primary-text secondary-bg'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>
Application No : {obj.aplno}</span>
       <h1>Buisness Type : {obj.btype}</h1>
          <h1>Buisness Name : {obj.bname}</h1>
          <h1>Owner Name : {obj.Oname}</h1>
          <h1>Phone Number : {obj.number}</h1>
          <h1>Email Id : {obj.email}</h1>
         <h1>Country : {obj.country}</h1>
         <h1>State : {obj.state}</h1>
<h1>City : {obj.city}</h1>
<h1 >Google Map : <a href={obj.gurl} target="blank">GO to Map</a></h1>
<button className='success-btn ' onClick={()=>{this.props.accept(this.props.data)}}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
</svg>

  Accept</button>
<button className='fail-btn' onClick={()=>{this.setState({view:false,reject:false})}}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
</svg>

  Reject</button>
<button className='btn-secondary' onClick={()=>this.setState({view:true,reject:true})}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg>

  Viewless</button>
          {this.reject()}
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
