import '../scss/app.scss';
import { Home } from "@/page";

/* Global */
export const home = new Home();

window.addEventListener("DOMContentLoaded", () => {
  init();
});

function init() {
  home.init();
}