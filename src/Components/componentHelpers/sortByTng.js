module.exports.compare = (a,b) => {
  if (a.Tng > b.Tng)
    return -1;
  if (a.Tng < b.Tng)
    return 1;
  return 0;
}
