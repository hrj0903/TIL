// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const fruitsStr = fruits.toString();
  console.log(fruitsStr);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const fruitsArray = fruits.split(',');
  console.log(fruitsArray);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  array.splice(0, 2);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  let student = '';
  for (let i = 0; i < students.length; i++) {
    const score = students[i]['score'];
    if (score >= 90) {
      student = students[i]['name'];
    }
  }
  console.log(student);
}

// Q6. make an array of enrolled students
{
  let student2 = [];
  for (let i = 0; i < students.length; i++) {
    const enrolled = students[i]['enrolled'];
    if (enrolled === true) {
      student2.push(students[i]['name']);
    }
  }
  console.log(student2);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  let student3 = [];
  for (let i = 0; i < students.length; i++) {
    const score = students[i]['score'];
    student3.push(score);
  }
  console.log(student3);
}

// Q8. check if there is a student with the score lower than 50
{
  let student4 = false;
  for (let i = 0; i < students.length; i++) {
    const score = students[i]['score'];
    if (score < 50) {
      student4 = true;
    }
  }
  console.log(student4);
}

// Q9. compute students' average score
{
  function calculate() {
    let total = 0;
    for (let i = 0; i < students.length; i++) {
      total += students[i]['score'];
    }
    return total / students.length;
  }
  console.log(calculate());
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  let student4 = [];
  for (let i = 0; i < students.length; i++) {
    const score = students[i]['score'];
    student4.push(score);
  }
  student5 = student4.join(', ');
  console.log(student5);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  let student4 = [];
  for (let i = 0; i < students.length; i++) {
    const score = students[i]['score'];
    student4.push(score);
  }
  const student5 = student4.sort();
  const student6 = student5.join(', ');
  console.log(student6);
}
