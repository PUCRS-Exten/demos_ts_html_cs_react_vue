<script lang="ts">
export default {
  data() {
    return {
      titleClass: "title",
      outro: "geral",
    };
  },
};
</script>

<template>
  <h1 :class="titleClass" :geral="outro">Make me red</h1>
</template>

<style>
.title {
  color: red;
}
</style>
