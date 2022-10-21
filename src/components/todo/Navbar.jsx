import React ,{useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import AxiosInstance from './../../apis/axiosinstance';
import { create } from './../../redux/action';

const Todo = () => {

  let [user,setuser]=useState('')
  let all=useSelector(s=>s.alldata)
  let dispatch=useDispatch()
  let submit=async(e)=>{

    e.preventDefault()



  }

  return (
    <div>
      <form action="" onSubmit={submit}>
        <label htmlFor="">Enter the Username</label>
        <input type="text" name="username" id="" value={user} onChange={(e)=>setuser(e.target.value)}/>
        <button >add</button>
      </form>
      <div>
        {
          console.log(all)
        }
      </div>
    </div>
  )
}

export default Todo