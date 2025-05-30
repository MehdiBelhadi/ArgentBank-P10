// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ token, redirectPath, children }) => {
  // Redirige l'utilisateur s'il n'y a pas de token
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  // Autorise l'accès à la page demandée si l'utilisateur est connecté
  return children;
};

export default ProtectedRoute;
