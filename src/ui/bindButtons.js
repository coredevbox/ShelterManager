import { renderStatus } from "../ui/statusView.js";
import { findFood } from "../actions/findFood.js";
import { findWood } from "../actions/findWood.js";

export function bindButtons({ state, world, randGen, render }) {
  document.getElementById("btn-status").addEventListener("click", () => {
    renderStatus(state);
  });

  document.getElementById("btn-find-food").onclick = async () => {
    await findFood(state, world, randGen);
    render(state);
  };

  document.getElementById("btn-find-wood").onclick = async () => {
    await findWood(state, world, randGen);
    render(state);
  };
}
