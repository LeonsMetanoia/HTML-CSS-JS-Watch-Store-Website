document.getElementById("countryForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var countryInput = document.getElementById("country");
    var countryError = document.getElementById("countryError");

    if (countryInput.value === "") {
        countryError.textContent = "Please select a country.";
    } else {
        // Proceed with form submission or further processing
        countryError.textContent = "";
        // Uncomment the line below to submit the form
        // document.getElementById("countryForm").submit();
    }
});
