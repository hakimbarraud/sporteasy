import Match from "../Match/Match";
import useNextMatch from "./useNextMatch";

const NextMatch = () => {
  const { data } = useNextMatch();

  return (
    <Match
      title="Prochain match"
      leftTeamName={data?.left_team.name}
      leftTeamScore={data?.left_team.score}
      rightTeamName={data?.right_team.name}
      rightTeamScore={data?.right_team.score}
    />
  );
};

export default NextMatch;
