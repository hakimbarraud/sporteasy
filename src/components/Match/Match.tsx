import "./Match.scss";

interface Props {
  title: string;
  leftTeamName: string | undefined;
  leftTeamScore?: number | null | undefined;
  rightTeamName: string | undefined;
  rightTeamScore?: number | null | undefined;
  redColor?: string;
  greenColor?: string;
}

const Match = ({
  title,
  leftTeamName,
  leftTeamScore,
  rightTeamName,
  rightTeamScore,
  redColor,
  greenColor,
}: Props) => {
  const renderScore = (score?: number | null) => {
    if (score != null) {
      return score.toString();
    }
    return "-";
  };

  return (
    <div className="stats-container">
      <h2 className="heading">{title}</h2>
      <div className="team-score">
        <p className="name">{leftTeamName}</p>
        <p className={`score ${redColor}`}>{renderScore(leftTeamScore)}</p>
      </div>
      <div className="team-score">
        <p className="name">{rightTeamName}</p>
        <p className={`score ${greenColor}`}>{renderScore(rightTeamScore)}</p>
      </div>
    </div>
  );
};

export default Match;
