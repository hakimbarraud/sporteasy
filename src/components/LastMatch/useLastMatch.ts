import { useQuery } from "@tanstack/react-query";
import { LastNextEventType } from "../../api/url";
import url from "../../api/url";

const useLastMatch = () =>
  useQuery<LastNextEventType>({
    queryKey: ["last match"],
    queryFn: () => url.then((res) => res.data.last_event),
  });

export default useLastMatch;
