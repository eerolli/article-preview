let shareBtns = document.querySelectorAll(".share-icon");
let shareModal = document.querySelector(".share");

shareBtns.forEach(button => {
    button.addEventListener("click", ()=>{
        shareModal.classList.toggle("active");
    })
});