import React, { Component } from 'react';
import Pizza from '../components/Pizza'



class PizzaList extends Component {


  render() {
    // let pizzas = this.props.allPizzas.map(pizza=>{
    //   return <tr><td>{pizza.topping}</td><td>{pizza.size}</td><td>{pizza.vegetarian ? "vegetarian" : "not vegetarian"}</td><td><button onClick={this.props.editAPizza}>Edit</button></td></tr>
    // })
    let pizzas = this.props.allPizzas.map(pizza =>{
      return <Pizza eachPizza={pizza} key={pizza.id} editAPizza={this.props.editAPizza}/>
    })



    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            pizzas
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
