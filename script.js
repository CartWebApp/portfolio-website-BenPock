document.addEventListener("DOMContentLoaded", () => {
    const scroller = document.querySelector(".image-scroller");
    const images = scroller.querySelectorAll("img");
    let index = 0;

    function scrollImages() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        scroller.style.transform = `translateX(-${index * 1700}px)`; // Adjust based on image width + margin
    }

    // Auto-scroll every 3 seconds
    setInterval(scrollImages, 3000);
});
