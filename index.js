
const trigger = document.querySelector('#trigger');
const modalWrapper = document.querySelector('.modal__wrapper');
const closeBtn = document.querySelector('.close');

trigger.addEventListener('click', function(){
    openModal();
});

closeBtn.addEventListener('click', function(){
    closeModal();
});


function openModal() {
    modalWrapper.classList.add('active');
}
function closeModal() {
    modalWrapper.classList.remove('active');
}