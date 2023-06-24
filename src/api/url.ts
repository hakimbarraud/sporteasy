import { EventDetailType } from "../components/Event/useEvent";
import { AttendeeType } from "../components/Players/usePlayers";
import apiClient from "./api-client";

interface EventType {
  event_detail: EventDetailType;
  attendees: AttendeeType[];
}

const url = apiClient.get<EventType>("/frontendInterview");

export default url;
