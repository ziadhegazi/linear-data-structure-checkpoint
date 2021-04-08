// Values used for sets 1 and 2, can be changed
let set1 = [3,1,7,9],
    set2 = [2,4,1,9,3];

// let set1 = [12,13,6,10],
//     set2 = [13,10,16,15];

// Global variables
let diff = [];
let same = []
let sum_diff = 0;
let sum_same = 0;

// Going through set 1 and comparing it to set 2
for (num1 of set1) {
    // console.log(set2.includes(num1));
    if (!set2.includes(num1)) {
        if (same.includes(num1)) {
            continue
        }else{
            sum_diff+=num1;
            diff.push(num1);
        }
        // console.log(num1);
    }else {
        if (same.includes(num1)) {
            continue
        }else{
            sum_same+=num1;
            same.push(num1);
        }
    }
}

// Going through set 2 and comparing it to set 1
for (num2 of set2) {
    // console.log(set1.includes(num2));
    if (!set1.includes(num2)) {
        if (same.includes(num2)) {
            continue
        }else{
            sum_diff+=num2;
            diff.push(num2);
        }
        // console.log(num2);
    }else {
        if (same.includes(num2)) {
            continue
        }else{
            sum_same+=num2;
            same.push(num2);
        }
    }
}

console.log(`the sum of distinct elements are ${sum_diff} and the values are ${diff}`);
console.log(`the sum of similar elements are ${sum_same} and the values are ${same}`);