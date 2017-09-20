import React, { Component } from 'react';

class DropdownItem extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: this.props.name,
      active: false
    }
  }

  handleItemHover(){
  //when we hover over the item, set the state to true which will later turn it blue
  if (this.state.active === false){
   this.setState({
     active: true,
   })
   }
   //when we leave the item, set the state back to false which will later return the
  //white background

   if (this.state.active === true){
     this.setState({
       active: false
     })
   }
  }
  //print the message associated with each item
  handleItemSelect(){
    console.log(this.props.message)
  }

  render(){
    //create the itemStyle component
    let itemStyle=null;
    
    //check the state of each item so that we can determine the background-color
    if (this.state.active === true){
       itemStyle = {
        backgroundColor: "lightsalmon"
      }
    }

    if (this.state.active === false){
       itemStyle = {
        bacgroundColor: "none"
      }
    }

    return(
      <li className="dropdownItem"
      onMouseOver={event => this.handleItemHover()}
      onMouseLeave={() => this.handleItemHover()}
      onClick={()=> this.handleItemSelect()}
      style={itemStyle}> {this.state.name} </li>
    )
  }
}

export default DropdownItem;
