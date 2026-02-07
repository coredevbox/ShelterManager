import { createInitialState } from "./state/createInitialState.js";
import { createWorld } from "./world/createWorld.js";
import { createRandGen } from "./systems/randGen.js";
import { createHungerSystem } from "./systems/hunger.js";
import { createFatigueSystem } from "./systems/fatigue.js";
//import { createCampfireSystem } from "./systems/campfire.js";
//import { createWeatherSystem } from "./systems/weather.js";

import { renderStatus } from "./ui/statusView.js";
import { bindButtons } from "./ui/bindButtons.js";

// Inital worlds' state
const state = createInitialState();

// Pseudo-random generator
const randGen = createRandGen();

// Systems
const hunger = createHungerSystem({
  hungerPerHour: 3,
  hpLossPerHourAtMaxHunger: 2,
});

const fatigue = createFatigueSystem({
  fatiguePerHour: 2,
  hpLossPerHourAtMaxFatigue: 1,
});

// const campfire = createCampfireSystem({
//   woodPerHour: 1,
// });

// const weather = createWeatherSystem(rng);
// System pipeline (ORDER MATTERS)
const systems = [fatigue, hunger];

// Create the World with it's mechanics
const world = createWorld({ systems });

// UI wiring
bindButtons({ state, world, randGen, render: renderStatus });

// Initial render
renderStatus(state);
