import React ,{lazy,Suspense}from 'react'
import Alldat from './components/todo/Alldat'
import Aws from './components/antd/Aws1';
import Boundary from './components/ErrorBound';
import Todo from './components/todo/Todo';
import Count from './components/todo/Count';
import Formik from './formik/Formik';


 

const App = () => {
  return (
   
    <Suspense fallback={<h1>loading.....</h1>}>
        {/* {/* <Alldat/>
         <Ant/>  */}
        {/* <Todo/> */}
        {/* <Aws/> */}
        {/* <Boundary>
         <Count/>
          <Todo emp={'arun'}/>
          </Boundary>  */}
          <Formik/>
    </Suspense>
 
  )
}

export default App
// ?force update 
// import React from 'react';



// class App extends React.Component {
//   shouldComponentUpdate(){
//     console.log('im');
//     return null
//   }
//   reRender = () => {
//     // calling the forceUpdate() method
//     this.forceUpdate();
//   };
//   render() {
  
//     console.log('Component is re-rendered');
//     return (
//       <div>
//         <h2>force update</h2>
//         <button onClick={this.reRender}>Click To Re-Render</button>
//       </div>
//     );
//   }
// }
// export default App;