const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const sidebar2 = document.querySelector('.sidebar');
hamburger.addEventListener('click',  ()=>{
    hamburger.classList.toggle('clicked');
    sidebar.classList.toggle('show');
})
