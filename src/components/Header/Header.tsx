import logo from "../../assets/logo-sporteasy.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
    </header>
  );
};
