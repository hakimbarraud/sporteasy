import "./index.scss";
import { Header } from "./components/Header";
import { Event } from "./components/Event";
import Players from "./components/Players/Players";
import Profile from "./components/Profile/Profile";
import LastMatch from "./components/LastMatch/LastMatch";
import NextMatch from "./components/NextMatch/NextMatch";

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
          <NextMatch />
        </aside>
      </div>
    </div>
  );
};
