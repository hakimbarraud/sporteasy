import "./index.scss";
import { Header } from "./components/Header";
import { Event } from "./components/Event";

export const App = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Event />
      </div>
    </div>
  );
};
