import React,{useState} from "react"
import Boxes from './Boxes';
import Box from "./Box";
import './App.css'


const App = (props) => {

  const [count,setCount]=useState(0)
  const[squares,setSquares]=useState(Boxes)
  
  

  const squareElements=squares.map(square =>(
    <Box key={square.id} on={square.on} />
    ))

  function Add(){
      setCount(prevCount =>prevCount + 1)
    return(
      <div>
      <h1>{count}</h1>
        <button onClick={Add}> +</button>
      </div>
   )
  }
  return (
    <div>
      <h3>Full Stack web application development</h3>
      <Objects />   
      <div>
      <h1>{count}</h1>
        <button onClick={Add}> +</button>
        {squareElements}
      </div>
   )
   </div>
  )
}

export default App



function Objects(){
const object1=[
{
  part:'Fundamental of React',
  exercises: 10
},

{
  part:'Using props to pass data',
  exercises: 7
}

]

const listObj=object1.map((props)=>{
  return(
    <div>
       {props.part}
       {props.exercises}
    </div>
  )
})
return(
  <div>
    {listObj}
  </div>
)

}
