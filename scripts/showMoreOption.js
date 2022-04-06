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

function ShowMoreImages2() {
    var divider = document.getElementById("divider2");
    var moreImg = document.getElementById("moreImg2");
    var btnText = document.getElementById("imgBtn2");

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