export type TeamType = {
  score: number | null;
  name: string;
};

export type LastNextEventType = { left_team: TeamType; right_team: TeamType };

export type EventType = {
  last_event: LastNextEventType;
  next_event: LastNextEventType;
};
