<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      v-if="isHomePage"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
      @button-click="onAddTaskButtonClick"
    ></Button>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

import Button from "./Button.vue";

@Options({
  components: {
    Button,
  },
  computed: {
    isHomePage() {
      return this.$route.path === "/";
    },
  },
})
export default class Header extends Vue {
  @Prop({ default: "Task Tracker" })
  title!: string;

  showAddTask = false;

  onAddTaskButtonClick(): void {
    this.showAddTask = !this.showAddTask;

    this.$emit("add-task-toggle");
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
