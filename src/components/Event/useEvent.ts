import { useQuery } from "@tanstack/react-query";
import url from "../../api/url";
import { TeamType } from "../../api/url";

export interface EventDetailType {
  date: string;
  type: string;
  start_at: string;
  end_at: string;
  left_team: TeamType;
  right_team: TeamType;
}

const useEvent = () =>
  useQuery<EventDetailType>({
    queryKey: ["match"],
    queryFn: () => url.then((res) => res.data.event_detail),
  });

export default useEvent;
