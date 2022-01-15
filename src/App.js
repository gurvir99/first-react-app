import './App.css';
import Player from './components/component3';
import App2 from './components/component2';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Shop from './components/apiComponent';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';


function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );

  //-----for pracice purposes
  // return (
  //   <Router>
  //     <div>
  //       {/* <Player name="messi" team="psg" age="34" />
  //       <App2 /> */}
  //       <Nav />
  //       <Routes>
  //         {/* <Route path="/" exact element={<anotherComponent/>} /> */}
  //         <Route path="/" exact element={<Home/>} />
  //         <Route path="/about" exact element={<About/>} />
  //         {/* <Route path="/shop" element={<Shop/>} /> */}
  //       </Routes>
  //     </div>
  //   </Router>
  // );
}

// a generic component
// const anotherComponent = () =>(
//   <div>
//     <h2>Home Pageeee</h2>
//   </div>
// );

export default App;
