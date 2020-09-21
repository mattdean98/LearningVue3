import { reactive, computed } from "vue";

export const store = reactive({
  dice: 0,
  rolls: [],
  total: computed(() => {
    let temp = 0;
    store.rolls.forEach((roll) => {
      temp += roll;
    });
    return temp;
  }),
  count: computed(() => {
    return store.rolls.length;
  }),
  roll() {
    store.dice = Math.floor(Math.random() * Math.floor(5)) + 1;
    store.rolls.unshift(store.dice);
  },
  reset() {
    store.dice = 0;
    store.rolls = [];
  },
});
