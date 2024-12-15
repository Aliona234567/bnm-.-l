import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
        <img src={'./img/'+ this.props.item.img}onClick={() => this.props.onShowItem(this.props.item)}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <p className='mi'>Состав</p>

        <p>{this.props.item.opis}</p>
        <b>{this.props.item.price}</b>
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}> Корзина</div>

        </div>
         
        
      </div>
    )
  }
}

export default ShowFullItem