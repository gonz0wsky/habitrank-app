import type { HabitParticipant } from "./HabitParticipant";

type SharedHabitCheckProperties = {
  id: string;
  owner: HabitParticipant;
};

type HabitCheckTimestamp = {
  type: "timestamp";
  date: string;
} & SharedHabitCheckProperties;

type HabitCheckCount = {
  type: "count";
  count: number;
} & SharedHabitCheckProperties;

type HabitCheck = HabitCheckTimestamp | HabitCheckCount;

export { HabitCheck, HabitCheckTimestamp, HabitCheckCount };
