var kits = {};
//存储到本地地址;
    function saveData(key, arr) {
        var json = JSON.stringify(arr)
        localStorage.setItem(key, json);
    }