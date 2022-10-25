import React, { Component } from 'react'
import miata from '../assets/images/miata.jpg';
import miata2 from '../assets/images/miata2.jpg';
export default class Fotos extends Component {
  render() {
    return (
      <div>
        <img src={miata}/>
        <img src={miata2}/>
      </div>
    )
  }
}
