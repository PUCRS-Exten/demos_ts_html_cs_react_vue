<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onInput(e: Event) {
      const target = (<HTMLInputElement>e.target);
      this.text = target.value;
   },
  },
});
</script>

<template>
  <input :value="text" @input="onInput" placeholder="Type here">
  <p>{{ text }}</p>
</template>
