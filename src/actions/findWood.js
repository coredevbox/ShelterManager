import { waitForTime } from "../utils/waitForTime.js";

export async function findWood(state, world, randGen) {
  // TODO: return after adding UI animations
  //await waitForTime(2000);

  const hoursSpent = randGen.int(1, 1.5);

  world.step(state, hoursSpent);

  const found = randGen.range(2, 4);
  state.player.inventory.wood += found;
}
