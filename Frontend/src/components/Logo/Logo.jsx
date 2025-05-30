import "./Logo.style.css";

function Logo() {
  return (
    <div className="main-nav-logo">
      <img
        className="main-nav-logo-image"
        src="./assets/argentBankLogo.webp"
        alt="Logo ArgentBank"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </div>
  );
}

export default Logo;
