//soal 1
console.log("Jawaban Soal No. 1")

const luasLingkaran = (pi, jariJari) => {
    return pi*jariJari*jariJari;
  }

console.log("luas lingkaran dari jari-jari 7 adalah " + luasLingkaran(3.14, 7))

console.log()

//soal 2
console.log("Jawaban Soal No.2")

const kalimat1 = "Saya"
const kalimat2 = "adalah"
const kalimat3 = "seorang"
const kalimat4 = "frontend"
const kalimat5 = "developer"

let kalimat = `${kalimat1} ${kalimat2} ${kalimat3} ${kalimat4} ${kalimat5}`

console.log(kalimat)

console.log()

//soal 3
console.log("Jawaban Soal No.3")

const newFunction = function literal(firstName, lastName){
    return {
      firstName,
      lastName,
      fullName: function(){
        console.log(firstName + " " + lastName)
        return 
      }
    }
  }

  newFunction("William", "Imoh").fullName()

console.log()

//soal 4
console.log("Jawaban Soal No.4")

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  };
  
  const {firstName, lastName, destination, occupation, spell} = newObject
  
  console.log(newObject)

  console.log()

//soal 5
console.log("Jawaban Soal No.5")

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east];

console.log(combined)

