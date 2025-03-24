document.addEventListener("DOMContentLoaded", function () {
    const checkAll = document.querySelector(".checkAll");
    const checkboxes = document.querySelectorAll(".custom-checkbox");

    // Khi bấm "Chọn tất cả", tất cả các checkbox con sẽ được chọn/bỏ chọn
    checkAll.addEventListener("change", function () {
        checkboxes.forEach((checkbox) => {
            checkbox.checked = checkAll.checked;
        });
    });

    // Nếu bỏ chọn bất kỳ checkbox con nào, "Chọn tất cả" sẽ tự bỏ chọn
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            checkAll.checked = [...checkboxes].every(cb => cb.checked);
        });
    });
});
