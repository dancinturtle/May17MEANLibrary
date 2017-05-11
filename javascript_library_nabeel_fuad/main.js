var _ = {

  map: function(array, callback){
    var newarray = [];
    for (var i = 0; i < array.length; i++){
      newarray[i] = callback(array[i]);

    }
    return newarray;
  },
  reduce: function(array, callback, memo){
    var el = 0;
    if(!memo){
      memo = array[0];
      el = 1;
    }
    for (var i = el; i < array.length; i++){
      memo = callback(array[i], memo);
    }
    return memo;
  }












}

var myarray = [1,2,3]
var e = _.map(myarray, function(num){ return num * 2});
var c = _.reduce(myarray, function(x,memo){return x + memo}, 7);
console.log(e);
console.log(c);
