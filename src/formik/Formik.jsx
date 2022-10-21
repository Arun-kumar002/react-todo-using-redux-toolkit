import React from 'react'
import {useFormik}from 'formik'
import { basicSchema } from './Schema';
let submitted=(value,action)=>{
  console.log('submited',value);
  console.log(action)
  action.resetForm()
}
const Formik = () => {
    let formState=useFormik({
        initialValues:{
            email:'',
            username:'',
            password:'',
            age:''
        },
        validationSchema:basicSchema,
        onSubmit:submitted

    })
    console.log(formState.errors);
  return (
    <div>
            <form action="" onSubmit={formState.handleSubmit}>
                <div><input type="text" name="" id="username" value={formState.values.username} onChange={formState.handleChange} onBlur={formState.handleBlur}/></div>

              <input type="email" name="" id="email" value={formState.values.email}  onChange={formState.handleChange}onBlur={formState.handleBlur} className={formState.errors ? 'input-error':''} />
                <p>{formState.errors.email}</p>
             
              
                <div><input type="age" name="" id="age" value={formState.values.age}  onChange={formState.handleChange}onBlur={formState.handleBlur} /></div>
                <div><input type="password" name="" id="password" value={formState.values.password}  onChange={formState.handleChange}onBlur={formState.handleBlur} /></div>
                <button>add</button>
            </form>
    </div>
  )
}

export default Formik