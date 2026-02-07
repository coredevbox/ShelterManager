export function createRandGen(seed = Date.now) {
  let s = seed >>> 0;

  // produces the next pseudo-random value in 0.0 .. 1.0 range
  function next() {
    s = (1664525 * s + 1013904223) >>> 0;
    return s / 2 ** 32;
  }

  return {
    float() {
      return next();
    },
    int(min, max) {
      return Math.floor(next() * (max - min + 1)) + min;
    },
    range(min, max) {
      return next() * (max - min) + min;
    },
  };
}
