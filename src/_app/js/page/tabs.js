export class Tabs {
  init() {
    let tabsBtn = document.querySelectorAll(".tabs__item");
    let tabsItem = document.querySelectorAll(".tabs__block");

    tabsBtn.forEach(function (element) {
      element.addEventListener("click", function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) {
          btn.classList.remove("tabs__item_active");
        });
        e.currentTarget.classList.add("tabs__item_active");

        tabsItem.forEach(function (element) {
          element.classList.remove("tabs__block_active");
        });
        document
          .querySelector(`[data-target="${path}"]`)
          .classList.add("tabs__block_active");
      });
    });

  }
}
