// 2. Method untuk penjumlahan, pengurangan, perkalian, dan pembagian
function calculate(a: number, b: number, operation: string): number {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) {
        throw new Error("0 tidak bisa dibagi");
      }
      return a / b;
    default:
      throw new Error("Operasi tidak valid");
  }
}

//Penggunaan
console.log("Penjumlahan: " + calculate(10, 5, "add"));
console.log("Pengurangan: " + calculate(10, 5, "subtract"));
console.log("Perkalian: " + calculate(10, 5, "multiply"));
console.log("Pembagian: " + calculate(10, 2, "divide"));
