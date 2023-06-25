import usePlayers from "./usePlayers";
import "./Players.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Players = () => {
  const { data, isLoading } = usePlayers();

  if (isLoading)
    return (
      <Skeleton
        height={600}
        style={{ marginTop: "10px", borderRadius: "10px" }}
      />
    );

  return (
    <div className="table">
      <h2 className="nb-players">{data?.length} joueurs convoqués</h2>
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((player) => (
            <tr key={player.photo_url}>
              <td>
                <img
                  src={player.photo_url}
                  alt={player.last_name}
                  className="avatar"
                />
              </td>
              <td>{player.last_name}</td>
              <td>{player.first_name}</td>
              <td>{player.email}</td>
              <td>
                <span className={player.status === "present" ? "green" : "red"}>
                  {player.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Players;
