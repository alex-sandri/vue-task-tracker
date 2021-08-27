<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script lang="ts">
import { ActionTypes } from "@/store/modules/tasks/actions.types";
import { Vue } from "vue-class-component";

export default class AddTask extends Vue {
  text = "";
  day = "";
  reminder = false;

  onSubmit(e: Event): void {
    e.preventDefault();

    if (this.text.trim().length === 0) {
      return alert("Please add a task");
    }

    const task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.$store.dispatch(ActionTypes.ADD_TASK, task);

    this.text = this.day = "";
    this.reminder = false;
  }
}
</script>

<style lang="scss" scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;

  label {
    display: block;
  }

  input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
  }

  &-check {
    display: flex;
    align-items: center;
    justify-content: space-between;

    label {
      flex: 1;
    }

    input {
      flex: 2;
      height: 20px;
    }
  }
}
</style>
