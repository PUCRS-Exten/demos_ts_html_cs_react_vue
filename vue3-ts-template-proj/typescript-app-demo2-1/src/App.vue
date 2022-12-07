<script lang="ts">
export default {
  data() {
    return {
      message: "Hello World!",
      count2: "0",
      counter: {
        count1: "0",
      },
    };
  },
};
</script>

<template>
  <h1>{{ message }}</h1>
  <p>Count is: {{ counter.count1 }} e {{ count2 }}</p>
</template>
