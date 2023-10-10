//javascript for navigation bar effect on scroll
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});



var typed = new Typed(".job", {
    strings: ["a Front-end Dev", "an UI/UX Developer", "an UI/UX Designer"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false,
    isDragging = false,
    prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});
const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;
    if (carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if (!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

document.getElementById("email").addEventListener("click", function() {
    // Ganti alamat email berikut dengan alamat email Anda
    var emailTo = "ivanfebrian812@gmail.com";

    // Ganti subjek email sesuai kebutuhan Anda

    // Ganti isi email sesuai kebutuhan Anda
    var body = "My email";

    // Membuka aplikasi email default pengguna dengan email baru
    window.location.href = "mailto:" + emailTo + "?subject=" + subject + "&body=" + body;
});