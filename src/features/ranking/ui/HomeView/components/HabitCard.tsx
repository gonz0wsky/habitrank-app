import { atoms as a, useTheme } from "@core/layout";
import { Habit } from "@features/ranking/domain/models/Habit";
import { useLingui } from "@lingui/react";
import Avatar from "@shared/ui/component/Avatar";
import { FC, memo, useMemo } from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

type HabitCardInfoProps = {
  title: string;
};

const HabitCardInfo: FC<HabitCardInfoProps> = ({ title }) => {
  return (
    <View style={[{ minHeight: 100 }, a.px_md, a.py_sm]}>
      <Text numberOfLines={3} style={[a.font_bold, a.pr_5xl]}>
        {title}
      </Text>
    </View>
  );
};

type HabitCardBottomItemProps = {
  avatarText: string;
  text: string;
};

const HabitCardBottomItem: FC<HabitCardBottomItemProps> = ({
  avatarText,
  text,
}) => {
  const t = useTheme();

  return (
    <View style={[{ flex: 1 / 3 }, a.flex_row, a.align_center]}>
      <Avatar text={avatarText} size={24} />
      <Text
        numberOfLines={1}
        style={[
          a.flex_1,
          a.ml_sm,
          a.font_caption,
          t.atoms.habit_card.bottom.text,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

type HabitCardBottomRankingProps = {
  habit: Habit;
};

const HabitCardBottomRanking: FC<HabitCardBottomRankingProps> = ({ habit }) => {
  return habit.checks.map((check, index) => (
    <HabitCardBottomItem
      key={check.id}
      avatarText={`${index + 1}`}
      text={check.owner.name}
    />
  ));
};

type HabitCardBottomCompletedTasksProps = {
  habit: Habit;
};

const HabitCardBottomCompletedTasks: FC<HabitCardBottomCompletedTasksProps> = ({
  habit,
}) => {
  const { i18n } = useLingui();

  if (habit.type !== "multi") {
    return null;
  }

  return habit.checks.map((check) => (
    <HabitCardBottomItem
      key={check.id}
      avatarText={check.owner.name}
      text={`${check.count} / ${habit.tasks.length} ${i18n.t("tasks")}`}
    />
  ));
};

type HabitCardParticipantsProps = {
  habit: Habit;
};

const HabitCardParticipants: FC<HabitCardParticipantsProps> = ({ habit }) => {
  const t = useTheme();

  const content = useMemo(() => {
    if (habit.type === "single") {
      return <HabitCardBottomRanking habit={habit} />;
    }
    if (habit.type === "multi") {
      return <HabitCardBottomCompletedTasks habit={habit} />;
    }
    return null;
  }, [habit]);

  return (
    <View
      style={[
        a.flex_row,
        a.gap_lg,
        a.px_md,
        a.py_sm,
        t.atoms.habit_card.bottom.background,
      ]}
    >
      {content}
    </View>
  );
};

type HabitCardProps = {
  habit: Habit;
  onPress: (id: string) => void;
};

const HabitCard: FC<HabitCardProps> = ({ habit, onPress }) => {
  const t = useTheme();

  const handleOnPress = () => {
    onPress(habit.id);
  };

  return (
    <RectButton
      onPress={handleOnPress}
      style={[t.atoms.habit_card.background, a.rounded_sm, a.overflow_hidden]}
    >
      <HabitCardInfo title={habit.name} />
      <HabitCardParticipants habit={habit} />
    </RectButton>
  );
};

export default memo(HabitCard);
export { HabitCardProps };
