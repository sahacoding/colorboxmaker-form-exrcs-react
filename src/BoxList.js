import React, { Component } from 'react'
import Box from './Box'
import BoxForm from './BoxForm'
class BoxList extends Component{
    constructor(props){
        super(props)
        this.state = {boxes:[]}
        this.createBox = this.createBox.bind(this);
    }
    createBox(newbox){
        this.setState({
            boxes: [...this.state.boxes, newbox]
        })
    }
    Remove(id){
        this.setState({
             boxes: this.state.boxes.filter(box => box.id !== id)
         })
    }
    render(){
        let boxes = this.state.boxes.map(box => (
            <Box key={box.id} id={box.id}  height= {box.height} width= {box.width} color= {box.color}
            removeBox={() => this.Remove(box.id)}/>
        ))
        return(
           
            <div>
                <h1>Color Box Maker</h1>
                <BoxForm create = {this.createBox} />
                {boxes}
               
            </div>
        )
    }
}
export default BoxList