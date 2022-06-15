import { WebElement } from "./WebElement";

export class Button extends WebElement {
  async click(): Promise<void> {
    return this.page.click(this.selector);
  }
}
