function cruiseBookingTicket(ticket, plus) {
    const ticketInput = document.getElementById(ticket + "-quantity");
    const ticketCount = ticketInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (plus == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (plus == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;

    totalTicketPrice();
}


function totalTicketPrice() {
    const firstClassTicketCount = ticketInputValue("firstClassTicket");
    const economyTicketCount = ticketInputValue("economyTicket");

    const subtotalAmount = firstClassTicketCount * 150 + economyTicketCount * 100;
    document.getElementById("subtotal-amount").innerText = "$" + subtotalAmount;

    const taxAmount = subtotalAmount * 0.1;
    document.getElementById("tax-amount").innerText = "$" + taxAmount;

    const totalAmount = subtotalAmount + taxAmount;
    document.getElementById("total-amount").innerText = "$" + totalAmount;
}


function ticketInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + "-quantity");
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}


const bookNow = document.getElementById("book-now");
bookNow.addEventListener("click", function(){
    const bookingArea = document.getElementById("booking-area");
    bookingArea.style.display = "none";
    const successContent = document.getElementById("success-content");
    successContent.style.display = "block";
})