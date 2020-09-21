import { reactive, computed } from "vue";

const state = {
  dice: 0,
  rolls: [],
};

const actions = {
  roll() {
    twentyDiceStore.dice = Math.floor(Math.random() * Math.floor(19)) + 1;
    twentyDiceStore.rolls.unshift(twentyDiceStore.dice);
  },
  reset() {
    twentyDiceStore.dice = 0;
    twentyDiceStore.rolls = [];
  },
};

const getters = {
  total: computed(() => {
    let temp = 0;
    twentyDiceStore.rolls.forEach((roll) => {
      temp += roll;
    });
    return temp;
  }),
  count: computed(() => {
    return twentyDiceStore.rolls.length;
  }),
};

export const twentyDiceStore = reactive({
  ...state,
  ...actions,
  ...getters,
});
