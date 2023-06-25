import { useQuery } from "@tanstack/react-query";
import url from "../../api/url";

export interface ProfileType {
  photo_url: string;
  last_name: string;
  first_name: string;
  email: string;
  phone_number: string;
}

const useProfile = () =>
  useQuery<ProfileType>({
    queryKey: ["profile"],
    queryFn: () => url.then((res) => res.data.profile),
  });

export default useProfile;
