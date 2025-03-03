import type { SystemTheme } from "@core/layout/utils/useColorModeTheme";
import type { Language } from "@core/locale/locales/types";
import type { StateCreator } from "zustand";
import { sliceResetFns } from "./clearStorage";

export interface SystemSlice {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: SystemTheme;
  setTheme: (theme: SystemTheme) => void;
}

const initialState: Pick<SystemSlice, "language" | "theme"> = {
  language: "en",
  theme: "system",
};

const createSystemSlice: StateCreator<SystemSlice> = (set) => {
  sliceResetFns.add(() => set(() => initialState));

  return {
    ...initialState,
    setLanguage: (language: Language) => set(() => ({ language })),
    setTheme: (theme: SystemTheme) => set(() => ({ theme })),
  };
};

export default createSystemSlice;
