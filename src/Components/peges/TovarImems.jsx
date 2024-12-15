import React, { Component } from 'react';
import TovarItem from './TovarItem'; // Обратите внимание на правильность импорта

// Компонент Tovar
export class TovarImems extends Component {
  render() {
    // Проверяем, определены ли props.items и является ли это массивом
    const { items = [], onShowTovar, onAdd } = this.props;

    return (
      <main>
        {/* Перебираем элементы и отображаем TovarItem для каждого элемента */}
        {Array.isArray(items) && items.map(el => (
          <TovarItem 
            onShowTovar={onShowTovar} 
            key={el.id}  
            item={el}  
            onAdd={onAdd}  
          />
        ))}
      </main>
    );
  }
}

export default TovarImems;