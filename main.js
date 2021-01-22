window.onload = function () {
    document.body.classList.add('preloader');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('preloader');
    }, 3250);
}

const filters = document.querySelectorAll('.filter');

filters.forEach(filter => {

    filter.addEventListener('click', function () {

        let selectedFilter = filter.getAttribute('data-filter');
        let itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`);
        let itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);

        if (selectedFilter == 'all') {
            itemsToHide = [];
            itemsToShow = document.querySelectorAll('.projects [data-filter]');
        }

        itemsToHide.forEach(el => {
            el.classList.add('hide');
            el.classList.remove('show');
        });

        itemsToShow.forEach(el => {
            el.classList.remove('hide');
            el.classList.add('show');
        });

    });
});

const tl = gsap.timeline({
    defaults: {
        ease: "power1.out"
    }
});

tl.to(".text", {
    y: "0%",
    duration: 1,
    stagger: 0.25
});
tl.to(".preloader__second", {
    y: "-110%",
    duration: 1.6,
    delay: 0.5
});
tl.to(".preloader__content", {
    y: "-230%",
    duration: 0.7
}, "-=1");