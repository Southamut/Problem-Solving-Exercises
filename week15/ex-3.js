function getPassedStudents(students) {
    const passStudent = students.filter((student) => student.score >= 50).map((student) => student.name)
    // console.log(passStudent)
    return passStudent
};

let result1 = getPassedStudents([
    { name: "A", score: 80 },
    { name: "B", score: 45 },
    { name: "C", score: 60 }
]);
console.log(result1); // ["A", "C"]