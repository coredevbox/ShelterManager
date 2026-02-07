function createHeater() {
  let fuel = 5;
  let efficiency = 1.2;

  return {
    tick() {
      if (fuel <= 0) return 0;
      fuel--;
      return Math.round(5 * efficiency);
    },
    addFuel(n) {
      fuel += n;
    },
  };
}
