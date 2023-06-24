import usePlayers from "./usePlayers";
import "./Players.scss";

const Players = () => {
  const { data } = usePlayers();

  return (
    <div className="table">
      <h2 className="nb-players">{data?.length} joueurs convoqués</h2>
      <table>
        <thead>
          <th>Photo</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Statut</th>
        </thead>
        <tbody>
          {data?.map((player) => (
            <tr>
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
                <span className={player.status === "absent" ? "green" : "red"}>
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
