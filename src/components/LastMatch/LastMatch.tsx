import useLastMatch from "./useLastMatch";
import "./LastMatch.scss";

const LastMatch = () => {
  const { data } = useLastMatch();
  return (
    <div className="stats-container">
      <h2 className="heading">Dernier match</h2>
      <div className="team-score">
        <p className="name">{data?.left_team.name}</p>
        <p className="score red-score">{data?.left_team.score}</p>
      </div>
      <div className="team-score">
        <p className="name">{data?.right_team.name}</p>
        <p className="score green-score">{data?.right_team.score}</p>
      </div>
    </div>
  );
};

export default LastMatch;
