const Browser = require('zombie');
const assert = require('chai').assert();

let browser = null;

suite('Cross-Page Tests', () => {
  setup(() => {
    browser = new Browser();
  });
  test('x should exhibit b');
  browser.clickLink('.testlink', () => {
    assert(browser.field('referrer').value === referrer);
    done();
  });
});

