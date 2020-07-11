/**
 * 排序封装
 */


// 冒泡排序
function bubbleSort (arr){
    var temp;
    var len = arr.length;
    for(var i = 0; i<len;i++){
        for(var j = 0;j<len-1-i;j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
bubbleSort([3,5,7,2,1],'test')


/**
 * 数组降维
 */

// 二维数组

let arr = [ [1], [2], [3] ]
arr = Array.prototype.concat.apply([], arr); // [1, 2, 3]
// arr = arr.flat(1)

// 多维数组降维

let arrMore = [1, 2, [3], [[4]]]
arrMore = arrMore.flat(3) // [1, 2, 3, 4]


/**
 * 数据结构处理
 */


//树形结构，一个数组根据pid相等拼接成对应若干数组 https://www.cnblogs.com/edwardwzw/p/11778513.html  参考

 function trans_tree(jsonData){
    //temp为临时对象，将json数据按照id值排序.
    var result = [], temp = {}, len = jsonData.length

    for(var i = 0; i < len; i++){
        // 以id作为索引存储元素，可以无需遍历直接快速定位元素
        temp[jsonData[i]['id']] = jsonData[i] 
    }
    for(var j = 0; j < len; j++){
        var list = jsonData[j]
        // 临时变量里面的当前元素的父元素，即pid的值，与找对应id值
        var sonlist = temp[list['pid']] 
        // 如果存在父元素，即如果有pid属性
        if (sonlist) { 
            // 如果父元素没有children键
            if (!sonlist['children']) { 
            // 设上父元素的children键
            sonlist['children'] = [] 
            }
            // 给父元素加上当前元素作为子元素
            sonlist['children'].push(list) 
        } 
        // 不存在父元素，意味着当前元素是一级元素
        else { 
            result.push(list);
        }
    }
    return result;
}



// 字符串转换成驼峰形式
// 'get-element-by-id' 转为 'getElementById'
function toUpp (s){
    var a = s.split('-');
    var o = a[0];
    for(var i = 1 ; i < a.length ; i++){
        o = o + a[i].slice(0,1).toUpperCase() + a[i].slice(1);
    }
    return o;
}

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

 //获取区间随机整数；
        function randomInt(n,m){
    return Math.floor(Math.random()*(m-n+1)+n);
    }