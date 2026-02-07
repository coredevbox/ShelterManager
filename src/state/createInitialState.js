export function createInitialState() {
  return {
    time: { day: 1, hour: 1 },
    world: {
      outsideTemp: -5,
      shelterTemp: 5,
      weather: "clear", // rain
    },
    player: {
      hp: 100,
      hunger: 0,
      fatigue: 0,
      inventory: {
        food: 3,
        wood: 3,
      },
    },
    campfire: {
      intensity: 0,
    },
  };
}
