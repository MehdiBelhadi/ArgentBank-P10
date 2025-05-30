import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./Menu.style.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/userSlice";

function Menu() {
  // Récupère le token et les données utilisateur depuis le store Redux
  const { token, userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <nav className="main-nav">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div className="main-nav-item">
        {/* Conditionne l'affichage du menu selon la connexion */}
        {!token ? (
          <NavLink className="main-nav-item" to="/sign-in">
            <FontAwesomeIcon icon={faCircleUser} />
            <span> Sign In</span>
          </NavLink>
        ) : (
          <>
            <NavLink className="main-nav-item" to="/profile">
              <FontAwesomeIcon icon={faCircleUser} />
              <span> {userData.userName}</span>
            </NavLink>
            <NavLink
              className="main-nav-item"
              to="/"
              onClick={() => dispatch(logout())}
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
              <span> Sign out</span>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Menu;
