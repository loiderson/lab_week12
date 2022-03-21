function logfunc() {
    console.log(document.querySelector("p"))
}

const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]

function avggradestu() {
    const studentsScholarship = []
    for (let goodstu of students) {
        let avg = 0
        for (let grade of goodstu.grades) {
            avg += grade
    }
  let average = avg/goodstu.grades.length
  if (average > 80) {
    studentsScholarship.push({name: goodstu.name, gradeAvg: average})
        }
    }
    return studentsScholarship
}
avggradestu()
console.log(avggradestu())