var kits = {};

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