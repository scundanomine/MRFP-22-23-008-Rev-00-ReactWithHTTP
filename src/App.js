import './App.css';
import About from './mycomponents/About';
import Home from './mycomponents/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './mycomponents/Navbar';
import RouteParam from './mycomponents/RouteParam';

function App() {
  const a = { color: 'blue' }
  return (
    <Router>
      <div className="App">
        <h1 style={a}>Router Tutorial <br /></h1>
        <Navbar></Navbar>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/about/:id' element={<RouteParam />}/>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;