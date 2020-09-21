<template>
  <button @click="sixDiceStore.reset()" class="button is-primary">Reset</button>
  <br />
  <button @click="roll()" class="button is-primary">Roll</button>
  <p>You rolled a {{ sixDiceStore.total }}</p>
  <br />
  <dice-counter />
</template>

<script>
import DiceCounter from "./dice-counter.vue";
import { sixDiceStore } from "../store/sixDiceStore";
import { twentyDiceStore } from "../store/twentyDiceStore";

export default {
  components: {
    DiceCounter,
  },
  data() {
    return { sixDiceStore, twentyDiceStore };
  },
};
</script>
