// Student
const students = Array.from({ length: 801 }, (_, index) => {
  const scientistNames = [
    { first: 'Aaliyah', last: 'Smith' },
    { first: 'Kwame', last: 'Owusu' },
    { first: 'Zuri', last: 'Johnson' },
    { first: 'Jamal', last: 'Williams' },
    { first: 'Imani', last: 'Davis' },
    { first: 'Tariq', last: 'Miller' },
    { first: 'Kofi', last: 'Mensah' },
    { first: 'Amara', last: 'Nkrumah' },
    { first: 'Sade', last: 'Johnson' },
    { first: 'Tunde', last: 'Adeyemi' },
    { first: 'Adama', last: 'Diallo' },
    { first: 'Adebayo', last: 'Oluwaseun' },
    { first: 'Yara', last: 'Johnson' },
    { first: 'Deja', last: 'Harris' },
    { first: 'Tiana', last: 'Baptiste' },
    { first: 'Kwesi', last: 'Appiah' },
    { first: 'Marley', last: 'Clarke' },
    { first: 'Chike', last: 'Okafor' },
    { first: 'Oluwadamilola', last: 'Adewale' },
    { first: 'Makeda', last: 'Thompson' },
    { first: 'Bolanle', last: 'Oluwole' },
    { first: 'Zaynab', last: 'Faruk' },
    { first: 'Damari', last: 'Williams' },
    { first: 'Tinashe', last: 'Chirwa' },
    { first: 'Kamilah', last: 'Williams' },
    { first: 'Oluwaseun', last: 'Ogunleye' },
    { first: 'Jahlil', last: 'Brown' },
    { first: 'Xander', last: 'Moses' },
    { first: 'Adama', last: 'Cissé' },
    { first: 'Oluwafemi', last: 'Oladipo' },
    { first: 'Naomi', last: 'Hernandez' },
    { first: 'Simeon', last: 'Mensah' },
    { first: 'Teshia', last: 'James' },
    { first: 'Chinua', last: 'Achebe' },
    { first: 'Tariq', last: 'Jones' },
    { first: 'Janelle', last: 'Harrison' },
    { first: 'Kamara', last: 'Smith' },
    { first: 'Nia', last: 'Robinson' },
    { first: 'Tunde', last: 'Soyinka' },
    { first: 'Zuri', last: 'Banton' },
    { first: 'Kofi', last: 'Sarpong' },
    { first: 'Fola', last: 'Adeyemi' },
    { first: 'Shanique', last: 'Brown' },
    { first: 'Tariq', last: 'Moore' },
    { first: 'Imara', last: 'James' },
    { first: 'Chukwudi', last: 'Okorie' },
    { first: 'Lailah', last: 'Williams' },
    { first: 'Amara', last: 'Okafor' },
    { first: 'Ayo', last: 'Bello' },
    { first: 'Oluwadamilola', last: 'Ogunlade' },
    { first: 'Kehinde', last: 'Adebayo' },
    { first: 'Zenaida', last: 'Perez' },
    { first: 'Jamila', last: 'Jackson' },
    { first: 'Oluwaseun', last: 'Adeleke' },
    { first: 'Kiana', last: 'Miller' },
    { first: 'Kwame', last: 'Afriyie' },
    { first: 'Shantel', last: 'Williams' },
    { first: 'Eshe', last: 'Baba' },
    { first: 'Tameka', last: 'Davis' },
    { first: 'Marcellus', last: 'Brown' },
    { first: 'Sade', last: 'Johnson' },
    { first: 'Omari', last: 'Nash' },
    { first: 'Nyasha', last: 'Chirisa' },
    { first: 'Tanya', last: 'Jones' },
    { first: 'Khadija', last: 'Mohamed' },
    { first: 'Dante', last: 'Garcia' },
    { first: 'Jahari', last: 'King' },
    { first: 'Rasheed', last: 'Jones' },
    { first: 'Zahra', last: 'Ali' },
    { first: 'Kendrick', last: 'Moore' },
    { first: 'Amina', last: 'Shakur' },
    { first: 'Zion', last: 'Chavez' },
    { first: 'Tariq', last: 'Green' },
    { first: 'Zuri', last: 'Williams' },
    { first: 'Kwasi', last: 'Boakye' },
    { first: 'Deja', last: 'Stewart' },
    { first: 'Ashanti', last: 'Taylor' },
    { first: 'Fola', last: 'Adegbite' },
    { first: 'Alika', last: 'Baker' },
    { first: 'Taj', last: 'Shakur' },
    { first: 'Nyasha', last: 'Moyo' },
    { first: 'Laila', last: 'McKenzie' },
    { first: 'Jabari', last: 'Nelson' },
    { first: 'Kwame', last: 'Mensah' },
    { first: 'Simeon', last: 'Thompson' },
    { first: 'Imani', last: 'Moore' },
    { first: 'Shanice', last: 'Jackson' },
    { first: 'Tajani', last: 'Olawale' },
    { first: 'Tariq', last: 'Martin' },
    { first: 'Marisha', last: 'Charles' },
    { first: 'Kamari', last: 'Williams' },
    { first: 'Tasha', last: 'Patterson' },
    { first: 'Janelle', last: 'Nash' },
    { first: 'Javon', last: 'Robinson' },
    { first: 'Jahari', last: 'Wright' },
    { first: 'Kofi', last: 'Owusu' },
    { first: 'Sade', last: 'Smith' },
    { first: 'Rashida', last: 'Ali' },
    { first: 'Saniyah', last: 'Jones' },
    { first: 'Amina', last: 'Johnson' },
    { first: 'Oluwadamilola', last: 'Olumide' },
    { first: 'Sanaa', last: 'Muhammad' },
    { first: 'Mekhi', last: 'Davis' },
    { first: 'Kwame', last: 'Otieno' },
    { first: 'Sanaa', last: 'Bint' },
    { first: 'Kendrick', last: 'Richards' },
    { first: 'Omari', last: 'Ali' },
    { first: 'Anika', last: 'Brown' },
    { first: 'Chinua', last: 'Abiola' },
    { first: 'Tameka', last: 'Williams' },
    { first: 'Lerato', last: 'Rama' },
    { first: 'Jamal', last: 'Benson' },
    { first: 'Imara', last: 'Taylor' },
    { first: 'Tawanda', last: 'Moyo' },
    { first: 'Kendrick', last: 'Shakur' },
    { first: 'Kamara', last: 'Lewis' },
    { first: 'Nyasha', last: 'Chirume' },
    { first: 'Sadiya', last: 'Ali' },
    { first: 'Kofi', last: 'Addo' },
    { first: 'Micaiah', last: 'Nelson' },
    { first: 'Kwesi', last: 'Nkrumah' },
    { first: 'Imani', last: 'Martinez' },
    { first: 'Oluwadamilola', last: 'Obi' },
    { first: 'Ayodele', last: 'Adebowale' },
    { first: 'Zane', last: 'Anderson' },
    { first: 'Asante', last: 'Owusu' },
    { first: 'Javon', last: 'Thompson' },
    { first: 'Kwame', last: 'Boakye' },
    { first: 'Aaliyah', last: 'Morris' },
    { first: 'Deja', last: 'Cameron' },
    { first: 'Imani', last: 'Williams' },
    { first: 'Kamari', last: 'Samuels' },
    { first: 'Kwabena', last: 'Abugri' },
    { first: 'Tariq', last: 'Washington' },
    { first: 'Amara', last: 'Adams' },
    { first: 'Kamari', last: 'Owusu' },
    { first: 'Zola', last: 'Reed' },
    { first: 'Jahari', last: 'Tucker' },
    { first: 'Nia', last: 'Ferguson' },
    { first: 'Aaliyah', last: 'Smith' },
    { first: 'Kwame', last: 'Owusu' },
    { first: 'Zuri', last: 'Johnson' },
    { first: 'Jamal', last: 'Williams' },
    { first: 'Imani', last: 'Davis' },
    { first: 'Tariq', last: 'Miller' },
    { first: 'Kofi', last: 'Mensah' },
    { first: 'Amara', last: 'Nkrumah' },
    { first: 'Sade', last: 'Johnson' },
    { first: 'Tunde', last: 'Adeyemi' },
    { first: 'Adama', last: 'Diallo' },
    { first: 'Adebayo', last: 'Oluwaseun' },
    { first: 'Yara', last: 'Johnson' },
    { first: 'Deja', last: 'Harris' },
    { first: 'Tiana', last: 'Baptiste' },
    { first: 'Kwesi', last: 'Appiah' },
    { first: 'Marley', last: 'Clarke' },
    { first: 'Chike', last: 'Okafor' },
    { first: 'Oluwadamilola', last: 'Adewale' },
    { first: 'Makeda', last: 'Thompson' },
    { first: 'Bolanle', last: 'Oluwole' },
    { first: 'Zaynab', last: 'Faruk' },
    { first: 'Damari', last: 'Williams' },
    { first: 'Tinashe', last: 'Chirwa' },
    { first: 'Kamilah', last: 'Williams' },
    { first: 'Oluwaseun', last: 'Ogunleye' },
    { first: 'Jahlil', last: 'Brown' },
    { first: 'Xander', last: 'Moses' },
    { first: 'Adama', last: 'Cissé' },
    { first: 'Oluwafemi', last: 'Oladipo' },
    { first: 'Naomi', last: 'Hernandez' },
    { first: 'Simeon', last: 'Mensah' },
    { first: 'Teshia', last: 'James' },
    { first: 'Chinua', last: 'Achebe' },
    { first: 'Tariq', last: 'Jones' },
    { first: 'Janelle', last: 'Harrison' },
    { first: 'Kamara', last: 'Smith' },
    { first: 'Nia', last: 'Robinson' },
    { first: 'Tunde', last: 'Soyinka' },
    { first: 'Zuri', last: 'Banton' },
    { first: 'Kofi', last: 'Sarpong' },
    { first: 'Fola', last: 'Adeyemi' },
    { first: 'Shanique', last: 'Brown' },
    { first: 'Tariq', last: 'Moore' },
    { first: 'Imara', last: 'James' },
    { first: 'Chukwudi', last: 'Okorie' },
    { first: 'Lailah', last: 'Williams' },
    { first: 'Amara', last: 'Okafor' },
    { first: 'Ayo', last: 'Bello' },
    { first: 'Oluwadamilola', last: 'Ogunlade' },
    { first: 'Kehinde', last: 'Adebayo' },
    { first: 'Zenaida', last: 'Perez' },
    { first: 'Jamila', last: 'Jackson' },
    { first: 'Oluwaseun', last: 'Adeleke' },
    { first: 'Kiana', last: 'Miller' },
    { first: 'Kwame', last: 'Afriyie' },
    { first: 'Shantel', last: 'Williams' },
    { first: 'Eshe', last: 'Baba' },
    { first: 'Tameka', last: 'Davis' },
    { first: 'Marcellus', last: 'Brown' },
    { first: 'Sade', last: 'Johnson' },
    { first: 'Omari', last: 'Nash' },
    { first: 'Nyasha', last: 'Chirisa' },
    { first: 'Tanya', last: 'Jones' },
    { first: 'Khadija', last: 'Mohamed' },
    { first: 'Dante', last: 'Garcia' },
    { first: 'Jahari', last: 'King' },
    { first: 'Rasheed', last: 'Jones' },
    { first: 'Zahra', last: 'Ali' },
    { first: 'Kendrick', last: 'Moore' },
    { first: 'Amina', last: 'Shakur' },
    { first: 'Zion', last: 'Chavez' },
    { first: 'Tariq', last: 'Green' },
    { first: 'Zuri', last: 'Williams' },
    { first: 'Kwasi', last: 'Boakye' },
    { first: 'Deja', last: 'Stewart' },
    { first: 'Ashanti', last: 'Taylor' },
    { first: 'Fola', last: 'Adegbite' },
    { first: 'Alika', last: 'Baker' },
    { first: 'Taj', last: 'Shakur' },
    { first: 'Nyasha', last: 'Moyo' },
    { first: 'Laila', last: 'McKenzie' },
    { first: 'Jabari', last: 'Nelson' },
    { first: 'Kwame', last: 'Mensah' },
    { first: 'Simeon', last: 'Thompson' },
    { first: 'Imani', last: 'Moore' },
    { first: 'Shanice', last: 'Jackson' },
    { first: 'Tajani', last: 'Olawale' },
    { first: 'Tariq', last: 'Martin' },
    { first: 'Marisha', last: 'Charles' },
    { first: 'Kamari', last: 'Williams' },
    { first: 'Tasha', last: 'Patterson' },
    { first: 'Janelle', last: 'Nash' },
    { first: 'Javon', last: 'Robinson' },
    { first: 'Jahari', last: 'Wright' },
    { first: 'Kofi', last: 'Owusu' },
    { first: 'Sade', last: 'Smith' },
    { first: 'Rashida', last: 'Ali' },
    { first: 'Saniyah', last: 'Jones' },
    { first: 'Amina', last: 'Johnson' },
    { first: 'Oluwadamilola', last: 'Olumide' },
    { first: 'Sanaa', last: 'Muhammad' },
    { first: 'Mekhi', last: 'Davis' },
    { first: 'Kwame', last: 'Otieno' },
    { first: 'Sanaa', last: 'Bint' },
    { first: 'Kendrick', last: 'Richards' },
    { first: 'Omari', last: 'Ali' },
    { first: 'Anika', last: 'Brown' },
    { first: 'Chinua', last: 'Abiola' },
    { first: 'Tameka', last: 'Williams' },
    { first: 'Lerato', last: 'Rama' },
    { first: 'Jamal', last: 'Benson' },
    { first: 'Imara', last: 'Taylor' },
    { first: 'Tawanda', last: 'Moyo' },
    { first: 'Kendrick', last: 'Shakur' },
    { first: 'Kamara', last: 'Lewis' },
    { first: 'Nyasha', last: 'Chirume' },
    { first: 'Sadiya', last: 'Ali' },
    { first: 'Kofi', last: 'Addo' },
    { first: 'Micaiah', last: 'Nelson' },
    { first: 'Kwesi', last: 'Nkrumah' },
    { first: 'Imani', last: 'Martinez' },
    { first: 'Oluwadamilola', last: 'Obi' },
    { first: 'Ayodele', last: 'Adebowale' },
    { first: 'Zane', last: 'Anderson' },
    { first: 'Asante', last: 'Owusu' },
    { first: 'Javon', last: 'Thompson' },
    { first: 'Kwame', last: 'Boakye' },
    { first: 'Aaliyah', last: 'Morris' },
    { first: 'Deja', last: 'Cameron' },
    { first: 'Imani', last: 'Williams' },
    { first: 'Kamari', last: 'Samuels' },
    { first: 'Kwabena', last: 'Abugri' },
    { first: 'Tariq', last: 'Washington' },
    { first: 'Amara', last: 'Adams' },
    { first: 'Kamari', last: 'Owusu' },
    { first: 'Zola', last: 'Reed' },
    { first: 'Jahari', last: 'Tucker' },
    { first: 'Nia', last: 'Ferguson' },
    { first: 'Luca', last: 'Rossi' },
    { first: 'Sofia', last: 'Müller' },
    { first: 'Oliver', last: 'Jansen' },
    { first: 'Emma', last: 'Dubois' },
    { first: 'Maxim', last: 'Ivanov' },
    { first: 'Ava', last: 'Kowalski' },
    { first: 'Liam', last: 'Schneider' },
    { first: 'Mia', last: 'Petrovic' },
    { first: 'Matteo', last: 'Bianchi' },
    { first: 'Isabella', last: 'Larsen' },
    { first: 'Mason', last: 'Hansen' },
    { first: 'Lily', last: 'Andersen' },
    { first: 'Giovanni', last: 'Ferrari' },
    { first: 'Zoe', last: 'Martínez' },
    { first: 'Hugo', last: 'González' },
    { first: 'Charlotte', last: 'Dupont' },
    { first: 'Theo', last: 'Meyer' },
    { first: 'Ella', last: 'Novák' },
    { first: 'Jakub', last: 'Kowalczyk' },
    { first: 'Amélie', last: 'Leclerc' },
    { first: 'Leonardo', last: 'Costa' },
    { first: 'Sophia', last: 'Sánchez' },
    { first: 'Oscar', last: 'Kozłowski' },
    { first: 'Olivia', last: 'Garcia' },
    { first: 'Ethan', last: 'Sanchez' },
    { first: 'Chloe', last: 'Bauer' },
    { first: 'Luca', last: 'Rossi' },
    { first: 'Sofia', last: 'Muller' },
    { first: 'Oliver', last: 'Jansen' },
    { first: 'Emma', last: 'Dubois' },
    { first: 'Maxim', last: 'Ivanov' },
    { first: 'Ava', last: 'Kowalski' },
    { first: 'Liam', last: 'Schneider' },
    { first: 'Mia', last: 'Petrovic' },
    { first: 'Matteo', last: 'Bianchi' },
    { first: 'Isabella', last: 'Larsen' },
    { first: 'Mason', last: 'Hansen' },
    { first: 'Lily', last: 'Andersen' },
    { first: 'Giovanni', last: 'Ferrari' },
    { first: 'Zoe', last: 'Martinez' },
    { first: 'Hugo', last: 'Gonzalez' },
    { first: 'Charlotte', last: 'Dupont' },
    { first: 'Theo', last: 'Meyer' },
    { first: 'Ella', last: 'Novak' },
    { first: 'Jakub', last: 'Kowalczyk' },
    { first: 'Amelie', last: 'Leclerc' },
    { first: 'Leonardo', last: 'Costa' },
    { first: 'Sophia', last: 'Sanchez' },
    { first: 'Oscar', last: 'Kozlowski' },
    { first: 'Olivia', last: 'Garcia' },
    { first: 'Ethan', last: 'Sanchez' },
    { first: 'Chloe', last: 'Bauer' },
    { first: 'Nicolas', last: 'Martins' },
    { first: 'Lena', last: 'Rossi' },
    { first: 'Julian', last: 'Schmidt' },
    { first: 'Isabel', last: 'Lima' },
    { first: 'Sebastian', last: 'Schneider' },
    { first: 'Sophia', last: 'Roth' },
    { first: 'David', last: 'Meier' },
    { first: 'Lucia', last: 'Kovac' },
    { first: 'Luca', last: 'Fischer' },
    { first: 'Giulia', last: 'Bianchi' },
    { first: 'Alessandro', last: 'Gallo' },
    { first: 'Maya', last: 'Larsen' },
    { first: 'Ben', last: 'Schwarz' },
    { first: 'Anna', last: 'Rossi' },
    { first: 'Daniel', last: 'Novak' },
    { first: 'Eva', last: 'Santos' },
    { first: 'Kasper', last: 'Jensen' },
    { first: 'Martina', last: 'Müller' },
    { first: 'Emilia', last: 'Hansen' },
    { first: 'Adrian', last: 'Blanco' },
    { first: 'Clara', last: 'Martinez' },
    { first: 'Lukas', last: 'Vargas' },
    { first: 'Carmen', last: 'Perez' },
    { first: 'Dominik', last: 'Kovacs' },
    { first: 'Maria', last: 'Klein' },
    { first: 'Jakub', last: 'Kaczmarek' },
    { first: 'Jana', last: 'Gertner' },
    { first: 'Tobias', last: 'Müller' },
    { first: 'Santiago', last: 'Fernandez' },
    { first: 'Andreas', last: 'Fischer' },
    { first: 'Marta', last: 'Lopez' },
    { first: 'Viktor', last: 'Toth' },
    { first: 'Marlene', last: 'Schulz' },
    { first: 'Stefan', last: 'Dimitrov' },
    { first: 'Sophie', last: 'Hansen' },
    { first: 'Pablo', last: 'Serrano' },
    { first: 'Julia', last: 'Vega' },
    { first: 'Simon', last: 'Meyer' },
    { first: 'Carla', last: 'Perez' },
    { first: 'Alex', last: 'Bauer' },
    { first: 'Luka', last: 'Stojanovic' },
    { first: 'Amira', last: 'Lima' },
    { first: 'Miroslav', last: 'Novak' },
    { first: 'Isabel', last: 'Moreno' },
    { first: 'Leon', last: 'Hoffmann' },
    { first: 'Megan', last: 'Schmidt' },
    { first: 'Elena', last: 'Popescu' },
    { first: 'Axel', last: 'Lindberg' },
    { first: 'Nina', last: 'Martinez' },
    { first: 'David', last: 'Costa' },
    { first: 'Martin', last: 'Fischer' },
    { first: 'Melina', last: 'Stefanova' },
    { first: 'Marius', last: 'Schuster' },
    { first: 'Francesca', last: 'Ricci' },
    { first: 'Jakob', last: 'Schwarz' },
    { first: 'Nico', last: 'Weber' },
    { first: 'Antonia', last: 'Schmitt' },
    { first: 'Paul', last: 'Vargas' },
    { first: 'Alina', last: 'Schneider' },
    { first: 'Luis', last: 'Andres' },
    { first: 'Leonardo', last: 'Mora' },
    { first: 'Hannah', last: 'Wagner' },
    { first: 'Victor', last: 'Kovacs' },
    { first: 'Paula', last: 'Santos' },
    { first: 'Mikkel', last: 'Rasmussen' },
    { first: 'Sergio', last: 'López' },
    { first: 'Marco', last: 'Silva' },
    { first: 'Anna', last: 'Dimitrova' },
    { first: 'Erik', last: 'Petrov' },
    { first: 'Laura', last: 'Vega' },
    { first: 'Tomas', last: 'Horváth' },
    { first: 'Mila', last: 'Rossi' },
    { first: 'Elliot', last: 'Dubois' },
    { first: 'Maja', last: 'Nikolova' },
    { first: 'Daniela', last: 'Petrova' },
    { first: 'Theo', last: 'Gallo' },
    { first: 'Adela', last: 'Anderson' },
    { first: 'Jakob', last: 'Rudolf' },
    { first: 'Lena', last: 'Becker' },
    { first: 'Benjamin', last: 'Wagner' },
    { first: 'Leandro', last: 'Gomez' },
    { first: 'Mia', last: 'Schuster' },
    { first: 'Clara', last: 'Gomes' },
    { first: 'Filip', last: 'Santos' },
    { first: 'Hugo', last: 'Almeida' },
    { first: 'Miriam', last: 'Costa' },
    { first: 'Sven', last: 'Bauer' },
    { first: 'Marcela', last: 'Moreno' },
    { first: 'Klaudia', last: 'Varga' },
    { first: 'Martin', last: 'Blanco' },
    { first: 'Jonas', last: 'Silva' },
    { first: 'Julia', last: 'Kovacs' },
    { first: 'Milo', last: 'Kovačić' },
    { first: 'Leon', last: 'Popov' },
    { first: 'Alice', last: 'Bianchi' },
    { first: 'Elliot', last: 'Rossi' },
    { first: 'Mira', last: 'Petrovic' },
    { first: 'Carlos', last: 'Fernández' },
    { first: 'Lucia', last: 'Diaz' },
    { first: 'Victor', last: 'Nunez' },
    { first: 'Theo', last: 'Bauer' },
    { first: 'Eva', last: 'López' },
    { first: 'Jonas', last: 'Martínez' },
    { first: 'Adriano', last: 'Costa' },
    { first: 'Vera', last: 'Popescu' },
    { first: 'Michele', last: 'Luca' },
    { first: 'Giovanni', last: 'Rossi' },
    { first: 'Matilda', last: 'Blanc' },
    { first: 'Paul', last: 'Meyer' },
    { first: 'Julia', last: 'Rasmussen' },
    { first: 'Sophie', last: 'Lund' },
      { first: 'Aaliyah', last: 'Smith' },
      { first: 'Chike', last: 'Okafor' },
      { first: 'Jamal', last: 'Brown' },
      { first: 'Zuri', last: 'Johnson' },
      { first: 'Adanna', last: 'Joseph' },
      { first: 'Tunde', last: 'Adeyemi' },
      { first: 'Kymani', last: 'Marley' },
      { first: 'Ngozi', last: 'Ibe' },
      { first: 'Leila', last: 'Charles' },
      { first: 'Obi', last: 'Nwankwo' },
      { first: 'Dante', last: 'Williams' },
      { first: 'Amara', last: 'Okoro' },
      { first: 'Sade', last: 'Adams' },
      { first: 'Chinua', last: 'Achebe' },
      { first: 'Rohan', last: 'Gonzalez' },
      { first: 'Kofi', last: 'Annan' },
      { first: 'Naomi', last: 'Hernandez' },
      { first: 'Dayo', last: 'Ogunleye' },
      { first: 'Tiana', last: 'Baptiste' },
      { first: 'Ahmet', last: 'Yılmaz' },
      { first: 'Fatima', last: 'Demir' },
      { first: 'Oluwaseun', last: 'Adeleke' },
      { first: 'Marley', last: 'Clarke' },
      { first: 'Efe', last: 'Okoye' },
      { first: 'Yara', last: 'Almanzar' },
      { first: 'Kwesi', last: 'Mensah' },
      { first: 'Zainab', last: 'Kaya' },
      { first: 'Olumide', last: 'Afolayan' },
      { first: 'Shevon', last: 'Persaud' },
      { first: 'Mustafa', last: 'Özdemir' },
      { first: 'Asha', last: 'Ramkissoon' },
      { first: 'Folami', last: 'Oluwole' },
      { first: 'Darnell', last: 'Facey' },
      { first: 'Ayşe', last: 'Çelik' },
      { first: 'Kwabena', last: 'Agyeman' },
      { first: 'Xiomara', last: 'Rodriguez' },
      { first: 'Chidi', last: 'Ekwueme' },
      { first: 'Esra', last: 'Yıldırım' },
      { first: 'Akin', last: 'Adebayo' },
      { first: 'Shaniqua', last: 'Thompson' },
      { first: 'Emre', last: 'Şahin' },
      { first: 'Adeola', last: 'Oladipo' },
      { first: 'Calypso', last: 'James' },
      { first: 'Oluwadamilola', last: 'Adeniyi' },
      { first: 'Zeynep', last: 'Aydın' },
      { first: 'Kwaku', last: 'Owusu' },
      { first: 'Yaritza', last: 'Diaz' },
      { first: 'Chukwuemeka', last: 'Nwosu' },
      { first: 'Mehmet', last: 'Kara' },
      { first: 'Folasade', last: 'Ogunbiyi' },
      { first: 'Delroy', last: 'Campbell' },
      { first: 'Aisha', last: 'Yılmaz' },
      { first: 'Oluwaseyi', last: 'Akinwande' },
      { first: 'Shanique', last: 'Edwards' },
      { first: 'Burak', last: 'Öztürk' },
      { first: 'Chioma', last: 'Eze' },
      { first: 'Machel', last: 'Montano' },
      { first: 'Adekunle', last: 'Adebisi' },
      { first: 'Esmeralda', last: 'Gomez' },
      { first: 'Olamide', last: 'Olatunji' },
      { first: 'Selin', last: 'Yılmaz' },
      { first: 'Kwame', last: 'Asante' },
      { first: 'Yanique', last: 'Richards' },
      { first: 'Chinedu', last: 'Onwu' },
      { first: 'Elif', last: 'Demir' },
      { first: 'Oluwadamilare', last: 'Adeyemi' },
      { first: 'Shevonne', last: 'Bacchus' },
      { first: 'Cem', last: 'Yıldız' },
      { first: 'Folake', last: 'Olawale' },
      { first: 'Usain', last: 'Bolt' },
      { first: 'Ayodeji', last: 'Balogun' },
      { first: 'Gizem', last: 'Çetin' },
      { first: 'Kwesi', last: 'Appiah' },
      { first: 'Xiomara', last: 'Fernandez' },
      { first: 'Oluwaseun', last: 'Oladele' },
      { first: 'Merve', last: 'Özdemir' },
      { first: 'Chukwudi', last: 'Okonkwo' },
      { first: 'Shantel', last: 'Williams' },
      { first: 'Emre', last: 'Kaya' },
      { first: 'Oluwadamilola', last: 'Adegoke' },
      { first: 'Yasemin', last: 'Yılmaz' },
      { first: 'Kwabena', last: 'Boateng' },
      { first: 'Yaritza', last: 'Perez' },
      { first: 'Oluwaseyi', last: 'Ogunleye' },
      { first: 'Seda', last: 'Aydın' },
      { first: 'Chidiebere', last: 'Nnamani' },
      { first: 'Shanique', last: 'Brown' },
      { first: 'Murat', last: 'Özcan' },
      { first: 'Folasade', last: 'Oluwole' },
      { first: 'Machel', last: 'Charles' },
      { first: 'Oluwadamilare', last: 'Adeyemo' },
      { first: 'Zehra', last: 'Yıldırım' },
      { first: 'Kwesi', last: 'Acheampong' },
      { first: 'Yanique', last: 'Thompson' },
      { first: 'Chukwuemeka', last: 'Okorie' },
      { first: 'Ayşe', last: 'Kaya' },
      { first: 'Oluwaseun', last: 'Oladipo' },
      { first: 'Shevon', last: 'Ramsammy' },
      { first: 'Mustafa', last: 'Çelik' },
      { first: 'Folake', last: 'Ogunbiyi' },
      { first: 'Usain', last: 'Blake' },
      { first: 'Adeola', last: 'Adeyemi' },
      { first: 'Selin', last: 'Demir' },
      { first: 'Kwame', last: 'Owusu' },
      { first: 'Xiomara', last: 'Martinez' },
      { first: 'Olumide', last: 'Oladele' },
      { first: 'Elif', last: 'Yılmaz' },
      { first: 'Chidi', last: 'Nwosu' },
      { first: 'Shaniqua', last: 'Edwards' },
      { first: 'Burak', last: 'Aydın' },
      { first: 'Oluwadamilola', last: 'Akinwande' },
      { first: 'Esra', last: 'Özdemir' },
      { first: 'Kwesi', last: 'Asante' },
      { first: 'Yaritza', last: 'Rodriguez' },
      { first: 'Chinedu', last: 'Eze' },
      { first: 'Zeynep', last: 'Kara' },
      { first: 'Oluwaseyi', last: 'Adebisi' },
      { first: 'Shevonne', last: 'Persaud' },
      { first: 'Emre', last: 'Yıldız' },
      { first: 'Folasade', last: 'Olatunji' },
      { first: 'Delroy', last: 'Thompson' },
      { first: 'Aisha', last: 'Çetin' },
      { first: 'Oluwadamilare', last: 'Olawale' },
      { first: 'Gizem', last: 'Özcan' },
      { first: 'Kwabena', last: 'Mensah' },
      { first: 'Esmeralda', last: 'Diaz' },
      { first: 'Chukwudi', last: 'Onwu' },
      { first: 'Merve', last: 'Yıldırım' },
      { first: 'Oluwaseun', last: 'Adegoke' },
      { first: 'Shanique', last: 'Campbell' },
      { first: 'Cem', last: 'Demir' },
      { first: 'Folake', last: 'Adeniyi' },
      { first: 'Machel', last: 'James' },
      { first: 'Adekunle', last: 'Ogunleye' },
      { first: 'Seda', last: 'Yılmaz' },
      { first: 'Kwesi', last: 'Boateng' },
      { first: 'Yanique', last: 'Gomez' },
      { first: 'Chidiebere', last: 'Okorie' },
      { first: 'Yasemin', last: 'Özdemir' },
      { first: 'Oluwadamilola', last: 'Oluwole' },
      { first: 'Shevon', last: 'Bacchus' },
      { first: 'Murat', last: 'Çelik' },
      { first: 'Folasade', last: 'Afolayan' },
      { first: 'Usain', last: 'Richards' },
      { first: 'Ayodeji', last: 'Oladipo' },
      { first: 'Zehra', last: 'Kaya' },
      { first: 'Kwame', last: 'Acheampong' },
      { first: 'Xiomara', last: 'Hernandez' },
      { first: 'Olumide', last: 'Adeyemo' },
      { first: 'Ayşe', last: 'Yıldız' },
      { first: 'Chidi', last: 'Nnamani' },
      { first: 'Shantel', last: 'Brown' },
      { first: 'Burak', last: 'Özcan' },
      { first: 'Oluwaseyi', last: 'Ogunbiyi' },
      { first: 'Elif', last: 'Aydın' },
      { first: 'Kwesi', last: 'Owusu' },
      { first: 'Yaritza', last: 'Fernandez' },
      { first: 'Chinedu', last: 'Okonkwo' },
      { first: 'Selin', last: 'Yıldırım' },
      { first: 'Oluwaseun', last: 'Akinwande' },
      { first: 'Shanique', last: 'Charles' },
      { first: 'Emre', last: 'Özdemir' },
      { first: 'Folake', last: 'Adebisi' },
      { first: 'Machel', last: 'Williams' },
      { first: 'Adeola', last: 'Oladele' },
      { first: 'Esra', last: 'Kara' },
      { first: 'Kwabena', last: 'Asante' },
      { first: 'Yanique', last: 'Perez' },
      { first: 'Chukwuemeka', last: 'Eze' },
      { first: 'Merve', last: 'Çetin' },
      { first: 'Oluwadamilare', last: 'Olatunji' },
      { first: 'Shevonne', last: 'Ramsammy' },
      { first: 'Mustafa', last: 'Yılmaz' },
      { first: 'Folasade', last: 'Adeyemi' },
      { first: 'Delroy', last: 'Edwards' },
      { first: 'Aisha', last: 'Özcan' },
      { first: 'Oluwaseyi', last: 'Olawale' },
      { first: 'Gizem', last: 'Demir' },
      { first: 'Kwesi', last: 'Mensah' },
      { first: 'Esmeralda', last: 'Martinez' },
      { first: 'Chidi', last: 'Onwu' },
      { first: 'Zeynep', last: 'Yıldız' },
      { first: 'Oluwadamilola', last: 'Ogunleye' },
      { first: 'Shanique', last: 'Thompson' },
      { first: 'Cem', last: 'Aydın' },
      { first: 'Folake', last: 'Adegoke' },
      { first: 'Usain', last: 'Campbell' },
      { first: 'Adekunle', last: 'Oladipo' },
      { first: 'Seda', last: 'Özdemir' },
      { first: 'Kwame', last: 'Boateng' },
      { first: 'Xiomara', last: 'Gomez' },
      { first: 'Olumide', last: 'Nwosu' },
      { first: 'Yasemin', last: 'Çelik' },
      { first: 'Chukwudi', last: 'Adeniyi' },
      { first: 'Shantel', last: 'Persaud' },
      { first: 'Murat', last: 'Yıldırım' },
      { first: 'Oluwaseun', last: 'Afolayan' },
      { first: 'Zehra', last: 'Kaya' },
      { first: 'Kwesi', last: 'Acheampong' },
      { first: 'Yanique', last: 'Rodriguez' },
      { first: 'Chidiebere', last: 'Okorie' },
      { first: 'Ayşe', last: 'Özcan' },
      { first: 'Oluwadamilare', last: 'Ogunbiyi' },
      { first: 'Shevon', last: 'James' },
      { first: 'Burak', last: 'Demir' },
      { first: 'Folasade', last: 'Adeyemo' },
      { first: 'Machel', last: 'Brown' },
      { first: 'Ayodeji', last: 'Oluwole' },
      { first: 'Elif', last: 'Yıldız' },
      { first: 'Kwame', last: 'Owusu' },
      { first: 'Esmeralda', last: 'Fernandez' },
      { first: 'Chinedu', last: 'Nnamani' },
      { first: 'Selin', last: 'Çetin' },
      { first: 'Oluwaseyi', last: 'Oladele' },
      { first: 'Shaniqua', last: 'Bacchus' },
      { first: 'Emre', last: 'Aydın' },
      { first: 'Folake', last: 'Akinwande' },
      { first: 'Usain', last: 'Charles' },
      { first: 'Adeola', last: 'Eze' },
      { first: 'Gizem', last: 'Yılmaz' },
      { first: 'Kwabena', last: 'Asante' },
      { first: 'Xiomara', last: 'Perez' },
      { first: 'Chukwuemeka', last: 'Okonkwo' },
      { first: 'Merve', last: 'Özdemir' },
      { first: 'Oluwadamilola', last: 'Adebisi' },
      { first: 'Shanique', last: 'Ramsammy' },
      { first: 'Mustafa', last: 'Kara' },
      { first: 'Folasade', last: 'Oladipo' },
      { first: 'Delroy', last: 'Martinez' },
      { first: 'Aisha', last: 'Yıldırım' },
      { first: 'Oluwaseun', last: 'Olawale' },
      { first: 'Zeynep', last: 'Çelik' },
      { first: 'Kwesi', last: 'Mensah' },
      { first: 'Yaritza', last: 'Hernandez' },
      { first: 'Chidi', last: 'Adeniyi' },
      { first: 'Esra', last: 'Özcan' },
      { first: 'Olumide', last: 'Ogunleye' },
      { first: 'Shevonne', last: 'Thompson' },
      { first: 'Cem', last: 'Demir' },
      { first: 'Folake', last: 'Adegoke' },
      { first: 'Machel', last: 'Edwards' },
      { first: 'Adekunle', last: 'Olatunji' },
      { first: 'Seda', last: 'Yıldız' },
      { first: 'Kwame', last: 'Boateng' },
      { first: 'Yanique', last: 'Gomez' },
      { first: 'Chukwudi', last: 'Nwosu' },
      { first: 'Yasemin', last: 'Aydın' },
      { first: 'Oluwadamilare', last: 'Afolayan' },
      { first: 'Shantel', last: 'Persaud' },
      { first: 'Murat', last: 'Özdemir' },
      { first: 'Oluwaseyi', last: 'Adeyemi' },
      { first: 'Zehra', last: 'Kaya' },
      { first: 'Kwesi', last: 'Acheampong' },
      { first: 'Esmeralda', last: 'Rodriguez' },
      { first: 'Chidiebere', last: 'Okorie' },
      { first: 'Ayşe', last: 'Çetin' },
      { first: 'Oluwaseun', last: 'Ogunbiyi' },
      { first: 'Shevon', last: 'James' },
      { first: 'Burak', last: 'Yılmaz' },
      { first: 'Folasade', last: 'Adeyemo' },
      { first: 'Usain', last: 'Brown' },
      { first: 'Ayodeji', last: 'Oluwole' },
      { first: 'Elif', last: 'Özcan' },
      { first: 'Kwabena', last: 'Owusu' },
      { first: 'Xiomara', last: 'Fernandez' },
      { first: 'Chinedu', last: 'Nnamani' },
      { first: 'Selin', last: 'Kara' },
      { first: 'Oluwadamilola', last: 'Oladele' },
      { first: 'Shaniqua', last: 'Bacchus' },
      { first: 'Emre', last: 'Yıldırım' },
      { first: 'Folake', last: 'Akinwande' },
      { first: 'Machel', last: 'Charles' },
      { first: 'Adeola', last: 'Eze' },
      { first: 'Gizem', last: 'Demir' },
      { first: 'Kwame', last: 'Asante' },
      { first: 'Yanique', last: 'Perez' },
      { first: 'Chukwuemeka', last: 'Okonkwo' },
      { first: 'Merve', last: 'Aydın' },
      { first: 'Oluwaseyi', last: 'Adebisi' },
      { first: 'Shanique', last: 'Ramsammy' },
      { first: 'Mustafa', last: 'Özdemir' },
      { first: 'Folasade', last: 'Oladipo' },
      { first: 'Delroy', last: 'Martinez' },
      { first: 'Aisha', last: 'Çelik' },
      { first: 'Oluwadamilare', last: 'Olawale' },
      { first: 'Zeynep', last: 'Yıldız' },
      { first: 'Kwesi', last: 'Mensah' },
      { first: 'Yaritza', last: 'Hernandez' },
      { first: 'Chidi', last: 'Adeniyi' },
      { first: 'Esra', last: 'Kaya' },
      { first: 'Olumide', last: 'Ogunleye' },
      { first: 'Shevonne', last: 'Thompson' },
      { first: 'Cem', last: 'Özcan' },
      { first: 'Folake', last: 'Adegoke' },
      { first: 'Usain', last: 'Edwards' },
      { first: 'Adekunle', last: 'Olatunji' },
      { first: 'Seda', last: 'Yılmaz' },
      { first: 'Kwabena', last: 'Boateng' },
      { first: 'Xiomara', last: 'Gomez' },
      { first: 'Chukwudi', last: 'Nwosu' },
      { first: 'Yasemin', last: 'Demir' },
      { first: 'Oluwaseun', last: 'Afolayan' },
      { first: 'Shantel', last: 'Persaud' },
      { first: 'Murat', last: 'Çetin' },
      { first: 'Oluwadamilola', last: 'Adeyemi' },
    
    
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

  const nameCount = new Map(); // To track how many times a name combination has been used

  // Function to generate a student record
  function generateStudent(index) {
    let scientist;
  
    // Find a name that hasn't exceeded 2 occurrences
    for (let attempt = 0; attempt < scientistNames.length; attempt++) {
      scientist = scientistNames[(index + attempt) % scientistNames.length];
      const fullName = `${scientist.first} ${scientist.last}`;
      const currentCount = nameCount.get(fullName) || 0;
  
      // Ensure no name combination appears more than twice
      if (currentCount < 2) {
        // Increment the count for this full name
        nameCount.set(fullName, currentCount + 1);
        break;
      }
    }
  
    // Return student data with email and other details
    return {
      first: scientist.first,
      last: scientist.last,
      id: `STU${String(index).padStart(5, '0')}`,
      status: statuses[index % statuses.length],
      major: majors[index % majors.length],
      college: colleges[index % colleges.length],
      classification: classifications[index % classifications.length],
      email: `${scientist.first.toLowerCase()}${scientist.last.toLowerCase()}${index + 1}@my.tnstate.edu`
    };
  }
  
  // Function to display students in the table
  function displayStudents(studentList) {
    const studentListElement = document.getElementById('studentList');
    studentListElement.innerHTML = ''; // Clear previous results
  
    studentList.forEach((student) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        ${student.first} ${student.last}  
        ${student.id}  
        ${student.status}  
        ${student.major}
        ${student.college}
        ${student.classification} 
        ${student.email}     
      `;
      studentListElement.appendChild(row);
    });
  }
  
  // Function to filter students based on search input
  function filterStudents() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
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
  document.getElementById('searchButton').addEventListener('click', filterStudents);
  
  // Initialize the student list and display
  const students = [];
  for (let i = 0; i < 100; i++) { // Adjust the range as needed
    students.push(generateStudent(i));
  }
  
// Initial display of all students
displayStudents(students);
