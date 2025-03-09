import type { HabitCheckCount, HabitCheckTimestamp } from "./HabitCheck";
import type { HabitParticipant } from "./HabitParticipant";
import type { Task } from "./Task";

type SharedHabitProperties = {
  id: string;
  name: string;
  description?: string;
  owner: HabitParticipant;
  createdAt: string;
  participants: HabitParticipant[];
};

type SingleHabit = SharedHabitProperties & {
  type: "single";
  checks: HabitCheckTimestamp[];
};

type MultiHabit = SharedHabitProperties & {
  type: "multi";
  tasks: Task[];
  checks: HabitCheckCount[];
};

type Habit = SingleHabit | MultiHabit;

export { Habit, SingleHabit, MultiHabit };
