// time-converter/index.js

const timeUnits = {
    s: 1000, // 1 second = 1000 ms
    m: 60000, // 1 minute = 60 * 1000 ms
    h: 3600000, // 1 hour = 60 * 60 * 1000 ms
    d: 86400000, // 1 day = 24 * 60 * 60 * 1000 ms
  };
  
  /**
   * Converts a time string (e.g., "2h", "30m", "45s") to milliseconds.
   * @param {string} input - The time string (e.g., "2h", "30m").
   * @returns {number} The equivalent milliseconds.
   */
  function toMilliseconds(input) {
    const match = input.match(/^(\d+(\.\d+)?)(s|m|h|d)$/);
    if (!match) throw new Error("Invalid time format. Use '1s', '2m', '3h', '1.5d'.");
  
    const [, value, , unit] = match;
    return parseFloat(value) * timeUnits[unit];
  }
  
  /**
   * Converts milliseconds to a human-readable format.
   * @param {number} ms - The number of milliseconds.
   * @returns {string} The formatted time string.
   */
  function fromMilliseconds(ms) {
    if (ms >= timeUnits.d) return (ms / timeUnits.d) + " d";
    if (ms >= timeUnits.h) return (ms / timeUnits.h) + " h";
    if (ms >= timeUnits.m) return (ms / timeUnits.m) + " m";
    if (ms >= timeUnits.s) return (ms / timeUnits.s) + " s";
    return (ms + " ms");
  }
  
  // Export the functions
  module.exports = { toMilliseconds, fromMilliseconds };
  