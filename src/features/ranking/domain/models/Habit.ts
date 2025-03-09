import type { HabitCheck } from "./HabitCheck";
import type { HabitParticipant } from "./HabitParticipant";
import type { Task } from "./Task";

type SharedHabitProperties = {
  id: string;
  name: string;
  description?: string;
  owner: HabitParticipant;
  createdAt: string;
  participants: HabitParticipant[];
  checks: HabitCheck[];
};

type SingleHabit = SharedHabitProperties & {
  type: "single";
};

type MultiHabit = SharedHabitProperties & {
  type: "multi";
  tasks: Task[];
};

type Habit = SingleHabit | MultiHabit;

export { Habit, SingleHabit, MultiHabit };
