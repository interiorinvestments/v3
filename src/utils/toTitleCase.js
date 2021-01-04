const toTitleCase = (slug) => {
  const words = slug.split('-');
  return words.map((word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ');
};

export default toTitleCase;
