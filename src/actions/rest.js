export function createRest({ state, world, randGen }) {}

export async function findWood(state, world, randGen) {
  // TODO: return after adding UI animations
  //await waitForTime(2000);

  const hoursSpent = randGen.int(6, 9);

  world.step(state, hoursSpent);

  const found = randGen.range(2, 4);
  state.player.inventory.wood += found;
}
