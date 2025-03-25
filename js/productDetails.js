function changeImage(element) {
    let largeImg = document.getElementById("largeImg");
    largeImg.style.opacity = "0"; // Hiệu ứng mờ dần

    setTimeout(() => {
        largeImg.src = element.src; // Thay đổi ảnh
        largeImg.style.opacity = "1";
    }, 300);
}
// Lấy các phần tử
const increaseBtn = document.getElementById("plusQuan");
const decreaseBtn = document.getElementById("minusQuan");
const quantityEl = document.getElementById("quantity");

// Xử lý sự kiện tăng số lượng
increaseBtn.addEventListener("click", function() {
    let currentValue = parseInt(quantityEl.innerText);
    quantityEl.innerText = currentValue + 1;
});

// Xử lý sự kiện giảm số lượng
decreaseBtn.addEventListener("click", function() {
    let currentValue = parseInt(quantityEl.innerText);
    if (currentValue > 1) { // Đảm bảo số lượng không âm
        quantityEl.innerText = currentValue - 1;
    }
});