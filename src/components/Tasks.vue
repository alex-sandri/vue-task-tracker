<template>
  <Task
    v-for="task in tasks"
    :task="task"
    :key="task.id"
    @task-reminder-toggle="$emit('task-reminder-toggle', task)"
    @task-delete="$emit('task-delete', task.id)"
  >
  </Task>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

import Task from "./Task.vue";

@Options({
  components: {
    Task,
  },
  emits: ["task-reminder-toggle", "task-delete"],
})
export default class Tasks extends Vue {
  @Prop()
  tasks!: any[];
}
</script>
