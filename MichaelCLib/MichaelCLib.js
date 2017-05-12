var _ = {
   map: function(arr, callback) {
    var myarr = []
     for(var i=0; i<arr.length;i++){
      myarr.push(callback(arr[i]))
     }
     console.log(myarr)
   },
   reduce: function(arr,callback,memo) { 
      var el = 0;
      if (!memo){
        memo = arr[0];
        el = 1;
      }
      for (var i = el; i < arr.length; i++) {
        memo = callback(arr[i], memo);
      }
      console.log(memo);
   },
   find: function(arr,callback) {
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i])){
        return arr[i]
      } 
    }
    return false     
   },
   filter: function(arr,callback) {
    var myarr = []
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i])){
        myarr.push(arr[i])
      } 
    }
    return myarr 
   },
   reject: function(arr,callback) {
    var myarr = []
    for (var i = 0; i < arr.length; i++) {
      if (!callback(arr[i])){
        myarr.push(arr[i])
      } 
    }
    return myarr 
   },
  }
num = function(num){return(num * 3)}
red = function(num, memo){return(memo + num)}

var arr = [1,2,3,4,5,6,7,8,9]
_.map(arr,num)
_.reduce(arr,red,10)

even = function(num){ return num % 2 == 0; }

console.log(_.find(arr,even))
console.log(_.filter(arr,even))
console.log(_.reject(arr,even))