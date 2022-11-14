import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, auth }) => {
  if (auth) {
    return <>{children}</>;
  } else {
    return <Navigate to="/auth/login" replace={true} />;
  }
};

export default ProtectedRoute;
