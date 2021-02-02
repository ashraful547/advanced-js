

const students = [
    {id: 21, name : "sunny"},
    {id:31, name : "manna"},
    {id:41, name : "tisha"},
    {id: 71, name : "deepjol"}
];

const names = students.map(s =>s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>40);
console.log(bigger);