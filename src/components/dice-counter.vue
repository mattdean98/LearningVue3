<template>
  <p>Count is {{ count }}</p>
</template>

<script>
import { reactive, ref, computed, toRefs } from "vue";
import { sixDiceStore } from "../store/sixDiceStore";

export default {
  name: "dice-counter",
  data() {
    return sixDiceStore;
  },
};
</script>
