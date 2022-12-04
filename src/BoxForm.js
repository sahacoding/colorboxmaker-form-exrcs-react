import React, { Component } from 'react'
let {v4: uuidv4} = require ('uuid')
class BoxForm extends Component{
    constructor(props){
        super(props)
        this.state = {height: "", width: "", color: ""}
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    handleChange(e){
            
            this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){ 
        e.preventDefault()
      const box = {...this.state, id: uuidv4()}
        this.props.create(box)
        this.setState({height: "", width: "", color: ""})
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                 <label htmlFor='height'>Height</label>
                  <input type="text" 
                  name='height' 
                  id='height'
                  value={this.state.height}
                  onChange = {this.handleChange}
                  />
                 </div>
                 <div>
                 <label htmlFor='width'>width</label>
                  <input type="text" 
                  name='width' 
                  id='width'
                  value={this.state.width}
                  onChange = {this.handleChange}
                  />
                 </div>
                 <div>
                 <label htmlFor='color'>color</label>
                  <input type="text" 
                  name='color' 
                  id='color'
                  value={this.state.color}
                  onChange = {this.handleChange}
                  />
                 </div>
                 <button>Submit</button>
            </form>
            
        )
    }
}
export default BoxForm