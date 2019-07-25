var kits = {};
  function randomInt(n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
  }

  function randomRGBAColor(){
    var r = randomInt(0, 255);
    var g = randomInt(0, 255);
    var b = randomInt(0, 255);
    var opacity = Math.floor(Math.random() * 100) / 100;
    return 'rgba(' + r + ',' + g + ',' + b + ','+ opacity +')';
  }
  
  console.log(randomRGBAColor());