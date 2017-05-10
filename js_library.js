


var _ = {
   map: function(array, callback) {
     for (var i = 0; i < array.length; i++){
       array[i]= callback(array[i])
     }
   },
   reduce: function(array, callback, memo) {
     var num = 0;
     if (memo == null){
       memo = array[0];
       num = 1; // num will get reassigned if memo is empt
     }
     for (var i = num; i < array.length; i++) {
       memo = callback(arr[i],memo);
     }
     return memo;
   },
   find: function(list, callback){
     for(var i = 0; i < list.length; i++) {
       if(callback(list[i])){
         return list[i];
       }
     }
     return false;
   },
   filter: function(arr,callback) {
     var new_arr = [];
     for (var i = 0; i < arr.length; i++) {
       if (callback(arr[i])== true ) {
        new_arr.push(arr[i]);
       }
     }
     return new_arr;
   },

   reject: function(arr,callback) {
    var new_arr= [];
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i]) == false) {
        new_arr.push(arr[i]);
      }
    }
    return new_arr;
   }
 }


var arr = [1,2,3];

var x = _.map(arr,
  function callback(num){
    return num*3;
  })

  console.log(arr);




  var arr= [0,4,6,9]
  var y = _.reduce(arr, function callback(num,memo){
    return num + memo;
  }, 5)

  console.log(y);

var list = ["hello", 1, 2]
var tim = _.find(list, function(x){
  var new_arr = [];
  if(typeof(x) === 'string'){
    new_arr.push(x);
  }
  return new_arr;
})
console.log(tim);


var arr = [ 2,5,87,13,46,67,18]
var evens = _.filter(arr, function callback(num){
  return num%2==0;
})

console.log(evens);


var arr = [ 2,5,87,13,46,67,18]
var evens = _.reject(arr, function callback(num){
  return num%2==0;
})

console.log(evens);
