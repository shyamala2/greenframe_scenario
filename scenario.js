
const visit = async (page) => {
    await page.goto('', { waitUntil: 'networkidle' }); // Go to the baseUrl
    await page.waitForTimeout(3000);
    await page.fill('#user-name', "visual_user");
    //await page.waitForTimeout(3000);
    await page.fill('#password', "secret_sauce");
    //await page.waitForTimeout(3000);
    await page.click('#login-button');
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('.shopping_cart_link')
    await page.click('#checkout')
    await page.fill('#first-name', "joe")
    await page.fill('#last-name', "smith")
    await page.fill('#postal-code', "500020")
    await page.click('#continue')
    await page.click('#finish')
    // Wait for 3 seconds
    //await page.scrollToElement('About Us'); // Scroll to the footer (if present)
    //await page.scrollToEnd();
    //await page.fill('#twotabsearchtextbox', "oneplus");
    //await page.click('#nav-search-submit-button');
    await page.waitForTimeout(3000);
    //await page.click("a[class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']");
    await page.waitForNetworkIdle(); // Wait every request has been answered as a normal user.
};

module.exports = visit;
