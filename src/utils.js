export const truncatePeragraph = (str, limit) => {
  let newperagraph = str.split("");
  newperagraph.length = limit;

  return newperagraph.join("") + "...";
};
