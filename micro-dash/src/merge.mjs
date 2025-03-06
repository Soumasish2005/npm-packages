export function merge(target, ...sources) {

    if (typeof target !== "object" || target === null) {
      throw new Error("Target must be an object");
    }
  
    sources.forEach(source => {
      if (typeof source !== "object" || source === null) {
        return;
      }
      
      Object.keys(source).forEach(key => {
        const targetValue = target[key];
        const sourceValue = source[key];
  
        if (
          typeof sourceValue === "object" && 
          sourceValue !== null && 
          !Array.isArray(sourceValue)
        ) {
          target[key] = merge(
            typeof targetValue === "object" && targetValue !== null ? targetValue : {}, 
            sourceValue
          );
        } else {
          target[key] = sourceValue;
        }
      });
    });
  
    return target;
}