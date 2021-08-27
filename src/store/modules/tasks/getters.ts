import { RootState } from "@/store";
import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
  getTasks(state: State): any[];
};

export const getters: GetterTree<State, RootState> & Getters = {
  getTasks: (state) => {
    return state.tasks;
  },
};
