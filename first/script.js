document.addEventListener("DOMContentLoaded", function () {
    // === 查看更多 切换 ===
    const toggleBtn = document.getElementById("toggleBioBtn");
    const moreBio = document.getElementById("moreBio");
    let isBioVisible = false;

    toggleBtn.addEventListener("click", function () {
        isBioVisible = !isBioVisible;
        moreBio.classList.toggle("hidden", !isBioVisible);
        toggleBtn.textContent = isBioVisible ? "收起" : "查看更多";
    });

    // === 1. 导航高亮 ===
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.menu a');

    function highlightNav() {
        let current = '';
        const scrollPos = window.scrollY + 130;
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            if (scrollPos >= top && scrollPos < bottom) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav();

    // === 2. 打字机效果 ===
    const typeTarget = document.querySelector('#about p:last-of-type');
    if (typeTarget) {
        const text = typeTarget.textContent.trim();
        typeTarget.textContent = '';
        typeTarget.classList.add('typing');

        let i = 0;
        function type() {
            if (i < text.length) {
                typeTarget.textContent += text.charAt(i);
                i++;
                setTimeout(type, 65);
            } else {
                typeTarget.classList.remove('typing');
            }
        }
        setTimeout(type, 600);
    }
});