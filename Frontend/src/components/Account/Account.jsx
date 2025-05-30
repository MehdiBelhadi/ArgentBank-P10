import { useSelector } from "react-redux";
import "./Account.style.css";
import Button from "../Button/Button";

function Account({ account }) {
  // Récupère l'état editMode pour modifier le style CSS
  const { editMode } = useSelector((state) => state.user);

  return (
    // Modifie la classe CSS en fonction de l'état editMode
    <section className={`account ${editMode ? "account-edit" : ""}`}>
      <div className="account-content-wrapper">
        <h3 className="account-title">{account.title}</h3>
        <p className="account-amount">{account.amount}</p>
        <p className="account-amount-description">{account.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button
          content={"View transactions"}
          className={"transaction-button"}
        />
      </div>
    </section>
  );
}

export default Account;
