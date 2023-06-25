import "./index.scss";
import { Header } from "./components/Header";
import { Event } from "./components/Event";
import Players from "./components/Players/Players";
import Profile from "./components/Profile/Profile";
import LastMatch from "./components/LastMatch/LastMatch";

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
          <LastMatch />
        </aside>
      </div>
    </div>
  );
};
