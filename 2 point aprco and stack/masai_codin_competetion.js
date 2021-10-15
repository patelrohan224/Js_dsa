function runProgram(input) {
    input = input.trim().split("\n");
    let test = Number(input[0]);
    let line = 1;
    let roll_q1 = []; 
    let roll_q2 = []; 
    let roll_q3 = [];
    let roll_q4 = [];
    let master_q = []; 
    for (let i = 0; i < test; i++) {
        let arr = input[line++].trim().split(" ");
        let op = arr[0];
        let club = arr[1];
        let roll = arr[2];
        if (op == "E") {
            switch (club) {
                case "1":
                    if (master_q.length == 0 || !master_q.includes("1")) {
                        master_q.push("1");
                    }
                    roll_q1.push(roll)
                    break;

                case "2":
                    if (master_q.length == 0 || !master_q.includes("2")) {
                        master_q.push("2");
                    }
                    roll_q2.push(roll)
                    break;

                case "3":
                    if (master_q.length == 0 || !master_q.includes("3")) {
                        master_q.push("3");
                    }
                    roll_q3.push(roll)
                    break;

                case "4":
                    if (master_q.length == 0 || !master_q.includes("4")) {
                        master_q.push("4");
                    }
                    roll_q4.push(roll)
                    break;

            }  
        }
        else if (op == "D") {
            if (!master_q.length == 0) {
                let front = master_q[0];
                switch (front) {
                    case "1":
                        console.log((`1 ${roll_q1.shift()}`));
                        if (roll_q1.length == 0) {
                            master_q.shift()
                        }
                        break;
                    case "2":
                        console.log((`2 ${roll_q2.shift()}`));
                        if (roll_q2.length == 0) {
                            master_q.shift()
                        }
                        break;
                    case "3":
                        console.log((`3 ${roll_q3.shift()}`));
                        if (roll_q3.length == 0) {
                            master_q.shift()
                        }
                        break;
                    case "4":
                        console.log((`4 ${roll_q4.shift()}`));
                        if (roll_q4.length == 0) {
                            master_q.shift()
                        }
                        break;

                }

            }
        }
    }

}

if (process.env.USERNAME === 'Rohan') {
    runProgram(`5
  E 1 1
  E 2 1
  E 1 2
  D
  D`);
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


