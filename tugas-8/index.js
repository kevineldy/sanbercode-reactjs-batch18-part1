var readBooks = require('./collback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

readBooks(10000, books[0], function(x){
  readBooks(x, books[1], function(x1){
    readBooks(x1, books[2], function(x2){
      readBooks(x2, books[3], function(x3){  
      })
    })
  })
})