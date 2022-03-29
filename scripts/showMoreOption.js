function ShowMoreImages() {
    var divider = document.getElementById("divider");
    var moreImg = document.getElementById("moreImg");
    var btnText = document.getElementById("imgBtn");

    if (divider.style.display === "none") {
        divider.style.display = "inline";
        btnText.innerHTML = "Toon meer";
        moreImg.style.display = "none";
    } else {
        divider.style.display = "none";
        btnText.innerHTML = "Toon minder";
        moreImg.style.display = "inline";
    }
}