import useLastMatch from "./useLastMatch";
import Match from "../Match/Match";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LastMatch = () => {
  const { data, isLoading } = useLastMatch();

  if (isLoading)
    return (
      <Skeleton
        style={{ marginTop: "10px", borderRadius: "6px" }}
        height={180}
      />
    );

  return (
    <Match
      title="Dernier Match"
      leftTeamName={data?.left_team.name}
      leftTeamScore={data?.left_team.score}
      rightTeamName={data?.right_team.name}
      rightTeamScore={data?.right_team.score}
      redColor="red-score"
      greenColor="green-score"
    />
  );
};

export default LastMatch;
