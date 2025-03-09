import { Habit } from "../domain/models/Habit";
import { HabitsRepository } from "../domain/repository/HabitsRepository";

const getJoinedHabits = async (
  repository: HabitsRepository,
  page: number
): Promise<Habit[]> => {
  const habits = await repository.getJoinedHabits(page);
  return habits;
};

export { getJoinedHabits };
