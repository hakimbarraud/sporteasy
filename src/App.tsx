import "./index.scss";
import { Header } from "./components/Header";
import { Event } from "./components/Event";
import Players from "./components/Players/Players";
import Profile from "./components/Profile/Profile";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <main className="main">
          <Event />
          <Players />
        </main>
        <aside>
          <Profile />
        </aside>
      </div>
    </div>
  );
};
