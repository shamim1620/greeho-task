import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login';
import Registration from './components/Home/Registration/Registration';
import AuthProvider from './context/AuthProvider';
import Profile from './components/Home/Profile/Profile/Profile';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
