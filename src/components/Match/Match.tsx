import "./Match.scss";

interface Props {
  title: string;
  leftTeamName: string | undefined;
  leftTeamScore?: number | null | undefined;
  rightTeamName: string | undefined;
  rightTeamScore?: number | null | undefined;
}

const Match = ({
  title,
  leftTeamName,
  leftTeamScore,
  rightTeamName,
  rightTeamScore,
}: Props) => {
  return (
    <div className="stats-container">
      <h2 className="heading">{title}</h2>
      <div className="team-score">
        <p className="name">{leftTeamName}</p>
        <p className="score red-score">{leftTeamScore}</p>
      </div>
      <div className="team-score">
        <p className="name">{rightTeamName}</p>
        <p className="score green-score">{rightTeamScore}</p>
      </div>
    </div>
  );
};

export default Match;
