AOS.init({
    duration: 1000,
});

const btn = document.querySelector(".btn");
const rootEl = document.documentElement;

document.addEventListener("scroll", () => {
    if (scrollY > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", () => {
    rootEl.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

const scrollPage = document.querySelector(".scroll-page");
const progress = document.querySelector(".progress");

window.addEventListener("scroll", () => {
    const currentState =
        document.body.scrollTop || document.documentElement.scrollTop;

    const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercentage = (currentState / pageHeight) * 100;

    scrollPage.style.visibility = "visible";
    progress.style.width = `${scrollPercentage}%`;
});
