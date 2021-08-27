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
import { mapGetters, mapActions } from "vuex";
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

import AddTask from "../components/AddTask.vue";
import Tasks from "../components/Tasks.vue";

@Options({
  components: {
    AddTask,
    Tasks,
  },
})
export default class Home extends Vue {
  @Prop()
  showAddTask!: boolean;

  tasks: any[] = [];

  async onTaskAdd(task: any): Promise<void> {
    const response = await fetch("api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    this.tasks = [...this.tasks, await response.json()];
  }

  async onTaskReminderToggle(taskToToggle: any): Promise<void> {
    const response = await fetch(`api/tasks/${taskToToggle.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reminder: !taskToToggle.reminder,
      }),
    });

    if (!response.ok) {
      return alert("Error updating task");
    }

    this.tasks = this.tasks.map((task) => {
      if (task.id === taskToToggle.id) {
        task.reminder = !task.reminder;
      }

      return task;
    });
  }

  async onTaskDelete(id: number): Promise<void> {
    const response = await fetch(`api/tasks/${id}`, { method: "DELETE" });

    if (!response.ok) {
      return alert("Error deleting task");
    }

    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
</script>
