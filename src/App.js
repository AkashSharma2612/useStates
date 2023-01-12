import logo from './logo.svg';
import './App.css';
import Employee from './Screens/Employee';
import Header from './Screens/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
     <Routes>
      <Route path='/home'element={<Home/>}/>
      <Route path='/employee'element={<Employee/>}/>
      
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
