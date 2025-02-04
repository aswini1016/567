// import React from 'react';

// function App() {
//   let username = "Ashwini";

//   return (
//     <div className="App">
//       <h1>Header</h1>
//       <p>Hello, {username}!</p> {/* Displaying the username */}
//       <input placeholder="Enter text" />
//     </div>
//   );
// }

// export default App;

// ! component composition 
import React from 'react'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Slidebar1 from './components/Sidebar1';
import Slidebar2 from './components/sidebar2';
import Footer from './components/Footer';
 const App = () => {
  return (
    <div>className='app'
      <Navbar/>
      <Main/>
      <div className='sidebar'>
        <Slidebar1/>
        <Slidebar2/>
      </div>
      <footer/> 
    </div>
  )
}

export default App