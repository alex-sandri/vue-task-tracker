<template>
  <button
    class="btn"
    :style="{ backgroundColor: color }"
    @click="$emit('button-click')"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class Button extends Vue {
  @Prop()
  text!: string;

  @Prop()
  color!: string;
}
</script>
