const pages = document.querySelectorAll(".page");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentPage = 1;
const totalPages = 15; // Tổng số trang

// Cập nhật trạng thái active và nút Prev/Next
function updatePagination() {
    pages.forEach(page => {
        if (parseInt(page.textContent) === currentPage) {
            document.querySelector(".page.active").classList.remove("active");
            page.classList.add("active");
        }
    });

    // Vô hiệu hóa nút Prev khi ở trang đầu, Next khi ở trang cuối
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

// Xử lý khi bấm vào số trang
pages.forEach(page => {
    page.addEventListener("click", function() {
        currentPage = parseInt(this.textContent);
        updatePagination();
    });
});

// Xử lý khi bấm Next
nextBtn.addEventListener("click", function() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
    }
});

// Xử lý khi bấm Prev
prevBtn.addEventListener("click", function() {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
    }
});
