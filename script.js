let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let targetLink = document.querySelector(`header nav a[href="#${id}"]`);
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            });
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    let typed = new Typed(".auto-type",{
    strings: ["Web Developer ","UI / UX Designer","Frontend Designer"], 
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
    showCursor: false

})
})

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
