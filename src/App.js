import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state={
    allPizzas: [],
    pizzasCopy: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/pizzas")
    .then(res => res.json())
    .then(pizzas =>this.setState({allPizzas: pizzas, pizzasCopy: pizzas}))
  }
  editAPizza = (pizza)=>{
    console.log(pizza)
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm/>
        <PizzaList allPizzas={this.state.pizzasCopy} editAPizza={this.editAPizza}/>
      </Fragment>
    );
  }
}

export default App;
