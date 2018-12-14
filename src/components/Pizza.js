import React from "react"

const Pizza = (props) => {

  return(
    <tr>
      <td>{props.eachPizza.topping}</td>
      <td>{props.eachPizza.size}</td>
      <td>{props.eachPizza.vegetarian ? "Vegetarian" : "Non Vegetarian"}</td>
      <td><button type="button" className="btn btn-primary" data-id={props.eachPizza.id} onClick={()=>props.editAPizza(props.eachPizza)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
