const colleges = [
  'Natural Sciences', 
  'Physical Sciences', 
  'Engineering', 
  'Computer Science', 
  'Biology', 
  'Mathematics'
];

const majors = [
  'Accounting',
  'Agricultural Sciences',
  'Anthropology',
  'Biology',
  'Business Administration',
  'Chemistry',
  'Civil Engineering',
  'Computer Science',
  'Criminal Justice',
  'Electrical Engineering',
  'Environmental Science',
  'Finance',
  'General Studies',
  'Health Science',
  'Human Performance and Sports Sciences',
  'Information Technology',
  'Integrated Studies',
  'Management',
  'Marketing',
  'Mathematics',
  'Mechanical Engineering',
  'Music',
  'Neuroscience',
  'Nursing',
  'Pharmaceutical Sciences',
  'Physical Education',
  'Physics',
  'Political Science',
  'Psychology',
  'Public Administration',
  'Social Work',
  'Sociology',
  'Special Education',
  'Speech Pathology',
  'Urban Studies',
  'Veterinary Technology',
  'Environmental Engineering',
  'Educational Leadership',
  
];

const classifications = ['Freshman', 'Sophomore', 'Junior', 'Senior'];
const statuses = ['None sent', 'Interviewed', 'Sent', 'Pending'];

const nameCount = new Map();
const nameMaxCount = 4;  // Max number of people with the same name

let scientist;

// Find a name that has not exceeded the allowed number of occurrences
for (let attempt = 0; attempt < scientistNames.length; attempt++) {
  scientist = scientistNames[(index + attempt) % scientistNames.length];
  const fullName = `${scientist.first} ${scientist.last}`;
  const currentCount = nameCount.get(fullName) || 0;

  // Limit to 1-4 occurrences of the same name
  if (currentCount < nameMaxCount) {
    // Update the name count
    nameCount.set(fullName, currentCount + 1);
    break;
  }
}

// Return the student object with first name, last name, and other details
return {
  first: scientist.first,
  last: scientist.last,
  id: `STU${String(index).padStart(5, '0')}`,
  status: statuses[index % statuses.length],
  major: majors[index % majors.length],
  college: colleges[index % colleges.length],
  classification: classifications[index % classifications.length],
  email: `${scientist.first[0].toLowerCase()}${scientist.last.toLowerCase()}${index + 1}@tnstate.edu`
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

