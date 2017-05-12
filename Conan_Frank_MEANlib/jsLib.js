var _ = {
    map: function(list, iteratee){
        var arr = [];
        if(Array.isArray(list)){
            for(var i = 0; i < list.length; i++){
                arr.push(iteratee(list[i]));

            }
        }
        else if(typeof (list) == 'object'){
            for(key in list){
                arr.push(iteratee(list[key]));
            }
        }
        return arr;
    },
    reduce: function(list, iteratee, initSum){
        var sum = initSum || 0;
        for(var i = 0; i < list.length; i++){
            sum = iteratee(sum, list[i]);
        }
        return sum;
    },
    find: function(list, iteratee){
        for(var i = 0; i < list.length; i++){
            if(iteratee(list[i])){
                return list[i];
            }
        }
    },
    filter: function(list, iteratee){
        var array = [];
        for(var i = 0; i < list.length; i++){
            if(iteratee(list[i])){
                array.push(list[i]);
            }
        }
        return array;
    },
    reject: function(list,iteratee){
        var array = [];
        for(var i = 0; i < list.length; i++){
            if(!iteratee(list[i])){
                array.push(list[i]);
            }
        }
        return array;
    }
}
console.log(_.map([1,2,3], function(num){ return num * 3}))
console.log(_.map({one: 1, two: 2, three: 3}, function(value){ return value * 3; }));
console.log(_.reduce([1, 2, 3], function(memo, num){ return memo + num; }));
console.log(_.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
console.log(_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
console.log(_.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
