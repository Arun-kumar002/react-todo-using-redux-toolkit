const  axios  = require("axios")
 let AxiosInstance=axios.create({
    baseURL:'http://localhost:5000',
    headers:{
        "Content-Type":"application/json"
    }
})

export default AxiosInstance