export type ProfileType = {
  photo_url: string;
  last_name: string;
  first_name: string;
  email: string;
  phone_number: string;
};

export type TeamType = {
  score: number | null;
  name: string;
};

export type LastNextEventType = { left_team: TeamType; right_team: TeamType };

export type EventType = {
  profile: ProfileType;
  last_event: LastNextEventType;
  next_event: LastNextEventType;
};
