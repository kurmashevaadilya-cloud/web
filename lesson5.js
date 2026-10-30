const students = [
    {name: "Adinay", percentage: 88},
    {name: "Tilek", percentage: 76},
    {name: "Islam", percentage: 95},
    {name: "Shahzoda", percentage: 63},
    {name: "Adilya", percentage: 91},
    {name: "Fatima", percentage: 84},
    {name: "Usman", percentage: 55},
    {name: "AbuBakr", percentage: 100},
    {name: "Aisuluu", percentage: 72},
    {name: "Aziza", percentage: 90},
];

let studentNames = students.map(student => student.name);
let studentPercentages = students.map(student => student.percentage + 5);

console.log("Student Names:", studentNames); 
console.log("Student Percentages:", studentPercentages);

for (let i = 0; i < students.length; i++) {
    let student = students[i];

    console.log("Name:", student.name);
    console.log("Letters:", student.name.length);
    console.log("Grade:", student.percentage);
}

let total = 0;

for (let i = 0; i < students.length; i++) {
    total += students[i].percentage;
}

let average = total / students.length;

console.log("Average percentage:", average);


let highest = students[0];
let lowest = students[0];

for (let i = 1; i < students.length; i++) {
    if (students[i].percentage > highest.percentage) {
        highest = students[i];
    }

    if (students[i].percentage < lowest.percentage) {
        lowest = students[i];
    }
}

console.log("Highest percentage:", highest.name, highest.percentage);
console.log("Lowest percentage:", lowest.name, lowest.percentage);


let longestName = students[0];

for (let i = 1; i < students.length; i++) {
    if (students[i].name.length > longestName.name.length) {
        longestName = students[i];
    }
}

console.log("Longest name:", longestName.name);
console.log("Number of letters:", longestName.name.length);

const updatedStudents = students.map(student => ({
    ...student,
    percentage: student.percentage + 5
}));

console.log("Original students:", students);
console.log("Students with updated percentages:", updatedStudents);