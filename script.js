// Student data with 801 unique entries
const students = Array.from({ length: 801 }, (_, index) => {
  const scientistNames = [
    { first: 'Charles', last: 'Darwin' },
    { first: 'Marie', last: 'Curie' },
    { first: 'Albert', last: 'Einstein' },
    { first: 'Isaac', last: 'Newton' },
    { first: 'Nikola', last: 'Tesla' },
    { first: 'Stephen', last: 'Hawking' },
    { first: 'Rosalind', last: 'Franklin' },
    { first: 'Ada', last: 'Lovelace' },
    { first: 'Galileo', last: 'Galilei' },
    { first: 'Jane', last: 'Goodall' }
  ];

  const colleges = [
    'Natural Sciences', 
    'Physical Sciences', 
    'Engineering', 
    'Computer Science', 
    'Biology', 
    'Mathematics'
  ];

  const majors = [
    'Chemistry', 
    'Physics', 
    'Biology', 
    'Computer Science', 
    'Environmental Sciences', 
    'Psychology', 
    'Mathematics', 
    'Neuroscience'
  ];

  const classifications = ['Freshman', 'Sophomore', 'Junior', 'Senior'];
  const statuses = ['None sent', 'Interviewed', 'Sent', 'Pending'];

  const scientist = scientistNames[index % scientistNames.length];
  
  return {
    first: scientist.first,
    last: `${scientist.last}_${index + 1}`, // Ensure unique last names
    id: `STUD${String(index + 100000).slice(1)}`, // Generate unique IDs
    status: statuses[index % statuses.length],
    major: majors[index % majors.length],
    college: colleges[index % colleges.length],
    classification: classifications[index % classifications.length],
    email: `${scientist.first.toLowerCase()}${scientist.last.toLowerCase()}${index + 1}@my.tnstate.edu`
  };
});

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
