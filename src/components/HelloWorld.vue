<template>
  <button @click="reset()" class="button is-primary">Reset</button><br />
  <button @click="roll()" class="button is-primary">Roll</button>
  <p>You rolled a {{ total }}</p>
  <br />
  <dice-counter />
</template>

<script>
import DiceCounter from "./dice-counter.vue";
import { store } from "../store/store";

export default {
  components: {
    DiceCounter,
  },
  data() {
    return store;
  },
};
</script>
