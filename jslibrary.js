var _ = {
    map: function(list, callBack){
        var newArr = [];
        for(var i = 0; i < list.length; i++){
            newArr.push(callBack(list[i]));
        }
        return newArr;
    },

    reduce: function(list, callBack){
        var sum = 0;
        for (var i = 0; i < list.length; i++){
            sum += callBack(list[i]);
        }
        return sum;
    },

    find: function(list, callBack, memo){
        var newArr = [];
        for(var i = 0; i < list.length; i++){
            if(callBack(list[i]) === memo){
                newArr.push(list[i]);
            }
        }
        return newArr;
    },

    filter: function(list, callBack){
        var newArr = [];
        for(var i = 0; i < list.length; i++){
            if(callBack(list[i])){
                newArr.push(list[i]);
            }
        }
        return newArr;
    },

    reject: function(){

    }
}

console.log('map function in action');
 console.log(_.map([1,2,3], function(num){ return num * 3; }));
 console.log(_.map([2,5,10], function(num){ return num * 100;}));
 console.log(_.filter([-3,-7,3,1,-10,4,-7,3],function(num){ return num > 0;}));
 console.log(_.filter([-3,-7,3,1,-10,4,-7,3],function(num){ return num < 0;}));
 console.log(_.reduce([1,2,3,5,8,10], function(num){ return num; }));
 console.log(_.find([1,3,6,2,2,2,6,8,9,0,3,6,8,2], function(num){ return num;},2));
