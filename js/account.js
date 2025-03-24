document.querySelectorAll(".select-box").forEach(selectBox => {
    let selectedText = selectBox.querySelector(".selected");
    let options = selectBox.querySelector(".options");

    // Mở dropdown khi click
    selectBox.addEventListener("click", function (event) {
        event.stopPropagation(); // Ngăn chặn sự kiện lan ra ngoài
        selectBox.classList.toggle("open");
    });

    // Chọn option
    options.querySelectorAll(".option").forEach(option => {
        option.addEventListener("click", function () {
            selectedText.innerText = this.innerText;
            selectBox.classList.remove("open");
        });
    });

    // Đóng dropdown khi click ra ngoài
    document.addEventListener("click", function (e) {
        if (!selectBox.contains(e.target)) {
            selectBox.classList.remove("open");
        }
    });
});
document.getElementById("inone").addEventListener("click", () => {
    const listNav = document.getElementsByClassName("listNav")[0];
    
    if (listNav.style.display === "none" || listNav.style.display === "") {
        listNav.style.display = "block"; // Hiển thị menu nếu đang bị ẩn
    } else {
        listNav.style.display = "none";  // Ẩn menu nếu đang hiển thị
    }
});
