import { Tabs } from "@/page/tabs";
import { Menu } from "@/page/menu";

export class Home {
  init() {
    const tabs = new Tabs();
    tabs.init();

    const menu = new Menu();
    menu.init();
  }
}
