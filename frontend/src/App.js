
import { useState } from 'react'
import { Radar } from 'react-chartjs-2';
import Profile from './components/Profile';
import SpiderGraph from './components/SpiderGraph';
import Navbar from './components/Navbar'
import LoginScreen from './components/LoginScreen';
import KudosToday from './components/KudosToday';
import SendKudos from './components/SendKudos';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import DisplayPosts from './components/DisplayPosts';
import Scrapbook from './components/Scrapbook';







function App() {
  const [title, setTitle] = useState('Home');


  return (
    <div>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<DisplayPosts  />}></Route>
                <Route path="/Profile" element={<Profile />}></Route>
                <Route path='/Kudos' element={<KudosToday/>}></Route>
                <Route path="/Scrapbook" element={<Scrapbook />}></Route>
            </Routes>
            <Navbar/>
        </Router>

    </div>
  );
}

export default App;
