import { useQuery } from "@tanstack/react-query";
import url from "../../api/url";

export interface AttendeeType {
  photo_url: string;
  last_name: string;
  first_name: string;
  email: string;
  status: "present" | "absent";
}

const usePlayers = () =>
  useQuery<AttendeeType[]>({
    queryKey: ["players"],
    queryFn: () => url.then((res) => res.data.attendees),
  });

export default usePlayers;
