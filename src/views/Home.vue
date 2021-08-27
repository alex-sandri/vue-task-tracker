<template>
  <AddTask v-if="showAddTask" @task-add="onTaskAdd"></AddTask>
  <Tasks :tasks="tasks"> </Tasks>
</template>

<script lang="ts">
import { mapActions, Store, useStore } from "vuex";
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

import AddTask from "../components/AddTask.vue";
import Tasks from "../components/Tasks.vue";
import { ActionTypes as TaskActionTypes } from "@/store/modules/tasks/actions.types";
import { RootState } from "@/store";

@Options({
  components: {
    AddTask,
    Tasks,
  },
  setup() {
    (this as any).store = useStore();
  },
})
export default class Home extends Vue {
  @Prop()
  showAddTask!: boolean;

  store!: Store<RootState>;

  tasks = this.store.state.tasks;

  fetchTasks = mapActions([TaskActionTypes.FETCH_TASKS]).FETCH_TASKS;

  created() {
    this.fetchTasks();
  }
}
</script>
