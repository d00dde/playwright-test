import { NGeneral } from "../src/namespace/NGeneral";

import TConfig = NGeneral.TConfig;

export const config: TConfig = {
  timeout: 300000,
  launchOption: {
    headless: false,
    devtools: true,
    args: [
      "--window-size=1920,1080",
      "--no-sandbox",
      "--disable-dev-shm-usage",
      "--enable-experimental-web-platform-features",
      "--ignore-certificate-errors",
      "--accept-insecure-certs",
      "--enable-features=NetworkService",
    ],
  },
};
