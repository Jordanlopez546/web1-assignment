var modal = document.getElementById("imageModal");

var modalImg = document.getElementById("modalImage");

function openModal(src) {
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}