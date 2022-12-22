import {useState} from "react";
import './Form.css'


function Form(props) {
  const [add,setAdd]=useState('')
  function Added(e)
  {
    if(add.length>0){
      setEmpty(true)
      setError(true)
    }
    setAdd(e.target.value)
    
  }
  const [empty,setEmpty]=useState(true)
  const[error,setError]=useState(true)
  
  function Click(){

if(add.length===0){
  setEmpty(false)
  setError(false)
}
else{
const obj={
      id:Math.floor(Math.random()*100),
      name:add
    }
props.form(obj)
setAdd('')
  }

  }
  return (
      <div className="Form">
        <div>
        <div><label style={{color:empty?'black':'red'}}>Enter Text</label></div>
        <div><input type='text'style={{border:empty?'2px solid black':'2px solid red'}} value={add} onChange={Added} ></input></div>
       <div> {error? ' ' : <p>Please Fill..!</p>}</div>
      
        </div>
        <div><button onClick={Click}>Add</button></div>
       </div>
    );
  }

  export default Form;