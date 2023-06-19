export class Menu {
  init() {
    const header = document.querySelector(".header");
    const links = document.querySelectorAll(".menu__link");
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    window.addEventListener(
      "scroll",
      function () {
        if (outerWidth > 1023) {
          if (window.scrollY > 200 && window.scrollY < 450) {
            header.classList.add("no-fixed");
            header.classList.remove("fixed");
          } else if (window.scrollY > 450) {
            header.classList.add("fixed");
            header.classList.remove("no-fixed");
          } else {
            header.classList.remove("no-fixed");
          }
        }  
      },
      { passive: true }
    );

    window.addEventListener("resize", function () {
      if (outerWidth < 1023) {
        header.classList.remove("no-fixed");
        header.classList.remove("fixed");
      }
    });

    for (let link of anchorLinks) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
      });
    }

    for (let link of links) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);
        const yOffset = -100;
        const y = target.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      });
    }
  }
}
