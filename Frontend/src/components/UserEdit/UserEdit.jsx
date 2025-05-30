import { useState } from "react";
import "./UserEdit.style.css";
import { useDispatch, useSelector } from "react-redux";
import { editMode, editUserName } from "../../slices/userSlice";
import Button from "../Button/Button";

function UserEdit() {
  const dispatch = useDispatch();
  // Récupération des données utilisateur depuis le store
  const { token, userData } = useSelector((state) => state.user);
  // Création d'un état pour afficher ou non le formulaire d'édition
  const [editToggle, setEditToggle] = useState(false);
  // Création d'un état pour contrôler la valeur du champ username dans le formulaire
  const [userName, setUserName] = useState("");

  // Fonction pour basculer l'affichage du formulaire d'édition
  const handleToggle = (e) => {
    e.preventDefault();
    setUserName(userData.userName);
    setEditToggle((editToggle) => !editToggle);
    dispatch(editMode(!editToggle));
  };

  // Envoi du nouveau username lors de la soumission du formulaire
  const handleUsernameEdit = (e) => {
    e.preventDefault();
    const username = {
      userName: userName,
    };
    dispatch(editUserName({ username, token }));

    // Bascule l'affichage du formulaire d'édition
    setEditToggle((editToggle) => !editToggle);

    // Envoie l'état editMode au store
    dispatch(editMode(!editToggle));
  };

  return (
    <div className={`header ${editToggle ? "header-edit" : ""}`}>
      {/* Conditionne l'affichage du formulaire d'édition */}
      {!editToggle ? (
        <>
          <h1>
            Welcome back
            <br />
            {userData.firstName} "{userData.userName}" {userData.lastName}!
          </h1>
          <Button
            content={"Edit Name"}
            className={"edit-button"}
            onClick={(e) => handleToggle(e)}
          />
        </>
      ) : (
        <>
          <h1>Edit user info</h1>
          <form>
            <div>
              <label htmlFor="username">User name:</label>
              <input
                type="text"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                id="firstName"
                disabled="disabled"
                value={userData.firstName}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last name:</label>
              <input
                type="text"
                id="lastName"
                disabled="disabled"
                value={userData.lastName}
              />
            </div>
            <div>
              <Button
                content={"Save"}
                className={"edit-button"}
                type={"submit"}
                onClick={(e) => handleUsernameEdit(e)}
              />
              <Button
                content={"Cancel"}
                className={"edit-button"}
                onClick={(e) => handleToggle(e)}
              />
            </div>
          </form>
        </>
      )}
    </div>
  );
}
export default UserEdit;
