import { WebElement } from "./WebElement";

export class Input extends WebElement {
  async type(text: string): Promise<void> {
    return this.page.type(this.selector, text, { delay: 50 });
  }
}
