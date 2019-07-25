var kits = {};
//冒泡排序,从小到大；
function maoPaoSmallToBig(arr) {
for (i = 0; i < arr.length - 1; i++) { for (j=0; j < arr.length - 1 - i; j++) { if (arr[j]> arr[j + 1]) {
    //如果前面的数比后面的数小，调换位置;
    var temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
    }
    }
    }
    return arr;
    }