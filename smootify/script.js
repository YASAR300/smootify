const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu1 = dropdown.querySelector('.menu1');
    const options = dropdown.querySelectorAll('.menu1 li'); // Use querySelectorAll to get all <li> elements
    const selected = dropdown.querySelector('.selected');

    // Toggle the dropdown menu on select click
    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu1.classList.toggle('menu1-open');
    });

    // Loop through all options to add click event
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText; // Update selected text
            select.classList.remove('select-clicked'); // Close the dropdown
            caret.classList.remove('caret-rotate');    // Rotate caret back
            menu1.classList.remove('menu1-open');      // Hide the menu

            // Remove active class from all options
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active'); // Add active class to the clicked option
        });
    });
});
