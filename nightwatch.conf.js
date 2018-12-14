const seleniumServer = require("selenium-server-standalone-jar");
const chromeDriver = require("chromedriver");
const geckoDriver = require("geckodriver");

module.exports = {
  src_folders: [],
  output_folder: "",
  custom_commands_path: "",
  page_objects_path: "",
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    host: "127.0.0.1",
    port: 4444,
    cli_args: {
      "webdriver.chrome.driver": chromeDriver.path,
      "webdriver.gecko.driver": geckoDriver.path
    }
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ["headless", "disable-gpu"]
        }
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ["disable-gpu"]
        }
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: "firefox",
        javascriptEnabled: true,
        acceptSslCerts: true,
        marionette: true
      }
    }
  }
};
