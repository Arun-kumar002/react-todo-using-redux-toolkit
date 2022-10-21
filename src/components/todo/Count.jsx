import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetch,create ,edituser,deleted,update} from './../../redux/reducer';

const Count = () => {
  let [user,Setuser]=useState('')
  let [updatevalue,setupdatevalue]=useState([])
   let dispatch= useDispatch()
   let count=useSelector(s=>s.alldata)
   let username=useSelector(s=>s.username)
   let status=useSelector(s=>s.deleted)
   let editable=useSelector(s=>s.editable)
   let [click,setclick]=useState(false)

   useEffect(()=>{
    dispatch(fetch())
   },[status,editable,click])


   let edited=()=>{
    setclick(!click)
    if(!editable){
      dispatch(create(user))
    }else if(editable){
      let data={...updatevalue,username:user}
      dispatch(update(data))
    }
   }

   let value=(x)=>{
    Setuser(x.username)
    setupdatevalue({...x})
    dispatch(edituser())
   }
   let change=(e)=>{
    if(!editable){
      Setuser(e.target.value)
    }else if(editable){
      Setuser(e.target.value)
    }
   }
  return (
    <div>
      <p>{status ?'user deleted successfully---------------'+status:''}</p>
      <p>{!editable ?`username successfully  in the db---------${username}`:`user edited ${editable}`}</p>
    <div>
      <input type="text" name="username" id="" value={user} onChange={change}/>
      <button onClick={()=>{edited()}}>adduser</button>
    </div>
    <button onClick={()=>dispatch(fetch())}>getUser</button>
    <div>
      {
        count.map((x,i)=>{
          return <div key={i}>
          <p >{x.username}</p>
          <button onClick={()=>{value(x)}}>edit</button>
          <button onClick={()=>dispatch(deleted(x.id))} >delete</button>
          </div>
        })
      }
    </div>
    </div>
  )
}

export default Count