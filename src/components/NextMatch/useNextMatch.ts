import { useQuery } from "@tanstack/react-query";
import { LastNextEventType } from "../../api/url";
import url from "../../api/url";

const useNextMatch = () =>
  useQuery<LastNextEventType>({
    queryKey: ["next match"],
    queryFn: () => url.then((res) => res.data.next_event),
  });

export default useNextMatch;
