//let arr = [1, 3, 5, 7, "asd"];

//arr.push(9);
//console.log(arr[4]);

//let removedElement = arr.pop();
//console.log(removedElement);
//console.log(arr[1]);

const students = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Charlie"},
];

let totalLetters = 0;
let maxLetters = 0;
let longestNames = [];

for (const student of students) {
    const letterCount = student.name.length;
    totalLetters += letterCount;

    console.log(`${student.name}: ${letterCount} букв`);

    if (letterCount > maxLetters) {
        maxLetters = letterCount;
        longestNames = [student.name];
    } else if (letterCount === maxLetters) {
        longestNames.push(student.name);
    }
}

console.log(`Всего букв в именах: ${totalLetters}`);
console.log(`Больше всего букв (${maxLetters}) в имени: ${longestNames.join(", ")}`);