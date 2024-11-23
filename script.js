// Fetch the student data from MOCK_DATA.json
fetch('mock.json')
  .then((response) => response.json())
  .then((students) => {
    // Store data for later use
    const allStudents = students;

    // Display all students initially
    displayStudents(allStudents);

    // Search functionality
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', () => searchStudents(allStudents, searchInput.value));
    searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') searchStudents(allStudents, searchInput.value);
    });
  })
  .catch((error) => {
    console.error('Error fetching the JSON file:', error);
  });

// Function to display students in the table
function displayStudents(studentList) {
  const studentListElement = document.getElementById('studentList');
  studentListElement.innerHTML = ''; // Clear the previous list

  studentList.forEach((student) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student['first_name']} ${student['last_name']}</td>
      <td>${student.id}</td>
      <td>${student.major}</td>
      <td>${student.college}</td>
      <td>${student.classification}</td>
      <td>${student.email}</td>
    `;
    studentListElement.appendChild(row);
  });
}

// Function to handle search
function searchStudents(allStudents, query) {
  const lowerCaseQuery = query.trim().toLowerCase();
  const filteredStudents = allStudents.filter((student) =>
    `${student['first name']} ${student['last name']}`.toLowerCase().includes(lowerCaseQuery) ||
    student.id.toString().includes(lowerCaseQuery) ||
    student.college.toLowerCase().includes(lowerCaseQuery)
  );

  const noResultsElement = document.getElementById('noResults');
  if (filteredStudents.length > 0) {
    noResultsElement.style.display = 'none';
    displayStudents(filteredStudents);
  } else {
    document.getElementById('studentList').innerHTML = '';
    noResultsElement.style.display = 'block';
  }
}

