import { reactive, computed } from "vue";

const state = {
  dice: 0,
  rolls: [],
};

const actions = {
  roll() {
    store.dice = Math.floor(Math.random() * Math.floor(5)) + 1;
    store.rolls.unshift(store.dice);
  },
  reset() {
    store.dice = 0;
    store.rolls = [];
  },
};

const getters = {
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
};

export const store = reactive({
  ...state,
  ...actions,
  ...getters,
});
