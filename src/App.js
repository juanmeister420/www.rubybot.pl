import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
    </Router>
  );
}

export default App;
