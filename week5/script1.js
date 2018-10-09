function determinant() {
  var arr = new Array();
  for (var i = 1; i <= 3; i++) {
    arr[i] = new Array();
    for (var j = 1; j <= 3; j++) {
      let s = "#s" + i + j;
      let st = document.querySelector(s).value;
      arr[i][j] = parseInt(st);
    }
  }
  var sum = 0, lol = 0, z = 1;
  for (var ind = 1; ind <= 3; ind++) {
    var x = arr[1][ind];
    if (ind == 1) lol = x * (arr[2][2] * arr[3][3] - arr[2][3] * arr[3][2]);
    else if (ind == 2)
      lol = x * (arr[2][1] * arr[3][3] - arr[2][3] * arr[3][1]);
    else lol = x * (arr[2][1] * arr[3][2] - arr[2][2] * arr[3][1]);
    sum += lol * z;
    z *= -1;
  }
  document.querySelector("#result").innerHTML = sum.toString();
}
document.querySelector("#determinant").onclick = function() {
  determinant();
};
