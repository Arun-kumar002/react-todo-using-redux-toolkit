export let create=(data)=>{
    return {
        type:'create',
        payload:data
    }
}
export let update=()=>{
    return {
        type:'update'
    }
}