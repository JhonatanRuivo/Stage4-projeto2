const students = [
  {
    name: "Jhonatan",
    firstNote: 8,
    secondNote: 7.5
  },
  {
    name: "Bianca",
    firstNote: 10,
    secondNote: 8.5
  },
  {
    name: "Lucas",
    firstNote: 5,
    secondNote: 3
  },
  {
    name: "Paula",
    firstNote: 2,
    secondNote: 4.5
  },
]

const avaregeStudent = function(student) {
  const avarege = (student.firstNote + student.secondNote) / 2
  if (avarege >= 7) {
    alert(`A média do(a) aluno(a) ${student.name} é: ${avarege}\n Parabéns você foi aprovado(a)!`)
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é: ${avarege}\n Infelizmente você não passou tente novamente!`)
  }
}

for(let student of students) {
  avaregeStudent(student)
}

avaregeStudent()