//封装常用代码
var kits={};
//获取区间随机整数；
kits.randomInt = function(n,m){
    return Math.floor(Math.random()*(m-n+1)+n);
}