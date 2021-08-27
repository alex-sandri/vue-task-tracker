import { MutationTree } from "vuex";
import { MutationTypes } from "./mutations.types";
import { State } from "./state";

export type Mutations<S = State> = {
  [MutationTypes.SET_TASKS](state: S, payload: any[]): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_TASKS](state, payload) {
    state.tasks = payload;
  },
};
