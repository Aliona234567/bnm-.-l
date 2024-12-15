import React from 'react';
import Navbar from '../Navbar';
import Footer from './Footer';
import TovarImems from './TovarImems';

export class Tovar extends React.Component {
  render() {
    return (
      <div className='item1'>
        <div className='asd'>
          <img src={'./img/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
        </div>
        <div className='dfg'>
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

class Home extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      orders:[],
      currentItems:[],
      items: [ 
        {
          id:1,
          title: 'Шоколадное безумие',
          img:'первое.jpg',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Условия хранения<br>Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'assorted',
          price:'200'
        },
        {
          id:2,
          title: 'Шоколадное безумие',
          img:'второе.jpg',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Условия хранения<br>Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'milky',
          price:'Цена:200$'
        },
        {
          id:3,
          title: 'Шоколадное безумие',
          img:'третье.jpg',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Условия хранения<br>Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'milky',
          price:'Цена:200$'
        },
        {
          id:4,
          title: 'Шоколадное безумие',
          img:'четвертое.jpg',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Условия хранения<br>Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'assorted',
          price:'Цена:200$'
        },{
          id:5,
          title: 'Шоколадное безумие',
          img:'второе.jpg',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Условия хранения<br>Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'candies',
          price:'Цена:200$'
        },
        {
          id:6,
          title: 'Шоколадное безумие',
          img:'второе.jpg',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Условия хранения<br>Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'milky',
          price:'Цена:200$'
        },
        {
          id:7,
          title: 'Шоколадное безумие',
          img:'второе.jpg',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Условия хранения<br>Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'milky',
          price:'Цена:200$'
        },
        {
          id:8,
          title: 'Шоколадное безумие',
          img:'второе.jpg',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Условия хранения<br>Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'milky',
          price:'Цена:200$'
        },
        {
          id:9,
          title: 'Шоколадное безумие',
          img:'второе.jpg',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Условия хранения<br>Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'assorted',
          price:'Цена:200$'
        },{
          id:10,
          title: 'Шоколадное безумие',
          img:'второе.jpg',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Условия хранения<br>Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'dragees',
          price:'Цена:200$'
        }
        ,{
          id:11,
          title: 'Шоколадное безумие',
          img:'второе.jpg',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Условия хранения<br>Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'candies',
          price:'Цена:200$'
        }
        ,{
          id:12,
          title: 'Шоколадное безумие',
          img:'второе.jpg',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Условия хранения<br>Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'dragees',
          price:'Цена:200$'
        }
        
      ],
      ShowFullItem:false,
      fullItem:{},
    };}}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [], // Массив товаров начально пуст
      currentItems: [],
      showFullItem: false,
      fullItem: null,
    };
  }

  onShowItem = (item) => {
    this.setState({ fullItem: item, showFullItem: !this.state.showFullItem });
  };

  chooseCategory = (category) => {
    const currentItems = category === 'all' ? this.state.items : this.state.items.filter(el => el.category === category);
    this.setState({ currentItems });
  };

  deleteOrder = (id) => {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) });
  };

  addToOrder = (item) => {
    if (!this.state.orders.find(el => el.id === item.id)) {
      this.setState(prevState => ({ orders: [...prevState.orders, item] }));
    }
  };

  render() {
    return (
      <div className='wrapper'>
        <Navbar orders={this.state.orders} onDelete={this.deleteOrder} />
        <Tovar onShowItem={this.onShowItem} onAdd={this.addToOrder} item={{}} /> {/* Передаем пустой объект для примера */}
        <Footer />
      </div>
    );
  }
}

export default App;