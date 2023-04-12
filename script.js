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

    let filter = {
        departure : departureValue,
        arrival: arrivalValue,
        date: dateValue
    }

    fetch ('http://localhost:3000/trips',
    {method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({filter}),
    }
    )
    .then(response => response.json())
    .then(data => {
    
    const trips = data.data.filter(e => e.departure.toLowerCase() == departureValue.toLowerCase() && e.arrival.toLowerCase() == arrivalValue.toLowerCase() 
             && new Date(e.date).getDay() == new Date(dateValue).getDay() &&
              )
         console.log(new Date(data.data[0].date).getDay())
        console.log(new Date(dateValue).getDay())
        console.log(new Date(data.data[0].date).getMonth())
        console.log(new Date(dateValue).getMonth())
        // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

            
          console.log(data.data[0])
    })


    
   
    // window.location.href = "test.html";
} else {

    alert("Please fill in all the fields.");
    trainImage.src = "images/notfound.png";
    noTripFound.textContent = "No trip yet";
}
});




