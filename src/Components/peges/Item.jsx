import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; // Импортируем NavLink для навигации

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/'+ this.props.item.img}onClick={() => this.props.onShowItem(this.props.item)}/>

        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}</b>

        {/* Кнопка "Подробнее" с маршрутом на новое сообщение */}
        <div className='add-to-cart1'> 
          <button className='add-to-cart1'>
            
              <NavLink to="/Tovar" >Подробнее</NavLink>  
            
          </button>
        </div>

        {/* Кнопка "Корзина" для добавления товара в корзину */}
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}> <button className='add-to-cart'>Корзина</button>
          
        </div>
      </div>
    );
  }
}

export default Item;