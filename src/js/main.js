// Get modal elemnt
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close modal button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for event
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

// Function to open modal
function openModal(event) {
    modal.style.display = 'block';
}
// Function to close modal
function closeModal(event) {
    modal.style.display = 'none';
}
// Function to close modal if outside click
function clickOutside(event) {
    if(event.target == modal) modal.style.display = "none";
}