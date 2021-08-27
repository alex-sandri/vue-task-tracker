import { createStore } from "vuex";
import {
  store as tasks,
  TasksStore,
  State as TasksState,
} from "./modules/tasks";

export type RootState = {
  tasks: TasksState;
};

export type Store = TasksStore<Pick<RootState, "tasks">>;

const store = createStore({
  modules: {
    tasks,
  },
});

export function useStore(): Store {
  return store as Store;
}

export default store;
