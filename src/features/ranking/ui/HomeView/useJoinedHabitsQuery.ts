import { getJoinedHabits } from "@features/ranking/application/getJoinedHabits";
import { habitsRepositoryMockImpl } from "@features/ranking/data/habitsRepositoryMockImpl";
import { Habit } from "@features/ranking/domain/models/Habit";
import { useInfiniteQuery } from "@tanstack/react-query";

type Page = {
  data: Habit[];
  page: number;
};

export function useJoinedHabitsQuery() {
  const { data, isLoading, isError, fetchNextPage, refetch } = useInfiniteQuery<
    Page,
    Error
  >({
    queryKey: ["joined-habits"],
    queryFn: async ({ pageParam = 1 }) => {
      const data = await getJoinedHabits(
        habitsRepositoryMockImpl,
        pageParam as number
      );

      return {
        data,
        page: pageParam as number,
      };
    },
    initialPageParam: 1,
    getNextPageParam: ({ page }) => page + 1,
    getPreviousPageParam: ({ page }) => page - 1,
  });

  return {
    data: data?.pages.flatMap((page) => page.data) ?? [],
    isLoading,
    isError,
    fetchNextPage,
    refetch,
  };
}
