const jurosSimples = (ci, tx, tmp) => {
  const result = ci + ci * tx * tmp;
  return result.toFixed(2);
};
const jurosCompostos = (cp, taxa, tempo) => {
  const result = cp * (1 + taxa) ** tempo;
  return result.toFixed(2);
};

module.exports = { jurosSimples, jurosCompostos };
