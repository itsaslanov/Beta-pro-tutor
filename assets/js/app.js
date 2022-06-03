// Swiper old code style ;(
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// My code
let clearBtn = document.querySelector("#clearBtn");

let allOptions = () => {
    let select = document.querySelectorAll(".clear-options")
    for (let i = 0; i < select.length; i++) {
        select[i].selectedIndex = 0
    }
}

clearBtn.addEventListener("click", (e) => {
    allOptions()
    e.preventDefault();
})