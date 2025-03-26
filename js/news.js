const moreBtns = document.getElementsByClassName("moreBTN");

Array.from(moreBtns).forEach((moreBtn) => {
    moreBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const ct = document.querySelector(".wrapBoxContent");
        const namep = document.querySelector(".namePage");

        if (ct && namep) {
            if (ct.style.display === "none" || ct.style.display === "") {
                ct.style.display = "block";
                namep.style.fontSize = "24px";
            } else {
                ct.style.display = "none";
                namep.style.fontSize = "48px";
            }
        }
    });
});
