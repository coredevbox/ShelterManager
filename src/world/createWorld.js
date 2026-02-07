export function createWorld({ systems }) {
  return {
    step(state, hours) {
      advanceClock(state, hours);

      for (const system of systems) {
        system.onTimePassed(state, hours);
      }
    },
  };
}

function advanceClock(state, hours) {
  let total = state.time.hour + hours;
  state.time.day += Math.floor(total / 24);
  state.time.hour = total % 24;
}
