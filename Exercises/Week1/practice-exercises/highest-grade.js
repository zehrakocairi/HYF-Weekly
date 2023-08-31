const students = [
  { name: "Alice", city: "Amsterdam", grade: 71 },
  { name: "Ben", city: "The Hague", grade: 96 },
  { name: "Chloe", city: "Groningen", grade: 67 },
  { name: "David", city: "Almere", grade: 72 },
  { name: "Emma", city: "Rotterdam", grade: 75 },
  { name: "Finn", city: "Groningen", grade: 78 },
  { name: "Grace", city: "Amsterdam", grade: 89 },
  { name: "Henry", city: "Utrecht", grade: 95 },
  { name: "Isabelle", city: "Utrecht", grade: 94 },
  { name: "Jack", city: "The Hague", grade: 83 },
  { name: "Kate", city: "Rotterdam", grade: 73 },
  { name: "Liam", city: "Amsterdam", grade: 84 },
  { name: "Maya", city: "Amsterdam", grade: 92 },
  { name: "Noah", city: "Almere", grade: 77 },
  { name: "Olivia", city: "Almere", grade: 70 },
  { name: "Penelope", city: "Rotterdam", grade: 76 },
  { name: "Quinn", city: "Amsterdam", grade: 82 },
  { name: "Rachel", city: "Almere", grade: 98 },
  { name: "Sam", city: "Rotterdam", grade: 54 },
  { name: "Tyler", city: "Amsterdam", grade: 76 },
  { name: "Uma", city: "Groningen", grade: 80 },
  { name: "Violet", city: "Amsterdam", grade: 81 },
  { name: "William", city: "Utrecht", grade: 88 },
  { name: "Xavier", city: "Rotterdam", grade: 69 },
  { name: "Yazmin", city: "Utrecht", grade: 79 },
  { name: "Zoe", city: "Rotterdam", grade: 74 },
];
// 1. Write a function that takes an array of students
//    the function finds the student with highest grade.
//    Return the name of the student
// 2. Rewrite your function to find the student with highest grade
//    from Amsterdam

function findHighestGrade() {
  let theHighestStudent = students[0];

  for (let i = 0; i < students.length; i++) {
    let theCurrentStudent = students[i];
    if (theHighestStudent.grade < theCurrentStudent.grade) {
      theHighestStudent = students[i];
    }
  }
  return theHighestStudent.name;
}

function bestStudentFromAmsterdam() {
  let studentsFromAmsterdam = students.filter(
    (student) => student.city === "Amsterdam"
  );

  let theHighestStudent = students[0];

  for (let i = 0; i < studentsFromAmsterdam.length; i++) {
    let theCurrentStudent = studentsFromAmsterdam[i];
    if (theHighestStudent.grade < theCurrentStudent.grade) {
      theHighestStudent = studentsFromAmsterdam[i];
    }
  }
  return theHighestStudent.name;
}

console.log(bestStudentFromAmsterdam());
