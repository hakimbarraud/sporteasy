import Match from "../Match/Match";
import useNextMatch from "./useNextMatch";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NextMatch = () => {
  const { data, isLoading } = useNextMatch();

  if (isLoading) return <Skeleton style={{ marginTop: "10px" }} height={180} />;

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
