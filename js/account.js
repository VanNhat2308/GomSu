document.querySelectorAll(".select-box").forEach(selectBox => {
    let selectedText = selectBox.querySelector(".selected");
    let options = selectBox.querySelector(".options");

    selectBox.addEventListener("click", function (event) {
        event.stopPropagation(); 
        selectBox.classList.toggle("open");
    });

    options.querySelectorAll(".option").forEach(option => {
        option.addEventListener("click", function () {
            selectedText.innerText = this.innerText;
            selectBox.classList.remove("open");
        });
    });

    document.addEventListener("click", function (e) {
        if (!selectBox.contains(e.target)) {
            selectBox.classList.remove("open");
        }
    });
});
document.getElementById("inone").addEventListener("click", () => {
    const listNav = document.getElementsByClassName("listNav")[0];
    
    if (listNav.style.display === "none" || listNav.style.display === "") {
        listNav.style.display = "block"; 
    } else {
        listNav.style.display = "none";
    }
});

const menuLinks = document.querySelectorAll(".listNav a");
const sections = {
    infoBtn: document.querySelector(".accInfo"),
    linkBtn: document.querySelector(".bankLink"),
    orderBtn: document.querySelector(".orderCT"),
};

// Hàm xử lý khi click vào menu
function handleMenuClick(event) {
    event.preventDefault(); // Ngăn chặn load lại trang

    menuLinks.forEach(link => link.classList.remove("active"));

    this.classList.add("active");

    Object.values(sections).forEach(section => section.style.display = "none");

    sections[this.id].style.display = "block";
}
menuLinks.forEach(link => link.addEventListener("click", handleMenuClick));
