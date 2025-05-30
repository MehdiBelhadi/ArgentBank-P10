import UserEdit from "../../components/UserEdit/UserEdit";
import { accounts } from "../../data/data";
import Account from "../../components/Account/Account";
import { useSelector } from "react-redux";

function Accounts() {
  // Récupère l'état editMode pour modifier le style CSS
  const { editMode } = useSelector((state) => state.user);

  return (
    // Modifie la classe CSS en fonction de l'état editMode
    <main className={`main ${editMode ? "edit-bg" : "bg-dark"}`}>
      <UserEdit />
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account) => (
        <Account key={Math.random()} account={account} />
      ))}
    </main>
  );
}

export default Accounts;
