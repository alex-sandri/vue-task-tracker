import { ActionTree, ActionContext } from "vuex";
import { State } from "./state";
import { Mutations } from "./mutations";
import { ActionTypes } from "./actions.types";
import { MutationTypes } from "./mutations.types";
import { RootState } from "@/store";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export interface Actions {
  [ActionTypes.FETCH_TASKS](
    { commit }: AugmentedActionContext,
    payload: any
  ): Promise<any[]>;
}

export const actions: ActionTree<State, RootState> & Actions = {
  async [ActionTypes.FETCH_TASKS]({ commit }) {
    const response = await fetch("api/tasks");
    const tasks = await response.json();

    commit(MutationTypes.SET_TASKS, tasks);

    return tasks;
  },
};
