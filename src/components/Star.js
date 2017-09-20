import React, { Component } from 'react';

//filled in star &#9733

class Star extends Component {
  constructor(props){
    super(props);

    this.state = {

      value:this.props.value,
      // highlight: false,
    }
  }

  //when the mouse hovers over the star, we switch it to a filled star
  handleMouseEnter(){
  
    this.props.onStarHover(this.state.value)
  }

  render(){
    if (this.props.highlight === false){
      return(
        <span className="star" onMouseOver={event=> this.handleMouseEnter()} > &#9734; </span>
      )
    }

    if (this.props.highlight === true){
      return(
        <span className="star" onMouseOver={event=> this.handleMouseEnter()}> &#9733; </span>
      )
    }
  }

}

export default Star;
      //
