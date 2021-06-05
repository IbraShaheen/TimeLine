// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



//Componenets
import Head from "./components/Head";
import Body from "./components/Body";
import Footer from "./components/Footer";

//styling
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Head />
      <Body />
      <Footer />
    </div>
  );
}

export default App;