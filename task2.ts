//Menyimpan data player
const Nama: string = "RakazZ";
const Umur: number = 20;
const Status: boolean = true;
console.log("Nama Pahlawan: " + Nama);
console.log("Umur: " + Umur);
console.log("Apakah pahlawan siap bertarung: " + Status + "\n");

//Variabel penyimpan data berupa sumber daya player
console.log("\nSumber Daya Player:");
const Emas: number = 5000;
const Makanan: number = 120;
const Pasukkan: number = 200;
console.log("Emas yang dimiliki: " + Emas);
console.log("Jumlah makanan: " + Makanan);
console.log("Prajurit yang dimiliki: " + Pasukkan);

//Emas dan pengalaman(EXP) yan diperoleh
console.log("Emas dan Pengalaman (EXP):");
const goldEarned = Emas + 1500;
console.log("Gold yang diperoleh: " + goldEarned + " Gold");

const expEarned: number = 75;
console.log("EXP yang diperoleh: " + expEarned + " EXP");

// Fungsi untuk mengurangi kesehatan prajurit
console.log("\nSistem Pengurangan Kesehatan: ");
const kurangiKesehatan = (
  jumlahPrajurit: number,
  poinKehilangan: number = 5 //5 merupakan nilai default
) => {
  // mengisi nilai kesehatan sebanyak 100 di setiap pasukkan menggunakan Array.fill
  let kesehatanPrajurit: number[] = Array(jumlahPrajurit).fill(100);
  /*map digunakan untuk membuat array baru dari kesehatanPrajurit yang kemudian
akan dirender ulang untuk menjadi kesehatanBaru*/
  kesehatanPrajurit = kesehatanPrajurit.map((kesehatan, index) => {
    const kesehatanBaru = kesehatan - poinKehilangan;

    if (kesehatanBaru <= 0) {
      console.log(`Prajurit ${index + 1} tidak bisa bertarung (kesehatan: 0)`);
      return 0; // Jika kesehatan <= 0, set ke 0
    } else {
      console.log(`Prajurit ${index + 1} - Kesehatan: ${kesehatanBaru}`);
      return kesehatanBaru;
    }
  });
};

kurangiKesehatan(5);

//Summary
console.log("\nSummary:");
const summary = () => {
  const totalGold = goldEarned;
  const totalExp = expEarned;

  return `Nama: ${Nama}\nGold yang diperoleh: ${totalGold} Gold\nExp yang diperoleh: ${totalExp} Exp`;
};

console.log(summary());
