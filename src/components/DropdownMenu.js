import React, { Component } from 'react';

import DropdownItem from './DropdownItem';

class DropdownMenu extends Component{
  constructor(props){
    super(props);

    this.state = {
      visible: false,
    }
  }


  handleDropdown(){
    if(this.state.visible===false){
      this.setState({
        visible: true,
      })
    }

    if(this.state.visible === true){
      this.setState({
        visible: false,
      })
    }
  }

  render(){

    if (this.state.visible === false){
      return(
        <div className="dropdown">
          <p onClick={event=>this.handleDropdown()}>File</p>
        </div>
      )
    }

    if(this.state.visible === true){
      return(
        <div className="dropdown">
          <p onClick={()=>this.handleDropdown()}>File</p>
          <ul className="dropdownItems">
           <DropdownItem name='New' message="Lets go create a new one."/>
           <DropdownItem name='Save' message="This one has been saved."/>
           <DropdownItem name='Exit' message="Exiting this one."/>
         </ul>
        </div>
      )
    }
  }
}

export default DropdownMenu;
