import { EventDetailType } from "../components/Header/useMatch";
import apiClient from "./api-client";

interface EventType {
  event_detail: EventDetailType;
}

const url = apiClient.get<EventType>("/frontendInterview");

export default url;
