fetch('mock.json')  
  .then(response => response.json())
  .then(students => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const dropdown = document.getElementById('dropdown');
    const studentListElement = document.getElementById('studentList').getElementsByTagName('tbody')[0];
    const noResults = document.getElementById('noResults');
    const resultsSection = document.getElementById('resultsSection');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

   
    let currentPage = 1;
    const resultsPerPage = 10;

   
    function saveSearchCriteria(criteria) {
      localStorage.setItem('searchCriteria', JSON.stringify(criteria));
    }

   
    function displayStudents(filteredStudents) {
      studentListElement.innerHTML = '';  
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

        
        prevPageButton.style.display = currentPage > 1 ? 'inline-block' : 'none';
        nextPageButton.style.display = currentPage * resultsPerPage < filteredStudents.length ? 'inline-block' : 'none';

        noResults.style.display = 'none';  
      } else {
        noResults.style.display = 'block';  // Show "No results" message if no results
      }
      resultsSection.style.display = filteredStudents.length > 0 ? 'block' : 'none';
    }

    let filteredStudents = [];

    function filterStudents() {
      const searchText = searchInput.value.toLowerCase().trim();
      if (searchText.length === 0) {
        dropdown.style.display = 'none';
        resultsSection.style.display = 'none';
        return;
      }
    
      filteredStudents = students.filter(student => {
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
    
      // Dropdown suggestions
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
            displayStudents(filteredStudents); // Re-display the filtered list
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
    searchButton.addEventListener('click', filterStudents);  // Trigger search when button is clicked
    searchInput.addEventListener('click', () => {
      dropdown.style.display = 'none'; // Close dropdown when clicking input
    });

    searchInput.addEventListener('input', () => {
      if (searchInput.value.trim().length < 3) {
        dropdown.style.display = 'none'; // Hide dropdown if search text is too short
      } else {
        filterStudents();
      }
    });

    prevPageButton.addEventListener('click', () => changePage(-1));
    nextPageButton.addEventListener('click', () => changePage(1));

  })
  .catch(error => {
    console.error('Error fetching mock data:', error);
  });

















