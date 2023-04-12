const cartCont = document.querySelector('#cart-container')

fetch("http://localhost:3000/cart")
.then(response => response.json())
.then(data => {
    if (data.data.length>0){
        let inner = "";
        let total = 0
        for (let items of data.data) {
            total += Number(items.price)
            inner += `
              <div class="trips">
                <p id="depart">${items.departure}</p>
                <p> > </p>
                <p id="arrival">${items.arrival}</p>
                <p id="hour">${items.date}</p>
                <div id= "price-div">
                <p id="price">${items.price}</p> 
                <p>  €</p>
                </div>
                <button class="btn-booking" onclick="location.href = 'http://127.0.0.1:5500/frontend-hackaton/cart.html'" id="btn-delete" onclick="" type="button">X</button>
              </div>
            `;
            
          }
          cartCont.innerHTML = 
          "<p>My cart</p>"+
          inner +
          `<div id ="total">
          <p>Total: ${total} €</p>
          <button class="btn-booking" onclick="location.href = 'http://127.0.0.1:5500/frontend-hackaton/booking.html'" id="btn-book" onclick="" type="button">Purchase</button>
          </div>`
          cartCont.style.overflow = "auto"
        }
})