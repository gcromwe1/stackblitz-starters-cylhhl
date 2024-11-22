// Sample student data
const students = [
  {
    first: 'Bobbi',
    last: 'Darwin',
    id: 'ABC28491178',
    status: 'None sent',
    major: 'Chemistry',
    college: 'Natural Sciences',
    classification: 'Junior',
    email: 'bdarwin1@my.tnstate.edu',
  },
  {
    first: 'Marie',
    last: 'Curie',
    id: 'XYZ12345601',
    status: 'Interviewed',
    major: 'Environmental Sciences',
    college: 'Physical Sciences',
    classification: 'Sophomore',
    email: 'mcurie1@my.tnstate.edu',
  },
  {
    first: 'Albert',
    last: 'Einstein',
    id: 'DEF98765402',
    status: 'Sent',
    major: 'Physics',
    college: 'Natural Sciences',
    classification: 'Junior',
    email: 'aeinstein1@my.tnstate.edu',
  },
  {
    first: 'Isaac',
    last: 'Newton',
    id: 'GHI45678903',
    status: 'None sent',
    major: 'Mathematics',
    college: 'Natural Sciences',
    classification: 'Senior',
    email: 'inewton1@my.tnstate.edu',
  },
  {
    first: 'Rosalind',
    last: 'Franklin',
    id: 'JKL78901204',
    status: 'Interviewed',
    major: 'Biology',
    college: 'Life Sciences',
    classification: 'Sophomore',
    email: 'rfranklin1@my.tnstate.edu',
  },
  {
    first: 'Nikola',
    last: 'Tesla',
    id: 'MNO23456705',
    status: 'Sent',
    major: 'Electrical Engineering',
    college: 'Engineering',
    classification: 'Senior',
    email: 'ntesla1@my.tnstate.edu',
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    id: 'PQR56789006',
    status: 'None sent',
    major: 'Computer Science',
    college: 'Engineering',
    classification: 'Junior',
    email: 'alovelace1@my.tnstate.edu',
  },
  {
    first: 'Charles',
    last: 'Darwin',
    id: 'STU89012307',
    status: 'Interviewed',
    major: 'Biology',
    college: 'Life Sciences',
    classification: 'Senior',
    email: 'cdarwin2@my.tnstate.edu',
  },
  {
    first: 'Jane',
    last: 'Goodall',
    id: 'VWX12345608',
    status: 'Sent',
    major: 'Anthropology',
    college: 'Social Sciences',
    classification: 'Sophomore',
    email: 'jgoodall1@my.tnstate.edu',
  },
  {
    first: 'Stephen',
    last: 'Hawking',
    id: 'YZA45678909',
    status: 'None sent',
    major: 'Physics',
    college: 'Natural Sciences',
    classification: 'Junior',
    email: 'shawking1@my.tnstate.edu',
  },
  {
    first: 'Emmett',
    last: 'Brown',
    id: 'QRS12378990',
    status: 'Sent',
    major: 'Physics',
    college: 'Natural Sciences',
    classification: 'Senior',
    email: 'ebrown1@my.tnstate.edu',
  },
  {
    first: 'Lise',
    last: 'Meitner',
    id: 'TUV45612391',
    status: 'Interviewed',
    major: 'Nuclear Physics',
    college: 'Physical Sciences',
    classification: 'Junior',
    email: 'lmeitner1@my.tnstate.edu',
  },
  {
    first: 'Alan',
    last: 'Turing',
    id: 'WXY78945692',
    status: 'None sent',
    major: 'Computer Science',
    college: 'Engineering',
    classification: 'Sophomore',
    email: 'aturing1@my.tnstate.edu',
  },
  {
    first: 'Rachel',
    last: 'Carson',
    id: 'ZAB01278993',
    status: 'Sent',
    major: 'Environmental Science',
    college: 'Natural Sciences',
    classification: 'Senior',
    email: 'rcarson1@my.tnstate.edu',
  },
  {
    first: 'Richard',
    last: 'Feynman',
    id: 'CDE34512394',
    status: 'Interviewed',
    major: 'Physics',
    college: 'Natural Sciences',
    classification: 'Junior',
    email: 'rfeynman1@my.tnstate.edu',
  },
  {
    first: 'Barbara',
    last: 'McClintock',
    id: 'FGH67845695',
    status: 'None sent',
    major: 'Genetics',
    college: 'Life Sciences',
    classification: 'Senior',
    email: 'bmcclintock1@my.tnstate.edu',
  },
  {
    first: 'Carl',
    last: 'Sagan',
    id: 'IJK90178996',
    status: 'Sent',
    major: 'Astronomy',
    college: 'Physical Sciences',
    classification: 'Sophomore',
    email: 'csagan1@my.tnstate.edu',
  },
  {
    first: 'Grace',
    last: 'Hopper',
    id: 'LMN23412397',
    status: 'Interviewed',
    major: 'Computer Science',
    college: 'Engineering',
    classification: 'Junior',
    email: 'ghopper1@my.tnstate.edu',
  },
  {
    first: 'Edwin',
    last: 'Hubble',
    id: 'OPQ56745698',
    status: 'None sent',
    major: 'Astronomy',
    college: 'Physical Sciences',
    classification: 'Senior',
    email: 'ehubble1@my.tnstate.edu',
  },
  {
    first: 'Donna',
    last: 'Strickland',
    id: 'RST89078999',
    status: 'Sent',
    major: 'Physics',
    college: 'Natural Sciences',
    classification: 'Sophomore',
    email: 'dstrickland1@my.tnstate.edu',
  },
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
