var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

readBooksPromise(9000, books[0]).then(
    function(x){
        readBooksPromise(x, books[1]).then(
          function(x1){
              readBooksPromise(x1, books[2]).then(
                 console.log(x1)
              )
          }  
        )
    }
)