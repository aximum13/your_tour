export class Select {
  init() {
    let select = document.querySelector(".form__input_select");
    let btnReset = document.querySelector(".form__btn_reset");

    select.addEventListener("change", () => {
      select.style.color = "#1B1F2B";
    });

    btnReset.addEventListener("click", () => {
      select.style.color = "#a6a6a6";
    });
  }
}
