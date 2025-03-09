import type { HabitParticipant } from "./HabitParticipant";

type HabitCheck = {
  id: string;
  date: string;
  owner: HabitParticipant;
};

export { HabitCheck };
