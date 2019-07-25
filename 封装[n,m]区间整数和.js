var kits = {};

//[n,m]区间整数和
function getSum(n,m){
    var sum = 0;
    for(i=n;i<=m;i++){
        sum += i
    }
    return sum;
}