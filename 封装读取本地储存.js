var kits = {};
//读取本地数据
function loadData(key) {
    var str = localStorage.getItem(key);
    var arr = JSON.parse(str);
    if (!arr) {
        arr = []
    }
    return arr;
}