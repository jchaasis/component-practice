import React, { Component } from 'react';

import Navlink from './Navlink';

class Navbar extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentPage: "Home",
    }
  }

  handleLinkClick(name){
    //when we click on a link, we want it to
    //register as the currently active link
    //and change color. when we click another
    //link the colors should switch.

    this.setState({
      currentPage: name
    });
  }

    render(){

      let navList = {
        marginLeft: "25%",
        display: "flex",
        listStyle: "none",
        textAlign: "center"
      }

      return(

          <nav>
            <ul style={navList}>
              <Navlink page="Home" active={this.state.currentPage} onClick={ (name) => this.handleLinkClick(name)}/>
              <Navlink page="Products" active={this.state.currentPage} active={this.state.currentPage} onClick={ (name) => this.handleLinkClick(name)}/>
              <Navlink page="Services" active={this.state.currentPage} onClick={ (name) => this.handleLinkClick(name)}/>
              <Navlink page="About" active={this.state.currentPage} onClick={ (name) => this.handleLinkClick(name)}/>
            </ul>
          </nav>
      )
    }
}

export default Navbar;
