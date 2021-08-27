import { MutationTree } from "vuex";
import { MutationTypes } from "./mutations.types";
import { State } from "./state";

export type Mutations<S = State> = {
  [MutationTypes.SET_TASKS](state: S, payload: any[]): void;
  [MutationTypes.ADD_TASK](state: S, payload: any): void;
  [MutationTypes.TOGGLE_TASK_REMINDER](state: S, payload: any): void;
  [MutationTypes.DELETE_TASK](state: S, payload: any): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_TASKS](state, payload) {
    state.tasks = payload;
  },
  [MutationTypes.ADD_TASK](state, payload) {
    state.tasks = [...state.tasks, payload];
  },
  [MutationTypes.TOGGLE_TASK_REMINDER](state, payload) {
    state.tasks = state.tasks.map((task) => {
      if (task.id === payload.id) {
        task.reminder = !task.reminder;
      }

      return task;
    });
  },
  [MutationTypes.DELETE_TASK](state, payload) {
    state.tasks = state.tasks.filter((task) => task.id !== payload.id);
  },
};
