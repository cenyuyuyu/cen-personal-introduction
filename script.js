// ========== 页面加载完成后执行 ==========
document.addEventListener("DOMContentLoaded", function () {
    // ----- 1. 查看更多 / 收起 -----
    const toggleBtn = document.getElementById("toggleBioBtn");
    const moreBio = document.getElementById("moreBio");
    let isBioVisible = false;

    toggleBtn.addEventListener("click", function () {
        isBioVisible = !isBioVisible;
        moreBio.classList.toggle("hidden", !isBioVisible);
        toggleBtn.textContent = isBioVisible ? "收起" : "查看更多";
    });

    // ----- 2. 暗色 / 亮色主题切换 -----
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    // 检测浏览器是否保存了主题偏好
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        themeToggle.textContent = "切换亮色主题";
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark");
        const isDark = body.classList.contains("dark");
        themeToggle.textContent = isDark ? "切换亮色主题" : "切换暗色主题";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });

    // ----- 3. 技能条动画（滚入视野时触发）-----
    const progressBars = document.querySelectorAll(".skill-progress");

    function animateSkillBars() {
        progressBars.forEach(function (bar) {
            const rect = bar.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;
            if (isVisible && bar.style.width === "") {
                const targetWidth = bar.getAttribute("data-width");
                bar.style.width = targetWidth + "%";
            }
        });
    }

    // 页面加载时检查一次
    animateSkillBars();
    // 滚动时持续检查
    window.addEventListener("scroll", animateSkillBars);

    // ----- 4. 回到顶部按钮 -----
    const backToTopBtn = document.createElement("button");
    backToTopBtn.textContent = "↑";
    backToTopBtn.className = "back-to-top";
    backToTopBtn.setAttribute("aria-label", "回到顶部");
    document.body.appendChild(backToTopBtn);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ----- 5. 页面加载时的欢迎提示（小彩蛋）-----
    console.log("欢迎来到陈宇的个人介绍页面 🚀");
    console.log("如果你看到这条信息，说明你打开了控制台！");
});
