import { Page } from "playwright";

export class WebElement {
  constructor(protected page: Page, protected base_selector: string, protected index?: number) {}

  async isVisible(timeout = 4000): Promise<boolean> {
    return this.page.isVisible(this.selector, { timeout });
  }

  get selector() {
    if(this.index) {
      return `${this.base_selector} >> nth=${this.index}`;
    }
    return this.base_selector;
  }
}
