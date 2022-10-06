import React,{useState} from "react"


const App = () => {

  const [count,setCount]=useState(0)

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
