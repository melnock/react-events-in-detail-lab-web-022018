// Code CoordinatesButton Component Here
import React from 'react'
export default class CoordinatesButton extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(<button onClick={(event)=>( this.props.onReceiveCoordinates([event.clientX, event.clientY]))}> </button>)
  }
}
