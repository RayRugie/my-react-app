import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contacts/Contacts';
import Icons from './Components/Icons/Icons';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
        <Icons />
        <Footer />  
      </Router>
      
       
    </div>
  );
}

export default App;
