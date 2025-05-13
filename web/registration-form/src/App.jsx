import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from '../src/Users';
import Registration from './Registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Registration/>} />
           {/* <Route path="/users" element={<Users />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;