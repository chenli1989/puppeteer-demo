const puppeteer = require('puppeteer')

puppeteer.launch().then(async browser => {
    let page = await browser.newPage()
    // 打开网页
    await page.goto('https://www.baidu.com')

    // 截屏网页
    await page.screenshot({path: 'screenshot.png'});

    // 关闭浏览器
    browser.close()
})