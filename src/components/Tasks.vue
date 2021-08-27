<template>
  <Task v-for="task in tasks" :task="task" :key="task.id"> </Task>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

import Task from "./Task.vue";

@Options({
  components: {
    Task,
  },
})
export default class Tasks extends Vue {
  @Prop()
  tasks!: any[];
}
</script>
