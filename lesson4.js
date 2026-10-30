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

let totalPercentage = 0;
let highestStudent = students[0];
let lowestStudent = students[0];

for (const student of students) {
    let letterGrade;

    if (student.percentage >= 90) {
        letterGrade = "A";
    } else if (student.percentage >= 80) {
        letterGrade = "B";
    } else if (student.percentage >= 70) {
        letterGrade = "C";
    } else if (student.percentage >= 60) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }

    totalPercentage += student.percentage;
    console.log(`${student.name}: ${student.percentage}% — ${letterGrade}`);

    if (student.percentage > highestStudent.percentage) {
        highestStudent = student;
    }

    if (student.percentage < lowestStudent.percentage) {
        lowestStudent = student;
    }
}

const averagePercentage = totalPercentage / students.length;

console.log(`Average Grade: ${averagePercentage}%`);
console.log(`HIGHEST GRADE: ${highestStudent.name} (${highestStudent.percentage}%)`);
console.log(`LOWEST GRADE: ${lowestStudent.name} (${lowestStudent.percentage}%)`);
