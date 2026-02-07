import { waitForTime } from "../utils/waitForTime.js";

export async function findFood(state, world, randGen) {
  // TODO: return after adding UI animations
  //await waitForTime(2000);

  const hoursSpent = randGen.int(2, 3);

  world.step(state, hoursSpent);

  const found = randGen.range(4, 8);
  state.player.inventory.food += found;
}
