/* eslint-disable */
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      text: "",
    };
  },
});
</script>

<template>
  <input v-model="text" placeholder="Type here">
  <p>{{ text }}</p>
</template>
