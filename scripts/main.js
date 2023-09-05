document.addEventListener("load", function () {
    const form = document.querySelector(".form");
    const dataTable = document.querySelector(".userTable");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstNameInput = form.querySelector('.firstNameInput');
        const lastNameInput = form.querySelector('.lastNameInput');


        const FirstName = firstNameInput.value;
        const LastName = lastNameInput.value;


        const nameRegex = /^[A-Za-z\s]+$/;


        if (!nameRegex.test(FirstName)) {
            firstNameInput.style.border = '1px solid red'
            firstNameInput.focus();
            return;
        }

        if (!nameRegex.test(LastName)) {
            lastNameInput.style.border = '1px solid red'
            lastNameInput.focus();
            return;
        }

        const title = document.querySelector('.h-title');
        const firstName = form.querySelector('.firstNameInput').value;
        const lastName = form.querySelector('.lastNameInput').value;
        const birthday = form.querySelector('.birthdayInput').value;
        const gender = form.querySelector('.radio').value;
        const city = form.querySelector('#city-select').value;
        const address = form.querySelector('.textarea').value;
        const languages = [];
        const languageCheckboxes = form.querySelectorAll('input[name^="languages"]:checked');
        languageCheckboxes.forEach(function (checkbox) {
            const label = form.querySelector(`label[for="${checkbox.id}"]`).textContent;
            languages.push(label);
        });

        const tableHtml = `
            <table>
                <tr><td>First Name:</td><td>${firstName}</td></tr>
                <tr><td>Last Name:</td><td>${lastName}</td></tr>
                <tr><td>Born Date:</td><td>${birthday}</td></tr>
                <tr><td>Gender:</td><td>${gender}</td></tr>
                <tr><td>City:</td><td>${city}</td></tr>
                <tr><td>Address:</td><td>${address}</td></tr>
                <tr><td>Languages:</td><td>${languages.join(", ")}</td></tr>
            </table>
        `;

        dataTable.innerHTML = tableHtml;
        form.style.display = "none";
        dataTable.style.display = "block";
        title.style.display = 'none';
    });
});