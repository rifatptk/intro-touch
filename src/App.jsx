import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  const [auth, setauth] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <div className="w-full min-h-screen bg-brand-gray md:py-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth">
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
