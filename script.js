// Sample student data
const students = [
  {
    first: 'Charles',
    last: 'Darwin',
    id: 'ABC28491178',
    status: 'None sent',
    major: 'Chemistry',
    college: 'Natural Sciences',
    classification: 'Junior',
    email: 'cdarwin1@my.tnstate.edu',
  },
  {
    first: 'Marie',
    last: 'Curie',
    id: 'XYZ123456',
    status: 'Interviewed',
    major: 'Environmental Sciences',
    college: 'Physical Sciences',
    classification: 'Sophomore',
    email: 'mcurie1@my.tnstate.edu',
  },
  {
    first: 'Ilbert',
    last: 'Einstein',
    id: 'DEF987654',
    status: 'Sent',
    major: 'Psychology',
    college: 'Natural Sciences',
    classification: 'Junior',
    email: 'ieinstein1@my.tnstate.edu',
  },
  // Add other students here following the same structure...
];

// Function to display students in the table
function displayStudents(studentList) {
  const studentListElement = document.getElementById('studentList');
  studentListElement.innerHTML = ''; // Clear previous results

  studentList.forEach((student) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.first} ${student.last}</td>  
      <td>${student.id}</td>  
      <td>${student.status}</td>  
      <td>${student.major}</td>
      <td>${student.college}</td>
      <td>${student.classification}</td> 
      <td>${student.email}</td>     
    `;
    studentListElement.appendChild(row);
  });
}

// Function to filter students based on search input
function filterStudents() {
  const searchInput = document
    .getElementById('searchInput')
    .value.toLowerCase();
  const filteredStudents = students.filter((student) => {
    return (
      `${student.first} ${student.last}`.toLowerCase().includes(searchInput) ||
      student.id.toLowerCase().includes(searchInput) ||
      (student.college && student.college.toLowerCase().includes(searchInput)) // Partial college name match
    );
  });
  displayStudents(filteredStudents);
}

// Event listener for the search button
document
  .getElementById('searchButton')
  .addEventListener('click', filterStudents);

// Initial display of all students
displayStudents(students);
