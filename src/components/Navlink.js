import React, { Component } from 'react';

class Navlink extends Component {

  //set the page prop from the link that was clicked as the state of the currentpage.
  handleOnClick(){
    this.props.onClick(this.props.page)
  }

  render(){
    let navLink = null;
    //if the active page is equal to the page name, its the current page
    //and we want it to stand out
    if(this.props.active !== this.props.page){
      navLink = {
        margin: "5px",
        color: "black"
      }
    }

    if(this.props.active === this.props.page){
      navLink = {
        margin: "5px",
        color: "red"
      }
    }

    return(
      <li onClick={()=> this.handleOnClick()} style={navLink}>{this.props.page}</li>
    )
  }
}

export default Navlink;
