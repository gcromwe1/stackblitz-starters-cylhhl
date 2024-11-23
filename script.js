// Fetch the mock.json file and work with it
fetch('mock.json')  // Make sure this is the correct path to your mock.json
  .then(response => response.json())
  .then(students => {
    const searchInput = document.getElementById('searchInput');
    const dropdown = document.getElementById('dropdown');
    const studentListElement = document.getElementById('studentList').getElementsByTagName('tbody')[0];
    const noResults = document.getElementById('noResults');
    const resultsSection = document.getElementById('resultsSection');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    // Pagination variables
    let currentPage = 1;
    const resultsPerPage = 10;

    // Save search criteria to localStorage
    function saveSearchCriteria(criteria) {
      localStorage.setItem('searchCriteria', JSON.stringify(criteria));
    }

    // Function to display students in the table
    function displayStudents(filteredStudents) {
      studentListElement.innerHTML = '';  // Clear previous results
      if (filteredStudents.length > 0) {
        const start = (currentPage - 1) * resultsPerPage;
        const end = start + resultsPerPage;
        const pageResults = filteredStudents.slice(start, end);
        pageResults.forEach(student => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${student.first_name} ${student.last_name}</td>
            <td>${student.id}</td>
            <td>${student.major}</td>
            <td>${student.college}</td>
            <td>${student.classification}</td>
            <td>${student.email}</td>
          `;
          studentListElement.appendChild(row);
        });

        // Show pagination buttons
        prevPageButton.style.display = currentPage > 1 ? 'inline-block' : 'none';
        nextPageButton.style.display = currentPage * resultsPerPage < filteredStudents.length ? 'inline-block' : 'none';

        noResults.style.display = 'none';  // Hide "No results" message if there are results
      } else {
        noResults.style.display = 'block';  // Show "No results" message if no results
      }
      resultsSection.style.display = filteredStudents.length > 0 ? 'block' : 'none';
    }

    // Function to filter students based on search criteria
    function filterStudents() {
      const searchText = searchInput.value.toLowerCase().trim();
      if (searchText.length === 0) {
        dropdown.style.display = 'none';
        resultsSection.style.display = 'none';
        return;
      }

      const filteredStudents = students.filter(student => {
        const fullName = `${student.first_name} ${student.last_name}`.toLowerCase();
        const major = student.major.toLowerCase();
        const college = student.college.toLowerCase();
        const classification = student.classification.toLowerCase();
        return (
          fullName.includes(searchText) ||
          major.includes(searchText) ||
          college.includes(searchText) ||
          classification.includes(searchText)
        );
      });

      dropdown.innerHTML = '';
      if (filteredStudents.length > 0) {
        dropdown.style.display = 'block';
        filteredStudents.forEach(student => {
          const suggestion = document.createElement('div');
          suggestion.classList.add('dropdown-item');
          suggestion.innerText = `${student.first_name} ${student.last_name}`;
          suggestion.addEventListener('click', () => {
            searchInput.value = suggestion.innerText;
            dropdown.style.display = 'none';
            displayStudents(filteredStudents);
          });
          dropdown.appendChild(suggestion);
        });
      } else {
        dropdown.style.display = 'none';
      }

      // Save the current search criteria
      saveSearchCriteria({ searchText });

      // Display the filtered students
      displayStudents(filteredStudents);
    }

    // Function to change the page for pagination
    function changePage(direction) {
      const savedCriteria = JSON.parse(localStorage.getItem('searchCriteria')) || {};
      searchInput.value = savedCriteria.searchText || '';
      const searchText = searchInput.value.toLowerCase().trim();
      const filteredStudents = students.filter(student => {
        const fullName = `${student.first_name} ${student.last_name}`.toLowerCase();
        const major = student.major.toLowerCase();
        const college = student.college.toLowerCase();
        const classification = student.classification.toLowerCase();
        return (
          fullName.includes(searchText) ||
          major.includes(searchText) ||
          college.includes(searchText) ||
          classification.includes(searchText)
        );
      });
      if (direction === 1) {
        currentPage++;
      } else if (direction === -1) {
        currentPage--;
      }
      displayStudents(filteredStudents);
    }

    // Event listeners
    searchInput.addEventListener('click', () => {
      searchInput.focus();
      dropdown.style.display = 'none'; // Close dropdown when clicking input
    });

    searchInput.addEventListener('input', filterStudents);  // Live search as you type

    prevPageButton.addEventListener('click', () => changePage(-1));
    nextPageButton.addEventListener('click', () => changePage(1));

  })
  .catch(error => {
    console.error('Error fetching mock data:', error);
  });
// Fetch the mock.json file and work with it
fetch('mock.json')  // Make sure this is the correct path to your mock.json
  .then(response => response.json())
  .then(students => {
    const searchInput = document.getElementById('searchInput');
    const dropdown = document.getElementById('dropdown');
    const studentListElement = document.getElementById('studentList').getElementsByTagName('tbody')[0];
    const noResults = document.getElementById('noResults');
    const resultsSection = document.getElementById('resultsSection');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    // Pagination variables
    let currentPage = 1;
    const resultsPerPage = 10;

    // Save search criteria to localStorage
    function saveSearchCriteria(criteria) {
      localStorage.setItem('searchCriteria', JSON.stringify(criteria));
    }

    // Function to display students in the table
    function displayStudents(filteredStudents) {
      studentListElement.innerHTML = '';  // Clear previous results
      if (filteredStudents.length > 0) {
        const start = (currentPage - 1) * resultsPerPage;
        const end = start + resultsPerPage;
        const pageResults = filteredStudents.slice(start, end);
        pageResults.forEach(student => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${student.first_name} ${student.last_name}</td>
            <td>${student.id}</td>
            <td>${student.major}</td>
            <td>${student.college}</td>
            <td>${student.classification}</td>
            <td>${student.email}</td>
          `;
          studentListElement.appendChild(row);
        });

        // Show pagination buttons
        prevPageButton.style.display = currentPage > 1 ? 'inline-block' : 'none';
        nextPageButton.style.display = currentPage * resultsPerPage < filteredStudents.length ? 'inline-block' : 'none';

        noResults.style.display = 'none';  // Hide "No results" message if there are results
      } else {
        noResults.style.display = 'block';  // Show "No results" message if no results
      }
      resultsSection.style.display = filteredStudents.length > 0 ? 'block' : 'none';
    }

    // Function to filter students based on search criteria
    function filterStudents() {
      const searchText = searchInput.value.toLowerCase().trim();
      if (searchText.length === 0) {
        dropdown.style.display = 'none';
        resultsSection.style.display = 'none';
        return;
      }

      const filteredStudents = students.filter(student => {
        const fullName = `${student.first_name} ${student.last_name}`.toLowerCase();
        const major = student.major.toLowerCase();
        const college = student.college.toLowerCase();
        const classification = student.classification.toLowerCase();
        return (
          fullName.includes(searchText) ||
          major.includes(searchText) ||
          college.includes(searchText) ||
          classification.includes(searchText)
        );
      });

      dropdown.innerHTML = '';
      if (filteredStudents.length > 0) {
        dropdown.style.display = 'block';
        filteredStudents.forEach(student => {
          const suggestion = document.createElement('div');
          suggestion.classList.add('dropdown-item');
          suggestion.innerText = `${student.first_name} ${student.last_name}`;
          suggestion.addEventListener('click', () => {
            searchInput.value = suggestion.innerText;
            dropdown.style.display = 'none';
            displayStudents(filteredStudents);
          });
          dropdown.appendChild(suggestion);
        });
      } else {
        dropdown.style.display = 'none';
      }

      // Save the current search criteria
      saveSearchCriteria({ searchText });

      // Display the filtered students
      displayStudents(filteredStudents);
    }

    // Function to change the page for pagination
    function changePage(direction) {
      const savedCriteria = JSON.parse(localStorage.getItem('searchCriteria')) || {};
      searchInput.value = savedCriteria.searchText || '';
      const searchText = searchInput.value.toLowerCase().trim();
      const filteredStudents = students.filter(student => {
        const fullName = `${student.first_name} ${student.last_name}`.toLowerCase();
        const major = student.major.toLowerCase();
        const college = student.college.toLowerCase();
        const classification = student.classification.toLowerCase();
        return (
          fullName.includes(searchText) ||
          major.includes(searchText) ||
          college.includes(searchText) ||
          classification.includes(searchText)
        );
      });
      if (direction === 1) {
        currentPage++;
      } else if (direction === -1) {
        currentPage--;
      }
      displayStudents(filteredStudents);
    }

    // Event listeners
    searchInput.addEventListener('click', () => {
      searchInput.focus();
      dropdown.style.display = 'none'; // Close dropdown when clicking input
    });

    searchInput.addEventListener('input', filterStudents);  // Live search as you type

    prevPageButton.addEventListener('click', () => changePage(-1));
    nextPageButton.addEventListener('click', () => changePage(1));

  })
  .catch(error => {
    console.error('Error fetching mock data:', error);
  });






