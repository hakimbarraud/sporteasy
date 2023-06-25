import useLastMatch from "./useLastMatch";
import "./LastMatch.scss";
import Match from "../Match/Match";

const LastMatch = () => {
  const { data } = useLastMatch();

  return (
    <Match
      title="Dernier Match"
      leftTeamName={data?.left_team.name}
      leftTeamScore={data?.left_team.score}
      rightTeamName={data?.right_team.name}
      rightTeamScore={data?.right_team.score}
    />
  );
};

export default LastMatch;
