import { Navigate } from "react-router-dom";

const isAuthenticated = false; // Change to true to simulate login

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;