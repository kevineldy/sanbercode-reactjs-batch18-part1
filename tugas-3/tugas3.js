// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "Javascript";

var dua = kataKedua.charAt(0).toUpperCase()
var kataDua = kataKedua.slice(1)
var empat = kataKeempat.toUpperCase()

console.log(kataPertama+" "+dua+kataDua+" "+kataKetiga+" "+empat)

//soal 2

var kata_pertama = "1";
var kata_kedua = "2";
var kata_ketiga = "3";
var kata_keempat = "4";

var hasil = Number(kata_pertama) + Number(kata_kedua) + Number(kata_ketiga) + Number(kata_keempat);

console.log(hasil);

//soal 3

var kalimat = 'wah javascript itu keren sekali';

var kata_Pertama = kalimat.substring(0, 3);
var kata_Kedua = kalimat.substring(4, 14);
var kata_Ketiga = kalimat.substring(15, 18);
var kata_Keempat = kalimat.substring(19, 24);
var kata_Kelima = kalimat.substring(25, 31);
 
console.log('kata Pertama: ' + kata_Pertama);
console.log('kata Kedua: ' +kata_Kedua);
console.log('kata Ketiga: ' +kata_Ketiga);
console.log('kata Keempat: ' +kata_Keempat);
console.log('kata Kelima: ' +kata_Kelima);

//soal 4

var nilai = 80;

if(nilai == 100 && nilai >= 80 ){
    console.log("Index A")
}else if(nilai <= 80 && nilai >=70){
    console.log("Index B")
}else if(nilai <=70 && nilai >=60){
    console.log("Index C")
}else if(nilai <=60 && nilai >=50){
    console.log("Index D")
}else if(nilai <=50){
    console.log("index E")
}else{console.log("Nilai Tidak Ada")}

//soal5

var tanggal = 21;
var bulan = 11;
var tahun = 1993;

var stringBulan = ""

switch(bulan){
    case 1 : stringBulan = "Januari"; break;
    case 2 : stringBulan = "Februari"; break;
    case 3 : stringBulan = "Maret"; break;
    case 4 : stringBulan = "April"; break;
    case 5 : stringBulan = "Mei"; break;
    case 6 : stringBulan = "Juni"; break;
    case 7 : stringBulan = "Juli"; break;
    case 8 : stringBulan = "Agustus"; break;
    case 9 : stringBulan = "September"; break;
    case 10 : stringBulan = "Oktober"; break;
    case 11 : stringBulan = "November"; break;
    case 12 : stringBulan = "Desember"; break;
}

console.log("Tanggal Lahir Saya" + " " + tanggal + " " + stringBulan + " " + tahun);