// 2. Method untuk penjumlahan, pengurangan, perkalian, dan pembagian

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("0 tidak bisa dibagi");
  }
  return a / b;
}

//Penggunaan
console.log("Penjumlahan: ", add(10, 5));
console.log("Pengurangan: ", subtract(10, 5));
console.log("Perkalian: ", multiply(10, 5));
console.log("Pembagian: ", divide(10, 2));
