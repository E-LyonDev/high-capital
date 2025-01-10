document.addEventListener('DOMContentLoaded', () =>{

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');


burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});
})

document.addEventListener('DOMContentLoaded', () =>{
    let intervald;
let currentIndex = 0;
const backgrounds = document.querySelectorAll('.background');
const textContents = document.querySelectorAll('.text-content');
const dots = document.querySelectorAll('.dot');

function changeBackground() {
    backgrounds.forEach(( bg, index) => {
        bg.style.opacity = index === currentIndex ? '1' : '0';
    });

    textContents.forEach((Text, index) => {
        Text.classList.remove('show');
        Text.classList.remove('hide');
        if ( index === currentIndex ) {
            setTimeout(() => {
                Text.classList.add('show');
                let tl = gsap.timeline();
            }, 1000);
        } else {
            Text.classList.add('hide');
        }
    });
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentIndex) {
            dot.classList.add('active');
        }
    });
    if (currentIndex < backgrounds.length - 1) {
        currentIndex++;
    } else {
        clearInterval(intervald);
    }
    
}

function navigateTo(index) {
    currentIndex = index;
    changeBackground();
    clearInterval(intervald);
}

// Initialize the first background as visible
document.addEventListener('DOMContentLoaded', () => {
    navigateTo(0);
    intervald = setInterval(changeBackground, 3000);
});

intervald = setInterval(changeBackground, 3000);
changeBackground();

let tl = gsap.timeline();
tl.from("nav",{
    y:-100,
    opacity: 0,
    duration: 0.2,
    ease: "expo.inOut"
})
.from(".navigation-dots > *",{
    y: -1000,
    opacity: 0,
    duration: 0.8,
    ease: "bounce.out",
    stagger: {
        amount: 0.5,
        from: "random"
    }
})
.from(".get-started",{
    y: -1000,
    opacity: 0,
    duration: 0.8,
    ease: "bounce.out",
    stagger: {
        amount: 0.5,
        from: "random"
    }
})
})

document.addEventListener('DOMContentLoaded', function () {
    function setupScroll(containerSelector, leftButtonId, rightButtonId) {
        const scrollContainer = document.querySelector(containerSelector);
        const scrollLeft = document.getElementById(leftButtonId);
        const scrollRight = document.getElementById(rightButtonId);

        if (!scrollContainer || !scrollLeft || !scrollRight) {
            console.error('One or more elements not found:', {
                scrollContainer: scrollContainer || 'Not Found',
                scrollLeft: scrollLeft || 'Not Found',
                scrollRight: scrollRight || 'Not Found'
            });
            return;
        }

        let isDown = false;
        let startX;
        let scrollLeftPos;

        function checkScrollButtons() {
            if (scrollContainer.scrollLeft <= 0) {
                scrollLeft.style.opacity = '0';
            } else {
                scrollLeft.style.opacity = '1';
            }

            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                scrollRight.style.opacity = '0';
            } else {
                scrollRight.style.opacity = '1';
            }
        }

        scrollContainer.addEventListener('scroll', checkScrollButtons);
        window.addEventListener('resize', checkScrollButtons);
        checkScrollButtons(); // Initial check

        scrollContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollContainer.classList.add('active');
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeftPos = scrollContainer.scrollLeft;
        });

        scrollContainer.addEventListener('mouseleave', () => {
            isDown = false;
            scrollContainer.classList.remove('active');
        });

        scrollContainer.addEventListener('mouseup', () => {
            isDown = false;
            scrollContainer.classList.remove('active');
        });

        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2; // Adjust the scroll speed
            scrollContainer.scrollLeft = scrollLeftPos - walk;
        });

        scrollLeft.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: -300, // Adjust the value as needed
                behavior: 'smooth'
            });
            checkScrollButtons(); // Check buttons after scrolling
        });

        scrollRight.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: 250, // Adjust the value as needed
                behavior: 'smooth'
            });
            checkScrollButtons(); // Check buttons after scrolling
        });
    }

    // Setup scroll for the first set of buttons
    setupScroll('.testmonies', 'testimony-scroll-left', 'testimony-scroll-right');

    // Setup scroll for the second set of buttons (About Us section)
    setupScroll('.about-speech', 'scroll-left', 'scroll-right');
});


document.addEventListener('DOMContentLoaded', () => {
    const chatNowButton = document.getElementById('chat-now');
    chatNowButton.addEventListener('click', () => {
        if (typeof Tawk_API !== 'undefined') {
            Tawk_API.maximize();
        }
    });
});