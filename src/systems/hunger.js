export function createHungerSystem({
  hungerPerHour,
  hpLossPerHourAtMaxHunger,
}) {
  return {
    onTimePassed(state, hours) {
      state.player.hunger = state.player.hunger + hungerPerHour * hours;

      // max hunger can be 100 and when we reach the limit - decrease player's HP
      if (state.player.hunger > 100) {
        const looseHp =
          ((state.player.hunger - 100) / hungerPerHour) *
          hpLossPerHourAtMaxHunger;

        state.player.hp = state.player.hp - looseHp;

        state.player.hunger = 100;
      }
    },
  };
}
