import { Habit } from "../models/Habit";

interface HabitsRepository {
  getJoinedHabits(page: number): Promise<Habit[]>;
}

export { HabitsRepository };
