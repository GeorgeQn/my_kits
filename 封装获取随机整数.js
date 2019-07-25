var kit={};
    //获取区间随机整数；
    kit.randomInt = function(n,m){
    return Math.floor(Math.random()*(m-n+1)+n);
    } 