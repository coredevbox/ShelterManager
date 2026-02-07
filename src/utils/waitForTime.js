export function waitForTime(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
