function searchCity(event) {
    event.preventDefault();// prevents default submission
    let searchInput = document.querySelector("#search-input")
    let cityElement = document.querySelector("#current-city")
    cityElement.innerHTML = searchInput.value;   
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
