import { reactive, computed } from "vue";

const state = {
  dice: 0,
  rolls: [],
};

const actions = {
  roll() {
    sixDiceStore.dice = Math.floor(Math.random() * Math.floor(5)) + 1;
    sixDiceStore.rolls.unshift(sixDiceStore.dice);
  },
  reset() {
    sixDiceStore.dice = 0;
    sixDiceStore.rolls = [];
  },
};

const getters = {
  total: computed(() => {
    let temp = 0;
    sixDiceStore.rolls.forEach((roll) => {
      temp += roll;
    });
    return temp;
  }),
  count: computed(() => {
    return sixDiceStore.rolls.length;
  }),
};

export const sixDiceStore = reactive({
  ...state,
  ...actions,
  ...getters,
});
