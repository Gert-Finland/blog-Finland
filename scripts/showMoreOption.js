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
    var divider2 = document.getElementById("divider2");
    var moreImg2 = document.getElementById("moreImg2");
    var btnText2 = document.getElementById("imgBtn2");

    if (divider2.style.display === "none") {
        divider2.style.display = "inline";
        btnText2.innerHTML = "Toon meer";
        moreImg2.style.display = "none";
    } else {
        divider2.style.display = "none";
        btnText2.innerHTML = "Toon minder";
        moreImg2.style.display = "inline";
    }
}