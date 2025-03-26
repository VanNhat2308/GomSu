let menuBtn = document.getElementsByClassName("menu-button")[0]
menuBtn.addEventListener('click',(e)=>{
    let sidebar = document.getElementsByClassName("side-bar")[0];
    sidebar.classList.toggle("hidden");
    e.stopPropagation(); 

})
document.addEventListener("click", (e) => {
    let sidebar = document.getElementsByClassName("side-bar")[0];
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
       sidebar.classList.add("hidden"); 
    }
 });

