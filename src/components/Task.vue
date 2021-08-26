<template>
  <div
    :class="['task', task.reminder ? 'reminder' : '']"
    @dblclick="$emit('task-reminder-toggle')"
  >
    <h3>
      {{ task.text }}
      <i @click="onDelete" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class Task extends Vue {
  @Prop()
  task: any;

  onDelete(): void {
    if (confirm("Are you sure?")) {
      this.$emit("task-delete");
    }
  }
}
</script>

<style lang="scss" scoped>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &.reminder {
    border-left: 5px solid green;
  }
}
</style>
