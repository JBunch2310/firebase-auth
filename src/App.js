import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Scenes/Login';
import Signup from './Scenes/Signup';
import Welcome from './Scenes/Welcome';

function App() {
  const [user, setUser] = useState();
  return (
    <Routes>
      <Route path="/login" element={<Login setUser={setUser}/>} />
      <Route path="/Signup" element={<Signup setUser={setUser} />} />
      <Route path="/" element={user 
        ? <Welcome user={user} /> 
        : <Login setUser={setUser}/>} />
    </Routes>
  );
}

export default App
