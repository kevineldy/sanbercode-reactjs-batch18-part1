//soal 1

function halo() {
    return "Halo Sanbers!"
  }
   
  var tampil = halo();
  console.log(tampil)


  //soal 2

function kalikan(num1,num2){
    return num1 * num2
  }

  console.log(kalikan(12, 4))

//soal 3

function introduce(name, age, addres, hobby) {
    return name + age + addres + hobby
  }
  
  var name = "John"
  var age = 30
  var addres = "Jalan belum jadi"
  var hobby = "Gaming"
  
  var perkenalan = ["Nama saya "+name+", "+ "umur saya "+age+" tahun, "+ "alamat saya di "+addres+", "+"dan saya punya hobi yaitu "+hobby+"!"]
   
  console.log(perkenalan)

//soal 4

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

var bio = {
  name: arrayDaftarPeserta[0],
  gender: arrayDaftarPeserta[1],
  hobby: arrayDaftarPeserta[2],
  year: arrayDaftarPeserta[3],
}

console.log(bio)

//soal 5

var buah = [{nama: "strawbery", warna: "merah", adabiji: "tidak", harga: "90000"},
            {nama: "jeruk", warna: "orange", adabiji: "ada", harga: "8000"},
            {nama: "semangka", warna: "hijau", adabiji: "ada", harga: "10000"},
            {nama: "pisang", warna: "kuning", adabiji: "tidak", harga: "5000"}]


  console.log(buah[0]);


//soal 6

var film = []

function tambahFilm(judul,genre,durasi,tahun){
  film.push(judul,genre,durasi,tahun)
}

tambahFilm("Black Water: Abyss","Action","120 min",2020);

var dataFilm = {
  Judul: film[0],
  Genre: film[1],
  Durasi: film[2],
  Tahun: film[3],
}
console.log(dataFilm)

