import { Tabs } from "@/page/tabs";
import { Select } from "@/page/select";
import { Menu } from "@/page/menu";

export class Home {
  init() {
    const tabs = new Tabs();
    tabs.init();

    const select = new Select();
    select.init();

     const menu = new Menu();
     menu.init();
  }
}
