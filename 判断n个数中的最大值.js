var kits = {};

//求n个数中的最大值；
function getMax(){
    var max = arguments[0];
    for(i = 0 ; i < arguments.length;i++){
        if(max < arguments[i]){
            max =arguments[i];
        }
    }
    return max;
}