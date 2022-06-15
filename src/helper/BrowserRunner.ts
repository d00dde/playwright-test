import {
  chromium, Page, BrowserContext,
} from "playwright";
import { TBrowserOptions } from "../type/TBrowserOptions";
import { config } from "../../config/base.config";

export default class BrowserRunner {
  constructor(private context: BrowserContext) {}

  static async initChromium(option: TBrowserOptions = {}) {
    const browser = await chromium.launch({ ...config.launchOption, ...option });
    const context = await browser.newContext();
    return new BrowserRunner(context);
  }

  async getPage(): Promise<Page> {
    return this.context.newPage();
  }

  async close(): Promise<void> {
    return this.context.close();
  }
}
