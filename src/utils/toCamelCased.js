const toCamelCased = (myString) => myString.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

export default toCamelCased;
