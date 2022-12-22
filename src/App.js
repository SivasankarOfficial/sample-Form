import Form from './components/Form';
import './App.css';
import {useState} from "react";


function App() {
  const [data,setData]=useState([])
  const AddForm=(obj)=>{

    setData((data)=>{
      return [obj,...data]
    })

  } 
 
  function deleted(id){

    setData((data)=>{
      return data.filter((data)=> data.id!==id)
    })

  }
    
  
  return(
    <div>
    <Form form={AddForm}/>
    {data.length===0?(<h2>No Data Found </h2>):data.map((data,index) =>
    <div id='map' key={index}>
      <p>{data.name}</p>
      <button onClick={()=>deleted(data.id)}>Delete</button>
      </div>
    
    )}
  
  </div>
    
 
  )
}


export default App;
