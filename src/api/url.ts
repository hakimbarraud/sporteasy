import { EventDetailType } from "../components/Event/useEvent";
import { AttendeeType } from "../components/Players/usePlayers";
import { ProfileType } from "../components/Profile/useProfile";
import apiClient from "./api-client";
import { LastNextEventType } from "./types";

interface EventType {
  event_detail: EventDetailType;
  attendees: AttendeeType[];
  profile: ProfileType;
  last_event: LastNextEventType;
}

const url = apiClient.get<EventType>("/frontendInterview");

export default url;
