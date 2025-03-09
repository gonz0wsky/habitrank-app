import { Habit, SingleHabit } from "../domain/models/Habit";
import { HabitCheck } from "../domain/models/HabitCheck";
import { HabitParticipant } from "../domain/models/HabitParticipant";
import { Task } from "../domain/models/Task";
import { HabitsRepository } from "../domain/repository/HabitsRepository";

const PARTICIPANT_ONE: HabitParticipant = {
  id: "1",
  name: "Alvaro",
};

const PARTICIPANT_TWO: HabitParticipant = {
  id: "2",
  name: "gonz0wsky",
};

const CHECK_ONE: HabitCheck = {
  id: "1",
  date: new Date().toISOString(),
  owner: PARTICIPANT_ONE,
};

const CHECK_TWO: HabitCheck = {
  id: "2",
  date: new Date().toISOString(),
  owner: PARTICIPANT_TWO,
};

const TASK_ONE: Task = {
  id: "1",
  title: "Task 1",
};

const TASK_TWO: Task = {
  id: "2",
  title: "Task 2",
};

const SINGLE_HABIT: SingleHabit = {
  type: "single",
  id: "1",
  name: "Time that I will start working on HabitRank",
  description: "Description 1",
  createdAt: new Date().toISOString(),
  checks: [CHECK_ONE, CHECK_TWO],
  owner: PARTICIPANT_ONE,
  participants: [PARTICIPANT_ONE, PARTICIPANT_TWO],
};

const MULTIPLE_HABIT: Habit = {
  type: "multi",
  id: "2",
  name: "Time that I will start working on HabitRank",
  description: "Description 2",
  createdAt: new Date().toISOString(),
  checks: [CHECK_ONE, CHECK_TWO],
  owner: PARTICIPANT_ONE,
  participants: [PARTICIPANT_ONE, PARTICIPANT_TWO],
  tasks: [TASK_ONE, TASK_TWO],
};

const getJoinedHabits = async (): Promise<Habit[]> => {
  return [SINGLE_HABIT, MULTIPLE_HABIT];
};

const habitsRepositoryMockImpl: HabitsRepository = {
  getJoinedHabits,
};

export { habitsRepositoryMockImpl };
