/**
 * Calcula a área e a retorna caso seja maior que 20.
 * @param {number} largura
 * @param {number} altura
 */
function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m2.`);
    return [area, false];
  } else {
    return area;
  }
}

//4
console.log(area(2, 2));

//NaN
console.log(area(2));

//NaN
console.log(area());

//6
console.log(area(2, 3, 15, 20, 50));

//undefined
console.log(area(5, 5));
