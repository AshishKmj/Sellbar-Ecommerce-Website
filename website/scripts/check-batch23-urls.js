const http = require('http');

const urls = [
  '/',
  '/sell',
  '/sell-old-mobile-phone',
  '/sell-old-laptop',
  '/sell-old-tablet',
  '/sell-old-imac',
  '/sell-old-gaming-consoles',
  '/sell-old-television',
  '/sell-old-smart-watch',
  '/sell-old-smart-speaker',
  '/sell-old-dslr-camera',
  '/sell-old-earbuds',
  '/buy-refurbished',
  '/buy-refurbished-gadgets',
  '/buy-refurbished-mobile-phones/what-is-refurbished-mobile-phones',
  '/what-is-refurbished',
  '/repair',
  '/recycle-old-mobile-phone',
  '/find-new-phone',
  '/about',
  '/about-us',
  '/career',
  '/press-releases',
  '/partner-with-us',
  '/supersale',
  '/corporate-information',
  '/faq/category/buyback',
  '/contact',
  '/warranty-policy',
  '/refund-policy',
  '/terms-conditions',
  '/privacy-policy',
  '/terms-of-use',
  '/e-waste-policy',
  '/cookie-policy',
  '/articles',
];

async function checkUrl(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      resolve({ path, statusCode: res.statusCode });
    }).on('error', (err) => {
      resolve({ path, error: err.message });
    });
  });
}

async function run() {
  console.log('Verifying all 36 Sellbar routes on http://localhost:3000...');
  let passCount = 0;
  for (const url of urls) {
    const res = await checkUrl(url);
    const status = res.statusCode || res.error;
    const ok = res.statusCode === 200;
    if (ok) passCount++;
    console.log(`${ok ? '✅' : '❌'} ${res.path.padEnd(55)} -> ${status}`);
  }
  console.log(`\nRoute Health: ${passCount}/${urls.length} passing with 200 OK.`);
}

run();
