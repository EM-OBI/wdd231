export function nav() {
    const navButton = document.querySelector(".expand-collapse");
    const sideNav = document.querySelector(".side-nav");
    const body = document.querySelector("body");
    const overlay = document.querySelector(".overlay");
    const header = document.querySelector(".header") 

    navButton.addEventListener("click", () => {
        if (sideNav.classList.contains('show')) {
            sideNav.classList.remove('show');
            sideNav.classList.add('hide');
    
            setTimeout(() => {
                sideNav.style.display = 'none';
                sideNav.classList.remove('hide');
            }, 500); 
        } else {
            sideNav.style.display = 'block';
            sideNav.classList.add('show');
        }
        navButton.classList.toggle("open");
        overlay.classList.toggle("active");
        body.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!sideNav.contains(e.target) && !navButton.contains(e.target) && !header.contains(e.target)) {
            if (sideNav.classList.contains('show')) {
                sideNav.classList.remove('show');
                sideNav.classList.add('hide');
                setTimeout(() => {
                    sideNav.style.display = 'none';
                    sideNav.classList.remove('hide');
                }, 500);
                overlay.classList.remove("active");
                body.classList.remove("active");
                navButton.classList.remove("open");
            }
        }
    });

}