export function createFatigueSystem({
  fatiguePerHour,
  hpLossPerHourAtMaxFatigue,
}) {
  return {
    onTimePassed(state, hours) {
      state.player.fatigue = state.player.fatigue + fatiguePerHour * hours;

      // max fatigue can be 100 and when we reach the limit - decrease player's HP
      if (state.player.fatigue > 100) {
        const looseHp =
          ((state.player.fatigue - 100) / fatiguePerHour) *
          hpLossPerHourAtMaxFatigue;

        state.player.hp = state.player.hp - looseHp;

        state.player.fatigue = 100;
      }
    },
  };
}
