document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    slider.addEventListener("mousedown", (e) => {
        isDragging = true;
        startPosition = e.clientX;
        slider.style.cursor = "grabbing";
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const currentPosition = e.clientX;
        const translate = currentTranslate + currentPosition - startPosition;
        slider.style.transform = `translateX(${translate}px)`;
    });

    slider.addEventListener("mouseup", () => {
        isDragging = false;
        const endPosition = currentTranslate;
        if (currentTranslate - prevTranslate < -100) {
            nextSlide();
        } else if (currentTranslate - prevTranslate > 100) {
            prevSlide();
        } else {
            resetSlidePosition();
        }
        slider.style.cursor = "grab";
    });

    slider.addEventListener("mouseleave", () => {
        isDragging = false;
        resetSlidePosition();
        slider.style.cursor = "grab";
    });

    function nextSlide() {
        if (currentTranslate === -(slider.children.length - 1) * 100) {
            return;
        }
        prevTranslate = currentTranslate;
        currentTranslate -= 100;
        updateSlidePosition();
    }

    function prevSlide() {
        if (currentTranslate === 0) {
            return;
        }
        prevTranslate = currentTranslate;
        currentTranslate += 100;
        updateSlidePosition();   
        
    }

    function resetSlidePosition() {
        prevTranslate = currentTranslate;
        updateSlidePosition();
    }

    function updateSlidePosition() {
        slider.style.transform = `translateX(${currentTranslate}%)`;
    }
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    