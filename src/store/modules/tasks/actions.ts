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
  ): Promise<void>;
  [ActionTypes.ADD_TASK](
    { commit }: AugmentedActionContext,
    payload: any
  ): Promise<any>;
  [ActionTypes.TOGGLE_TASK_REMINDER](
    { commit }: AugmentedActionContext,
    payload: any
  ): Promise<any>;
  [ActionTypes.DELETE_TASK](
    { commit }: AugmentedActionContext,
    payload: any
  ): Promise<void>;
}

export const actions: ActionTree<State, RootState> & Actions = {
  async [ActionTypes.FETCH_TASKS]({ commit }) {
    const response = await fetch("api/tasks");
    const tasks = await response.json();

    commit(MutationTypes.SET_TASKS, tasks);

    return tasks;
  },
  async [ActionTypes.ADD_TASK]({ commit }, task) {
    const response = await fetch("api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      return alert("Error creating task");
    }

    commit(MutationTypes.ADD_TASK, task);
  },
  async [ActionTypes.TOGGLE_TASK_REMINDER]({ commit }, task) {
    const response = await fetch(`api/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reminder: !task.reminder,
      }),
    });

    if (!response.ok) {
      return alert("Error updating task");
    }

    commit(MutationTypes.TOGGLE_TASK_REMINDER, task);
  },
  async [ActionTypes.DELETE_TASK]({ commit }, task) {
    const response = await fetch(`api/tasks/${task.id}`, { method: "DELETE" });

    if (!response.ok) {
      return alert("Error deleting task");
    }

    commit(MutationTypes.DELETE_TASK, task);
  },
};
