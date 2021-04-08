// Values used for sets 1 and 2, can be changed
let set1 = [3,1,7,9],
    set2 = [2,4,1,9,3];

// let set1 = [12,13,6,10],
//     set2 = [13,10,16,15];

// Objects
let list = {};
// Global variables
let diff = [];
let same = [];
let sum_diff = 0;
let sum_same = 0;

for (num1 of set1) {
    // console.log(set2.includes(num1));
    if (!set2.includes(num1)) {
        // console.log(num1 in list);
        if (list.hasOwnProperty(num1)) {
            list[num1] +=1;
        }else{
            list[num1] = 1;
            // console.log(list);
        }
        // console.log(num1);
    }else {
        if (list.hasOwnProperty(num1)) {
            list[num1] +=1;
        }else{
            list[num1] = 1;
            // console.log(list);
        }
    }
}
for (num2 of set2) {
    // console.log(set2.includes(num2));
    if (!set1.includes(num2)) {
        // console.log(num2 in list);
        // console.log(list.hasOwnProperty(num2));
        if (list.hasOwnProperty(num2)) {
            list[num2] +=1;
        }else{
            list[num2] = 1;
            // console.log(list);
        }
        // console.log(num1);
    }else {
        if (list.hasOwnProperty(num2)) {
            list[num2] +=1;
        }else{
            list[num2] = 1;
            // console.log(list);
        }
    }
}

console.log(list);

for (e in list) {
    if (list[e] == 1) {
        diff.push(e);
        sum_diff+=parseInt(e);
    }else {
        same.push(e);
        sum_same+=parseInt(e);
    }
}


console.log(`the sum of distinct elements are ${sum_diff} and the values are ${diff}`);
console.log(`the sum of similar elements are ${sum_same} and the values are ${same}`);