<template>
  <p>Count is {{ count }}</p>
</template>

<script>
import { reactive, ref, computed, toRefs } from "vue";
import { store } from "../store/store";
export default {
  name: "dice-counter",
  data() {
    return store;
  },
};
</script>
