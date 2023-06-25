import { EventDetailType } from "../components/Event/useEvent";
import { AttendeeType } from "../components/Players/usePlayers";
import { ProfileType } from "../components/Profile/useProfile";
import apiClient from "./api-client";

export interface TeamType {
  score: number | null;
  name: string;
}

export interface LastNextEventType {
  left_team: TeamType;
  right_team: TeamType;
}

interface EventType {
  event_detail: EventDetailType;
  attendees: AttendeeType[];
  profile: ProfileType;
  last_event: LastNextEventType;
  next_event: LastNextEventType;
}

const url = apiClient.get<EventType>("/frontendInterview");

export default url;
