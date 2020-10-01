//Soal 1

console.log("LOOPING PERTAMA")

var flag = 1;

while(flag < 20){
    flag++;
    console.log(flag++ + " - I love coding ")
}
console.log("looping kedua")

var flag = 20;

while(flag >= 2){
    console.log (flag -- + " - I will be fronden developer ");
    flag--
}

//soal 2

for(var angka = 1; angka <=20; angka++){
    if((angka%2)===0){
        console.log(angka + ' - berkualitas');
    }else if((angka%3)===0 && ((angka%2)===1)){
        console.log(angka + ' - I love coding')
    }else if((angka%2)===1){
        console.log(angka + ' - santai');
    }
}

//soal 3

var pagar = '';
for(var row = 0; row <7; row++){
    for(var kolom = 0; kolom <=row; kolom++){
        pagar += '#';
    }
    pagar += '\n';
}
console.log(pagar);


//soal 4

var kalimat="saya sangat senang belajar javascript";

console.log(kalimat.split(" "));


//soal 5

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var sorted = daftarBuah.sort();

for(i =0; i< sorted.length; i++){
  console.log(sorted[i]); 
}