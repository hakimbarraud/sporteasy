import "./Header.scss";
import logo from "../../assets/logo-sporteasy.svg";
import useMatch from "./useMatch";

export const Header = () => {
  const { data } = useMatch();

  console.log(data);

  return (
    <header className="header">
      <img src={logo} alt="logo" />
    </header>
  );
};
