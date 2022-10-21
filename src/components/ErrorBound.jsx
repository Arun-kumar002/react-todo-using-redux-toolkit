import React from 'react'
class Boundary extends React.Component {
    
    constructor() {
      super();
      this.state = { hasError: false };
    }
    
  static getDerivedStateFromError(err){
    console.log('erroe',err);
      return this.hasError=true
    }
    componentDidCatch(error,info){
      console.log('error',error);
      console.log('error1',info)
    }
    render() {
        console.log('im');
        if(this.state.hasError===true){
          <h1>something went wrong...</h1>
        }else{
            console.log('im in else');
          return this.props.children
        }
      
    }
  }
export default Boundary