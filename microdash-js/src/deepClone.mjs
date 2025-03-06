export function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
      return obj; // Returns primitive values as is
    }
  
    if (Array.isArray(obj)) {
      return obj.map(deepClone);
    }
  
    const clonedObj = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
  
    return clonedObj;
  }
  