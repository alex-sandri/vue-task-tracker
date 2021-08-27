<template>
  <AddTask v-if="showAddTask" @task-add="onTaskAdd"></AddTask>
  <Tasks
    :tasks="tasks"
    @task-reminder-toggle="onTaskReminderToggle"
    @task-delete="onTaskDelete"
  >
  </Tasks>
</template>

<script lang="ts">
import { mapActions } from "vuex";
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

import AddTask from "../components/AddTask.vue";
import Tasks from "../components/Tasks.vue";
import { ActionTypes as TaskActionTypes } from "@/store/modules/tasks/actions.types";

@Options({
  components: {
    AddTask,
    Tasks,
  },
})
export default class Home extends Vue {
  @Prop()
  showAddTask!: boolean;

  tasks = this.$store.state.tasks;

  fetchTasks = mapActions([TaskActionTypes.FETCH_TASKS]).FETCH_TASKS;

  created() {
    (this as any).fetchTasks();
  }
}
</script>
