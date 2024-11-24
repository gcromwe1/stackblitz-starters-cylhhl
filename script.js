fetch('mock.json')  
  .then(response => response.json())
  .then(students => {

    // Add GPA randomly
    students.forEach(student => {
      student.gpa = (Math.random() * (4.0 - 2.6) + 2.6).toFixed(2); 
    });

    // DOM Elements
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const dropdown = document.getElementById('dropdown');
    const studentListElement = document.getElementById('studentList').getElementsByTagName('tbody')[0];
    const noResults = document.getElementById('noResults');
    const resultsSection = document.getElementById('resultsSection');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');
    const clearSearchButton = document.getElementById('clearSearchButton');  // Clear search button

    let currentPage = 1;
    const resultsPerPage = 10;
    let filteredStudents = [];

    // Debounce search input
    let debounceTimer;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        filterStudents();
      }, 300);  // Delay filtering for 300ms after user stops typing
    });

    // Handle clear search button click
    clearSearchButton.addEventListener('click', () => {
      searchInput.value = '';
      filterStudents();
    });

    // Save search criteria in localStorage (for history)
    function saveSearchCriteria(criteria) {
      localStorage.setItem('searchCriteria', JSON.stringify(criteria));
    }

    // Generate email for students
    function createEmail(student) {
      const firstNameLetter = student.first_name.charAt(0).toLowerCase();
      const lastName = student.last_name.toLowerCase();
      const studentId = student.id.toString();
      const lastTwoDigits = studentId.slice(-2);
      return `${firstNameLetter}${lastName}${lastTwoDigits}@tnstate.edu`;
    }

    // Create a row for a student
    function createRow(student) {
      const email = createEmail(student);
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.first_name} ${student.last_name}</td>
        <td>${student.id}</td>
        <td>${student.major || "N/A"}</td>  <!-- Handle missing fields -->
        <td>${student.college || "N/A"}</td>
        <td>${student.classification || "N/A"}</td>
        <td>${email}</td>
        <td>${student.gpa}</td>
      `;
      return row;
    }

    // Display students (pagination, etc.)
    function displayStudents(filteredStudents) {
      studentListElement.innerHTML = '';  
      if (filteredStudents.length > 0) {
        const start = (currentPage - 1) * resultsPerPage;
        const end = start + resultsPerPage;
        const pageResults = filteredStudents.slice(start, end);
        pageResults.forEach(student => {
          const row = createRow(student);
          studentListElement.appendChild(row);
        });
        
        prevPageButton.style.display = currentPage > 1 ? 'inline-block' : 'none';
        nextPageButton.style.display = currentPage * resultsPerPage < filteredStudents.length ? 'inline-block' : 'none';
        noResults.style.display = 'none';
      } else {
        noResults.style.display = 'block';
      }
      resultsSection.style.display = filteredStudents.length > 0 ? 'block' : 'none';
    }

    // Filter students based on search input
    function filterStudents() {
      const searchText = searchInput.value.toLowerCase().trim();
      if (searchText.length === 0) {
        dropdown.style.display = 'none';
        resultsSection.style.display = 'none';
        return;
      }

      filteredStudents = students.filter(student => {
        const fullName = `${student.first_name} ${student.last_name}`.toLowerCase();
        const major = student.major ? student.major.toLowerCase() : '';
        const college = student.college ? student.college.toLowerCase() : '';
        const classification = student.classification ? student.classification.toLowerCase() : '';
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

      saveSearchCriteria({ searchText });
      displayStudents(filteredStudents);
    }

    // Change page (pagination)
    function changePage(direction) {
      const totalPages = Math.ceil(filteredStudents.length / resultsPerPage);
      if (direction === 1 && currentPage < totalPages) {
        currentPage++;
      } else if (direction === -1 && currentPage > 1) {
        currentPage--;
      }
      displayStudents(filteredStudents);
    }

    // Event listeners
    searchButton.addEventListener('click', filterStudents);
    searchInput.addEventListener('click', () => {
      dropdown.style.display = 'none';
    });

    prevPageButton.addEventListener('click', () => changePage(-1));
    nextPageButton.addEventListener('click', () => changePage(1));

    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target) && event.target !== searchInput) {
        dropdown.style.display = 'none';
      }
    });

    // Fetch data and catch errors
  })
  .catch(error => {
    console.error('Error fetching mock data:', error);
    alert("There was an error loading the data. Please try again later.");
  });
