import './App.css';
import { Route, Routes } from 'react-router-dom';
// import * as firebase from 'firebase/auth';
// import { Navigation } from './components/navbar/Navigation';
// import { Helloscreen } from './components/Helloscreen/Helloscreen';
import { Login } from './components/Login/Login';
import { MainTheme } from './components/Maintheme/MainTheme';
import { Signup } from './components/Signup/Signup';
import { Desk } from './components/Desk/Desk';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainTheme />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/desk" element={<Desk />} />
      </Routes>
    </div>
  );
}

export default App;
