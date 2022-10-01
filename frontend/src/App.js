import { Radar } from 'react-chartjs-2';
import Profile from './components/Profile';
import SpiderGraph from './components/SpiderGraph';
import Navbar from './components/Navbar'
import LoginScreen from './components/LoginScreen';
import KudosToday from './components/KudosToday';
import SendKudos from './components/SendKudos';


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Profile /> */}
      {/* <LoginScreen/> */}
      {/* <KudosToday /> */}
      <SendKudos />
    </div>
  );
}

export default App;
