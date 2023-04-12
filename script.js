// const { get } = require("mongoose");
const departureInput = document.querySelector ("#add-departure")
const arrivalInput = document.querySelector ("#add-arrival")
const searchBtn = document.querySelector("#btn-search")
const dateInput = document.querySelector ("#calendar")
const trainImage = document.querySelector("#img-train");
const noTripFound = document.querySelector("#booking-choice h3")
const tripDetails = `${departureInput} > ${arrivalInput}`
const cartContainer = document.querySelector("#booking-choice");


searchBtn.addEventListener("click" , function(){
    const departureValue = departureInput.value
    const arrivalValue = arrivalInput.value 
    const dateValue = dateInput.value

       
   if (departureValue.trim() !== "" && arrivalValue.trim() !== "") {
    
    console.log("Départ:", departureValue);
    console.log("Arrivée:", arrivalValue);
    console.log("date", dateValue);


    fetch ('http://localhost:3000/trips',
    {method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({departure : departureValue,
    arrival : arrivalValue,
    date: dateValue}),
    }
    )
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let inner = ""
        for (let items of data.newTrips) {
            inner += 
            `<div class="trips">
            <p>${items.departure} > ${items.arrival}</p>
            <p>${items.date}</p>
            <p>${items.price} €</p>
            <button id="btn-book" type="button">Book</button>
        </div>`}

        cartContainer.innerHTML = inner
        cartContainer.style.overflow = "auto"
        // cartContainer.id = "#booking-choice2"
    })


    
   
    // window.location.href = "test.html";
} else {

    alert("Please fill in all the fields.");
    trainImage.src = "images/notfound.png";
    noTripFound.textContent = "No trip yet";
}
});




