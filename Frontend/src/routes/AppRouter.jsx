import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  // Récupère le token depuis le store Redux
  const { token } = useSelector((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sign-in"
          element={
            // Bloque l'accès à la page de connexion si l'utilisateur est déjà connecté
            <ProtectedRoute token={!token} redirectPath="/profile">
              <SignIn />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            // Protège l'accès à la page profil, accessible uniquement si l'utilisateur est déjà connecté
            <ProtectedRoute token={token} redirectPath="/sign-in">
              <Profile />
            </ProtectedRoute>
          }
        />
        {/* Redirect to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
