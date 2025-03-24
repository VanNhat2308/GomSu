let moreBtn = document.getElementById("moreBtn");
moreBtn.addEventListener("click", (e) => {
    let contentList = document.getElementsByClassName("moreDetails");
    for (let content of contentList) {
        content.classList.toggle("content-hidden");
    }

    e.stopPropagation();
});
let up = document.getElementById("arrow-up");
up.addEventListener("click", (e) => {
    let contentList = document.getElementsByClassName("moreDetails");
    for (let content of contentList) {
        content.classList.toggle("content-hidden");
    }

    e.stopPropagation();
});
