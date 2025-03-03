import type { AllNavigatorParamList } from "./params";

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends AllNavigatorParamList {}
  }
}
