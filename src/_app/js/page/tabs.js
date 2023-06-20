export class Tabs {
  init() {
    let tabsBtn = document.querySelectorAll(".tabs__item");

    tabsBtn.forEach(function (element) {
      element.addEventListener("click", function (e) {
        tabsBtn.forEach(function (btn) {
          btn.classList.remove("tabs__item_active");
        });
        e.currentTarget.classList.add("tabs__item_active");
      });
    });
  }
}
