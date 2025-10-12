  var swiper = new Swiper(".mySwiper", {
            spaceBetween: 0,
            loop: true,
            speed: 900,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });


        window.addEventListener('scroll', function () {
            const header = document.getElementById('header');

            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });