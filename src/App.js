// // import React from 'react';

// import FBCPropEx from "./propsex/FBCPropEx";

// // function App() {
// //   let username = "Ashwini";

// //   return (
// //     <div className="App">
// //       <h1>Header</h1>
// //       <p>Hello, {username}!</p> {/* Displaying the username */}
// //       <input placeholder="Enter text" />
// //     </div>
// //   );
// // }

// // export default App;

// // ! component composition 
// // import React from 'react'
// // import Navbar from './components/Navbar';
// // import Main from './components/Main';
// // import Slidebar1 from './components/Sidebar1';
// // import Slidebar2 from './components/sidebar2';
// // import Footer from './components/Footer';
// //  const App = () => {
// //   return (
// //     <div>className='app'
// //       <Navbar/>
// //       <Main/>
// //       <div className='sidebar'>
// //         <Slidebar1/>
// //         <Slidebar2/>
// //       </div>
// //       <footer/> 
// //     </div>
// //   )
// // }

// // export default App

// // import React, { Component } from 'react'
// // import CBCPropEx from './propsex/CBCPropEx'

// // export default class App extends Component {
// // render() {
// // return (
// // <div>
// // <CBCPropEx
// // username="Vamshi"
// // age={20}
// // hobbies={["Playing" , "reading books" , "stock"]}
// // address={{city:"sircilla", area:"Gandinagar"}}
// // sendFun={function(){alert("hi i am vamshi") }}
// // />
// // </div>
// // )
// // }
// // }
// <FBCPropEx
// username="Abhinay"
// isMArried={true}
// hobbies={["chatting" , "playing"]}
// />

// import React from 'react'
// import CBCStateEx from './propsex/CBCStateEx'
// const App = () => {
//   return (
//     <div><CBCStateEx/></div>
//   )
// }

// export default App

import logo from './logo.svg'
import './App.css';
import MyForm from './components/myForm';



function App() {
  return (
    <div className="App">
     <MyForm></MyForm>
     </div>
  );
}

export default App;
