import "./index.scss";
import { Header } from "./components/Header";
import { Event } from "./components/Event";
import Players from "./components/Players/Players";

export const App = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Event />
        <Players />
      </div>
    </div>
  );
};
