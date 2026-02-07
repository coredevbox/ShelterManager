export function renderStatus(state) {
  const el = document.getElementById("status");

  const day = state.time.day;
  const hour = state.time.hour;

  const outside = state.world.outsideTemp;
  const shelter = state.world.shelterTemp;
  const weather = state.world.weather;

  const hp = state.player.hp;
  const hunger = state.player.hunger;
  const fatigue = state.player.fatigue ?? 0;

  const food = state.player.inventory.food;
  const wood = state.player.inventory.wood;

  // tiny helpers for “dot” colors
  const tempDot = (t) =>
    t <= 0 ? "dot--cold" : t >= 25 ? "dot--hot" : "dot--good";
  const hpDot = (v) =>
    v >= 70 ? "dot--good" : v >= 35 ? "dot--warn" : "dot--bad";
  const hungerDot = (v) =>
    v <= 30 ? "dot--good" : v <= 70 ? "dot--warn" : "dot--bad";
  const fatigueDot = (v) =>
    v <= 30 ? "dot--good" : v <= 70 ? "dot--warn" : "dot--bad";

  el.innerHTML = `
    <div class="status-grid">
      <div class="card">
        <div class="card__title">Time</div>
        <div class="card__value">Day ${day}, Hour ${hour}</div>
        <div class="kv"><span>Weather</span>
          <span class="badge"><i class="dot dot--good"></i>${weather}</span>
        </div>
      </div>

      <div class="card">
        <div class="card__title">Temperature</div>
        <div class="kv">
          <span>Outside</span>
          <span class="badge"><i class="dot ${tempDot(outside)}"></i>${outside.toFixed(1)}°C</span>
        </div>
        <div class="kv">
          <span>Shelter</span>
          <span class="badge"><i class="dot ${tempDot(shelter)}"></i>${shelter.toFixed(1)}°C</span>
        </div>
      </div>

      <div class="card">
        <div class="card__title">Vitals</div>
        <div class="kv">
          <span>HP</span>
          <span class="badge"><i class="dot ${hpDot(hp)}"></i>${hp.toFixed(0)}</span>
        </div>
        <div class="kv">
          <span>Hunger</span>
          <span class="badge"><i class="dot ${hungerDot(hunger)}"></i>${hunger.toFixed(0)}</span>
        </div>
        <div class="kv">
          <span>Fatigue</span>
          <span class="badge"><i class="dot ${fatigueDot(fatigue)}"></i>${fatigue.toFixed(0)}</span>
        </div>
      </div>

      <div class="card">
        <div class="card__title">Inventory</div>
        <div class="kv">
          <span>Food</span>
          <span class="badge"><i class="dot dot--good"></i>${food.toFixed(2)}</span>
        </div>
        <div class="kv">
          <span>Firewood</span>
          <span class="badge"><i class="dot dot--good"></i>${wood.toFixed(2)}</span>
        </div>
      </div>
    </div>
  `;
}
