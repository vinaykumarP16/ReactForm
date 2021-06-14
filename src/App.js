import React, { Component } from 'react';
import './App.css';
export default class App extends Component {
    constructor(){
      super()
      this.state={
        fname:"",
        lname:'',
        age:'',
        gender:'',
        destination:'',
        swimming:false,
        shopping:false,
        exploring:false
        
      }
      this.handleChange=this.handleChange.bind(this);
    }

  handleChange(event){
    console.log('changing');
    const{name,value,type,checked}=event.target
    type==="checkbox" ? 
      this.setState({
              [name]:checked
             } 
          ) 
      :
    this.setState({
      [name]:value
    })
  }

  

  render() {
    return (
      <div className="App">
      <h3> modern form </h3>
          <form>
            <input type="text" value={this.state.fname}
             name="fname" placeholder="fname" 
             onChange={this.handleChange}/>
            <input type="text" value={this.state.lname} 
            name="lname"placeholder="lname" 
            onChange={this.handleChange}/>
            <input type="number" value={this.state.age}
              name="age" placeholder="dob" 
              onChange={this.handleChange}/>
            <label>
              <input type="radio"
                name='gender'
                value="male"
                checked={this.state.gender==="male"}
                onChange={this.handleChange}
              />male 
            </label>  
            <label>
              <input type="radio"
                name='gender'
                value="female"
                checked={this.state.gender==="female"}
                onChange={this.handleChange}
              />female 
            </label>
            <select value={this.state.destination} name="destination" onChange={this.handleChange}>
              <option value="choose here">select the dest</option>  
              <option value="australia">australia</option>
              <option value="california">california</option>
              <option value="canada">canada</option>
              <option value="france">france</option>
            </select>
            <label>
              <input type="checkbox"
                  name="swimming"
                    onChange={this.handleChange}
                    checked={this.state.swimming}
                  />swimming ?
            </label>
            <label>
              <input type="checkbox"
                  name="shopping"
                    onChange={this.handleChange}
                    checked={this.state.shopping}
                  />shopping ?
            </label>
            <label>
              <input type="checkbox"
                  name="exploring"
                    onChange={this.handleChange}
                    checked={this.state.exploring}
                  />exploring ?
            </label>
         </form>     

                <div className="entered-data"> 
                    <h2> data Preview </h2>
                 <h3>fname: {this.state.fname} </h3>
                 <h3> lname: {this.state.lname} </h3>
                 <h3> age: {2020-this.state.age} <h6> as on january 2021</h6> </h3>
                 <h3> gender:{this.state.gender} </h3>
                 <h3> destination:{this.state.destination}</h3>
                 <h3> swimming: {this.state.swimming ? "like" : "no"}</h3>
                 <h3> shopping: {this.state.shopping ? "like" : "no"} </h3>
                 <h3> exploring: {this.state.exploring ? "like" : "no"}</h3>
               </div>
      </div>
    );
  }
}
