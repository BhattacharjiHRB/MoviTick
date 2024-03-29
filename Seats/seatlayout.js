const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.Booked');
const count = document.getElementById('count')



// Updating the count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
}

// Seat Selector 
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('Booked'))
    {
        e.target.classList.toggle('selected');
    }
    updateSelectedCount();

});