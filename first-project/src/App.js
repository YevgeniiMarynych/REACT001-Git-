import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageComponent from './components/HomePageComponent';
import AboutComponent from './components/AboutComponent';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="about" element={<AboutComponent />} />
      </Routes>
    </BrowserRouter>
   
   
      
    </div>
  );
}

export default App;
