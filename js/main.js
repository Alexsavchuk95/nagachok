const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function() {
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('list-mobile--active');
}

// Get the modal
const modal = document.getElementById("myModal");
// Get the button that opens the modal
const btns = document.querySelectorAll(".main__itemBtn");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
const btnMore = document.querySelector('.modal__decriptiontn');
const descrText = document.querySelector('.modal__decription');

btnMore.onclick = function() {
        descrText.style.whiteSpace = "unset";
    }
    // When the user clicks the button, open the modal 
btns.forEach(button => {
    button.addEventListener("click", function() {
        modal.style.display = "block";
    });
});
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    descrText.style.whiteSpace = "nowrap";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        descrText.style.whiteSpace = "nowrap";
    }
}