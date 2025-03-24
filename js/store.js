let menuFilter = document.getElementById("menuFilter")

menuFilter.addEventListener('click',(e)=>{
    let plus = document.getElementsByClassName("bi-plus-lg")[0]
    plus.classList.toggle('rotate')
    let menu = document.getElementsByClassName("wrap-filter")[0];
    menu.classList.toggle("hidden");
    e.stopPropagation(); 

})