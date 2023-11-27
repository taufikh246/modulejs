function sum(...numbers) {
  return numbers.reduce((prev, curr) => {
    return prev + curr;
  });
}

function binaryToDecimal(binary) {
  let arrBin = binary.split("");
  arrBin = arrBin.map((val) => Number(val));
  const rumus = [128, 64, 32, 16, 8, 4, 2, 1];
  let hasil = 0;
  arrBin.forEach((val, i) => {
    hasil += val * rumus[i];
    console.info(`hasil = ${hasil}`);
  });
  return hasil;
}

console.info(binaryToDecimal("11111111"));
