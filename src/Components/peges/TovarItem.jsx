import React from 'react';

export class TovarItem extends React.Component {
  render() {
    return (
      <div className='item'>
        <div>
        <img src={'./img/'+ this.props.item.img}onClick={() => this.props.onShowItem(this.props.item)}/>

        </div>
        <div>
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <p>{this.props.item.opis}</p>
          <p>{this.props.item.opic}</p>
          <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>
            <button className='add-to-cart'>Корзина</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TovarItem;