<template>
  <div class="container">
    <Header @add-task-toggle="showAddTask = !showAddTask"></Header>
    <router-view :showAddTask="showAddTask"></router-view>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

@Options({
  components: {
    Footer,
    Header,
  },
})
export default class App extends Vue {
  showAddTask = false;
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.98);
  }

  &-block {
    display: block;
    width: 100%;
  }
}
</style>
