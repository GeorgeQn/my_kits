//  时间格式化
function formatDateTime(date) {
    // 内置函数转换为指定格式
    // 时间格式化函数 最后结果是2018-5-23 12：20
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    var second = date.getSeconds();
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}


//日常时间转换
    //格式可定制
Date.prototype.Format = function(fmt) {
    var o = {
        "M+" : this.getMonth() + 1, //月份 
        "d+" : this.getDate(), //日 
        "h+" : this.getHours(), //小时 
        "m+" : this.getMinutes(), //分 
        "s+" : this.getSeconds(), //秒 
        "q+" : Math.floor((this.getMonth() + 3) / 3), //季度 
        "S" : this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
// 使用方法：
var a=new Date();
console.log(a.Format("yyyy-MM-dd")) //年月日
console.log(a.Format("yyyy-MM-dd hh:mm:ss")) //年月日时分秒


    // 计算时间差，返回相差的天/时/分/秒
    function getTimeDifference(start, end) {
        var day, hour, minute, second, interval;
        interval = end - start;
        interval /= 1000;
        day = Math.round(interval / 60 / 60 / 24);
        hour = Math.round(interval / 60 / 60 % 24);
        minute = Math.round(interval / 60 % 60);
        second = Math.round(interval % 60);
        return {
          day: day,
          hour: hour,
          minute: minute,
          second: second
        }
      }