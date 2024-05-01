const fs = require('fs');

const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const students = {};
  const DBfieldname = fileLines[0].split(',');
  const studentPropNames = DBfieldname.slice(0, DBfieldname.length - 1);

  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentrecord = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(students).includes(field)) {
      students[field] = [];
    }
    const studentEntries = studentPropNames
      .map((propName, idx) => [propName, studentrecord[idx]]);
    students[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object
    .values(students)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(students)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
