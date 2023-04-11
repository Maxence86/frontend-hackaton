const departureInput = document.querySelector ("#add-departure")
const arrivalInput = document.querySelector ("#add-arrival")
const searchBtn = document.querySelector("#btn-search")
const dateInput = document.querySelector ("#calendar")
const trainImage = document.querySelector("#img-train");
const noTripFound = document.querySelector("#booking-choice h3")

searchBtn.addEventListener("click" , function(){
    const departureValue = departureInput.value
    const arrivalValue = arrivalInput.value 
    const dateValue = dateInput.value

       
   if (departureValue.trim() !== "" && arrivalValue.trim() !== "") {
    
    console.log("Départ:", departureValue);
    console.log("Arrivée:", arrivalValue);
    console.log("date", dateValue);
    
   
    // window.location.href = "test.html";
} else {

    alert("Please fill in all the fields.");
    trainImage.src = "images/notfound.png";
    noTripFound.textContent = "No trip yet";
}
});




