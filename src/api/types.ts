export type TeamType = {
  score: number | null;
  name: string;
};

export interface LastNextEventType {
  left_team: TeamType;
  right_team: TeamType;
}
