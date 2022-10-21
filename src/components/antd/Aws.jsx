// import axios from 'axios';
// import React ,{useState}from 'react'

// const Aws = () => {
//     let [pic,setPic]=useState()
   
//     let handleAws=async()=>{
//        try {
//         console.log(pic)
//         let geturl= await axios.get('http://localhost:5000/auth/studentlogin')
//         console.log(geturl.data.url);
//        await axios({
//         url:geturl.data.url,
//         headers:{
//             'Content-Type':'multipart/form-data'
//         },
//         data:pic
//        })
//        } catch (error) {
//         console.log(error);
//        }
//     //    const res=await AxiosInstance.post('/auth/s3response',s3)
//     }
//   return (
//     <div>
//         <input type="file" name="username"  id="" onChange={(e)=>setPic(e.target.files[0])}/>
//         <button onClick={handleAws}>upload</button>
//     </div>
//   )
// }

// export default Aws