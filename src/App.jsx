import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import ProfileFront from './pages/profileFront/ProfileFront';
import ShareMyDetails from './pages/shareMyDetails/ShareMyDetails';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  const [auth, setauth] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <div className="w-full min-h-screen bg-brand-gray sm:py-6">
          <Routes>
            <Route
              path="/auth/login"
              element={<Login auth={auth} setauth={setauth} />}
            />
            <Route
              path="/"
              element={
                <ProtectedRoute auth={auth}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/share-my-details"
              element={
                <ProtectedRoute auth={auth}>
                  <ShareMyDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile-front"
              element={
                <ProtectedRoute auth={auth}>
                  <ProfileFront />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
