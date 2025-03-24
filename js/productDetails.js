function changeImage(element) {
    let largeImg = document.getElementById("largeImg");
    largeImg.style.opacity = "0"; // Hiệu ứng mờ dần

    setTimeout(() => {
        largeImg.src = element.src; // Thay đổi ảnh
        largeImg.style.opacity = "1";
    }, 300);
}
