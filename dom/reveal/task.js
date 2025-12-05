(() => {
    const reveal = Array.from(document.getElementsByClassName("reveal"));

    document.addEventListener("scroll", () => {
        let innerHeight = window.innerHeight;

        reveal.forEach(element => {
            let elementTop = element.getBoundingClientRect().top;
            let elementHeight = element.getBoundingClientRect().height;
            
            if ((0 - elementHeight) < elementTop && elementTop < innerHeight) {
                element.classList.add("reveal_active");
            
            } else {
                element.classList.remove("reveal_active");
            }
        });
    });
})();