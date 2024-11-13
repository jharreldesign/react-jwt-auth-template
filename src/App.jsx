import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <>
      <NavBar user={user} />
      <Routes>
        { user ? (
          <Route path="/" element={<Dashboard user={user} />} />
        ) : (
          <Route path="/" element={<Landing />} />
        )}
      </Routes>
    </>
  );
};

export default App;