import React,{useState} from 'react'
const Todo = (props) => {

  let [data,SetData]=useState('')
  let [alldata,setAlldata]=useState([])
  let [editable,setEditable]=useState(false)
  let [assist,setassist]=useState()
  let [update,setUpdate]=useState(false)
  let submit=()=>{
     if(editable === false && data !=''){
      setAlldata([...alldata,{id:Date.now(),data:data}])  
      SetData('')
     }
     else if(editable === true){
      let dat=alldata.filter(x=>{
        if(x.id==assist){
          x.data=data
          return x
        }
        return x

      })
      setAlldata(dat)
      setEditable(false)
      SetData('')
      setUpdate(false)
     }
    }
    let edit=(e)=>{
      let a=e.x.id
      SetData(e.x.data)
      setEditable(true)
      setassist(a)
      setUpdate(true)
    }
    let del=(e)=>{
     let dat=alldata.filter(y=>{
        return y.id!=e
      })
      setAlldata(dat)
    }

   
  return (
    <div>
      <figure>
        <img src="" alt="" />
      </figure>
      <h1>Add Your List Here</h1>
      <div>
          <input type="text" name="data" id="" value={data} onChange={(e)=>SetData(e.target.value)} />
          <button onClick={()=>{submit()}}>{update === true ? 'update':'add'}</button>
    
      </div>
      <div>
        {
          alldata ?.map((x,i)=>{
            return <div key={i}>
              <p>{x.data}</p>
              <button onClick={()=>edit({x})}>edit</button>
              <button onClick={()=>del(x.id)}>delete</button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Todo