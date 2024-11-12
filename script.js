// Sample student data
const students = [
  {
    name: 'Charles Darwin',
    id: 'ABC28491178',
    status: 'None sent',
    matching: 'Matched',
    score: 'N/A',
    major: 'Chemistry',
    college: 'Natural Sciences',
    classification: 'Junior',
    email: 'cdarwin1@my.tnstate.edu',
  },
  {
    name: 'Marie Curie',
    id: 'XYZ123456',
    status: 'Interviewed',
    matching: 'Not Matched',
    score: '85',
    major: 'Enviromental Sciences',
    college: 'Physical Sciences',
    classification: 'Sophmore',
    email: 'mcurie1@my.tnstate.edu',
  },
  {
    name: 'Ilbert Einstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
    major: 'Psychology',
    college: 'Natural Sciences',
    classification: 'Junior',
    email: 'ieinstein1@my.tnstate.edu',
  },
  {
    name: 'Plbert Einstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
    major: 'Enviromental Sciences',
    college: 'Agricultural',
    classification: 'Freshmen',
    email: 'peinstein1@my.tnstate.edu',
  },
  {
    name: 'Kolbert Jinstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
    major: 'Computer Science',
    college: 'Engineering',
    classification: 'Junior',
    email: 'kjinstein1@my.tnstate.edu',
  },
  {
    name: 'Ylbert Winstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
    major: 'Business Administration',
    college: 'Business',
    classification: 'Freshmen',
    email: 'ywinstein1@my.tnstate.edu',
  },
  {
    name: 'Nibert Kinstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
    major: 'Education',
    college: 'Literature',
    classification: 'Freshmen',
    email: 'nkinstein1@my.tnstate.edu',
  },
  {
    name: 'Aobert Minstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
    major: 'Arts Administration',
    college: 'Performing Arts',
    classification: 'Junior',
    email: 'aminstein1@my.tnstate.edu',
  },
  {
    name: 'Unbert Pinstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
    major: 'Neuroscience',
    college: 'Natural Sciences',
    classification: 'Sophomore',
    email: 'upinstein1@my.tnstate.edu',
  },
  {
    name: 'Ant Qinstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
    major: 'Animal Science',
    college: 'Agriculutral',
    classification: 'Freshmen',
    email: 'aqinstein1@my.tnstate.edu',
  },
  {
    name: 'Hand Binstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
    major: 'Electrical Engineering',
    college: 'Engineering',
    classification: 'Junior',
    email: 'hbinstein1@my.tnstate.edu',
  },
  {
    name: 'Obama Linstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
    major: 'Astrophysics',
    college: 'Physical Sciences',
    classification: 'Senior',
    email: 'olinstein1@my.tnstate.edu',
  },
  {
    name: 'Kamala Sinstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
    major: 'Nutrition',
    college: 'Agriculuture',
    classification: 'Senior',
    email: 'ksinstein1@my.tnstate.edu',
  },
  {
    name: 'Zinele Uinstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
    major: 'Biochemistry',
    college: 'Natural Sciences',
    classification: 'Junior',
    email: 'zuinstein1@my.tnstate.edu',
  },
  {
    name: 'Maimuna Binstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
    major: 'Mathematics',
    college: 'Education',
    classification: 'Sophomore',
    email: 'mbinstein1@my.tnstate.edu',
  },
  {
    name: 'Jean Vinstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
    major: 'Undecided',
    college: 'Undecided',
    classification: 'Freshmen',
    email: 'jvinstein1@my.tnstate.edu',
  },
  {
    name: 'Byran Cinstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '65',
    major: 'Health Care Administration',
    college: 'Health Sciences',
    classification: 'Freshmen',
    email: 'bcinstein1@my.tnstate.edu',
  },
  {
    name: 'Hrean Xinstein',
    id: 'DEF987654',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
    major: 'Pre-dentistry',
    college: 'Dental Hyigene',
    Classification: 'Junior',
    email: 'hxinstein1@my.tnstate.edu',
  },
  {
    name: 'Polte Haulson',
    id: 'DEF509534',
    status: 'Sent',
    matching: 'Matched',
    score: '90',
    major: 'Nursing clinicals',
    college: 'Nursing',
    Classification: 'Sopohmore',
    email: 'phaulson1@my.tnstate.edu',
  },
  {
    name: 'Georgia Peach',
    id: 'HUS73755',
    status: 'Interviewed',
    matching: 'Not Matched',
    score: '60',
    major: 'Pre-dentistry',
    college: 'Dental Hyigene',
    Classification: 'Senior',
    email: 'gpeach1@my.tnstate.edu',
  },
  // Add more student objects as needed
];

// Function to display students in the table
function displayStudents(studentList) {
  const studentListElement = document.getElementById('studentList');
  studentListElement.innerHTML = ''; // Clear previous results

  studentList.forEach((student) => {
    const row = document.createElement('tr');
    row.innerHTML = `  
          <td>${student.name}</td>  
          <td>${student.id}</td>  
          <td>${student.status}</td>  
          <td>${student.matching}</td>  
          <td>${student.score}</td>
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
      student.name.toLowerCase().includes(searchInput) ||
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
