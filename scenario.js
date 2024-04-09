
const visit = async (page) => {
    await page.goto('', { waitUntil: 'networkidle' }); // Go to the baseUrl
    await page.waitForTimeout(3000); // Wait for 3 seconds
    //await page.scrollToElement('About Us'); // Scroll to the footer (if present)
    await page.scrollToEnd();
    //await page.fill('#twotabsearchtextbox', "oneplus");
    //await page.click('#nav-search-submit-button');
    await page.waitForTimeout(3000);
    //await page.click("a[class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']");
    await page.waitForNetworkIdle(); // Wait every request has been answered as a normal user.
};

module.exports = visit;
