import "./index.scss";
import { Header } from "./components/Header";
import { Event } from "./components/Event";
import Players from "./components/Players/Players";
import Profile from "./components/Profile/Profile";

export const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Event />
        <Players />
        <aside>
          <Profile />
        </aside>
      </main>
    </div>
  );
};
