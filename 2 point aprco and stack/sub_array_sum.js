function runProgram(input) {
    input = input.trim().split("\n");
    var n_t = input[0].trim().split(" ").map(Number);
    var t = n_t[1]
    var n = n_t[0]
    var arr = input[1].trim().split(" ").map(Number);
    console.log(count_longest(arr, t, n));
  }
  
  function count_longest(arr, t, n) {
    var sum = 0;
    var left = -1;
    var right;
    var max = 0
    var ws = 0;
    var count = 0
  
    for (var i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
      if (arr[i] % t > 0) {
        if (left == -1) {
          left = i;
        }
        else {
          right = i;
        }
      }
    }
    if (sum % t > 0) {
      max = arr.length
      return 1;
    } else {
      max = n - Math.min(left + 1, n - right);
    }
  
    for (var i = 0; i < max; i++) {
      ws = ws + arr[i]
    }
    if (ws % t > 0) {
      count++
    }
    var cs = ws;
    for (var i = max; i < arr.length; i++) {
      cs = cs + arr[i] - arr[i - max]
    }
    if (cs % t > 0) {
      count++
    }
    return count
  
  }
  
  if (process.env.USERNAME === 'Rohan') {
    runProgram(`5 3
    3 7 9 2 12`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  