var add = document.getElementById("add");
var remove = document.getElementById("remove");
var item_no = document.getElementById("item_no");

// add.addEventListener("click", () => {
//     item_no.stepUp();
//     checkMaxMin();
// })

// remove.addEventListener("click" () => {
//     item_no.stepDown();
//     checkMaxMin();
// })

function increment(icon){
    var input_container = icon.parentNode;
    var item_no = input_container.querySelector('.item_no__container .item_no');
    let current_value = parseInt(item_no.innerText) || 0;
    current_value++;
    item_no.innerText = current_value;
}

function decrement(icon){
    var input_container = icon.parentNode;
    var item_no = input_container.querySelector('.item_no__container .item_no');
    let current_value = parseInt(item_no.innerText) || 0;
    current_value--;
    item_no.innerText = current_value;
}

// document.getElementById("contact-button").addEventListener("click", function(){
//     document.getElementsByClassName("popup")[0].classList.add("active");
// })

document.getElementById("place").addEventListener("click", function() {
    const elementToAnimate = document.querySelector('.placed');
    elementToAnimate.style.animation = 'none'; // Resetting animation
    void elementToAnimate.offsetWidth; // Trigger reflow to reset animation
    elementToAnimate.style.animation = 'show 1.5s ease-in-out'; // Applying animation
  });

document.getElementById("contact-button").addEventListener("click", function() {
    const elementToAnimat = document.querySelector('#form-submitted');
    elementToAnimat.style.animation = 'none'; // Resetting animation
    void elementToAnimat.offsetWidth; // Trigger reflow to reset animation
    elementToAnimat.style.animation = 'visible 1.5s ease-in-out'; // Applying animation
});

document.getElementById('contact-button').addEventListener('click', function() {

    document.getElementById('myForm').reset(); // Resets the form fields
});