//     each: function(arr, callback) {
//     // loop through the array
//       for(var i = 0; i < arr.length; i++) {
//         callback(arr[i]); // invoking the callback many times... delegation!
//       }
//     }
//
//     each([1,2,3], function(num) { alert(num + " I am from the callback!"); }) //so many alerts!



var _ = {
   map: function(array, callback){
     var xarray = [];
     for(var i = 0; i < array.length; i++){
      xarray[i] = callback(array[i]);
     }
     return xarray;
  },
   reduce: function(list, callback){
     var sum = 0;
     for(var i = 0; i < list.length; i++){
       sum = callback(sum, list[i])
     }

   },
      find: function(list,callback) {
        for(var i = 0; i < list.length; i++){
          if (callback(list[i])){
            return list[i];
          }
        }
        return false;
        // code here;
      },
}
var iarray = ['soobin', 'beatrice', 'john']
var hello = _.map(iarray, function(x){return x + " is on a windows machine"});
console.log(hello)

console.log(_.find([1,2,4,5,-10,5], function(p){return p % 2 == 1}));

console.log(_.reduce([1,2,4,5], function(a){return a, callback))


//    filter: function() {
//      // code here;
//    },
//    reject: function() {
//      // code here;
//    }
//  }
// // you just created a library with 5 methods!
