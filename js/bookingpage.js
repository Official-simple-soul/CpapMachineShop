
// booking Image section
let bookingItem = document.getElementById("booking-item");
let buttonItem = document.getElementById("button-item");
let buttonItem2 = document.getElementById("button-item2");

buttonItem.addEventListener("click",() => {

    bookingItem.style.display = "block";
    buttonItem2.style.display = "block";
    buttonItem.style.display = "none";
})

buttonItem2.addEventListener("click", ()  => {
    bookingItem.style.display = "none";
    buttonItem2.style.display = "none"
    buttonItem.style.display = "block"
});


// Filter Section
let list = document.querySelectorAll(".list");
let filterShow = document.getElementById("filter-show")
list.forEach((select) => {
select.addEventListener("click", (event) => {
let selectedItem =  event.target.innerText
console.log(selectedItem)

filterShow.innerHTML = selectedItem;
})

});


closeBtn = document.getElementById("close-btn");


  




// Available Dates
function toggleDatePicker(datePickerId) {
    var datePicker = document.getElementById(datePickerId);
    if (datePicker.style.display === "none") {
        datePicker.style.display = "block";
    } else {
        datePicker.style.display = "none";
    }
}



