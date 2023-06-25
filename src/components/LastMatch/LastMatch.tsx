import React from "react";
import useLastMatch from "./useLastMatch";

const LastMatch = () => {
  const { data } = useLastMatch();
  console.log(data);
  return <div>LastMatch</div>;
};

export default LastMatch;
