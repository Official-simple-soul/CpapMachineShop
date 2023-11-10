
$(function () {
    $('input[name="daterange"]').daterangepicker({
        opens: 'left'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});



let addBtn = document.querySelector('.addbtn');
let minusBtn = document.querySelector('.minusbtn');
let countNum = document.querySelector('.count');
let defaultCount = 0;

addBtn.addEventListener('click', () => {
    defaultCount++;
    countNum.textContent = defaultCount;
});

minusBtn.addEventListener('click', () => {
    if(defaultCount > 0) {
        defaultCount--;
        countNum.textContent = defaultCount;
    }
});




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
let selectedItem =  event.target.textContent
console.log(selectedItem)

filterShow.innerHTML = selectedItem;
})

});

closeBtn = document.getElementById("close-btn")

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        // Remove the content of the filterShow element
        filterShow.innerHTML = "";
    });
}
















// Available Dates
function toggleDatePicker(datePickerId) {
    var datePicker = document.getElementById(datePickerId);
    if (datePicker.style.display === "none") {
        datePicker.style.display = "block";
    } else {
        datePicker.style.display = "none";
    }
}



