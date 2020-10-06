//Soal 1

console.log("Jawaban Soal 1")
console.log("Release 0")

class animal{
    constructor(){
      this._name = "" ;
      this._legs = "" ;
      this._cold_blooded = "" ;
    }
  
    get name(){
      return this._name;
    }
  
    set name(x){
      return this._name = x;
    }
  
    get legs(){
      return this._legs;
    }
  
    set legs(x){
      return this._legs = x;
    }
  
    get cold_blooded(){
      return this._cold_blooded;
    }
  
    set cold_blooded(x){
      return this._cold_blooded = x;
    }
  }

  var sheep = new animal ();

  sheep.name = "shaun"
  sheep.legs = 4
  sheep.cold_blooded = false

  console.log(sheep.name)
  console.log(sheep.legs)
  console.log(sheep.cold_blooded)

console.log()
console.log()
console.log("Release 1")

class Frog extends animal{
    constructor(){
        super()
   }

   jump(){
       return "hop hop"
     }
    }

  var kodok = new Frog("buduk");
  kodok.name = "buduk"
  kodok.jump = "hop hop"
  kodok.legs = 4 

  console.log(kodok)
  console.log(kodok.name +" "+ kodok.jump)
  

  
class Ape extends animal{
    constructor(){
        super()
  }

  yell(){
      return "Auoo"
  }
}
  var sungokong = new Ape("kera sakti");
  sungokong.name = "kera sakti"
  sungokong.yell = "Auoo" 
  sungokong.legs = 2

  console.log(sungokong)
  console.log(sungokong.name +" "+ sungokong.yell)

//soal 2
console.log()
console.log("Jawaban Soal 2")
console.log()

class Clock {
    constructor({_template}){
      this._template =_template;
      this.timer
    }
  
  
    render() {
      var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      var output = this._template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs)
  
      console.log(output)
    }
  
   stop(){
     clearInterval(this.timer)
   }
   start(){
     this.render()
     this.timer= setInterval(()=>this.render(),1000)
   }
  }
  var clock = new Clock({_template: 'h:m:s'});
  clock.start(); 