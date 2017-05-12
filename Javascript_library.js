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
     return sum;
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
     filter: function(arr, callback) {
       var arr1 = [];
       for(var i = 0; i < arr.length; i++){
         arr1 = callback(arr1[i]);
         return arr1;
       }
       return false;
     },
     reject: function(arr, callback) {
       var arrx = [];
       for(var i = 0; i < arr.length; i++){
         arrx = callback(!arrx[i]);
         return arrx;
       }
       return false;
     },
   }

console.log(_.map(['soobin', 'conan', 'john'], function(i){return i + " is on a windows machine"}));

console.log(_.find([1,2,4,5,-10,5], function(p){return p % 2 == 1}));

console.log(_.reduce([1,2,4,5], function(a, callback){return a + callback;}));

console.log(_.filter([1,5,8,-15,10], function(x){return x === 4}))

console.log(_.reject([1,2,10,-10,5,8,20], function(x){return x > 10}))
