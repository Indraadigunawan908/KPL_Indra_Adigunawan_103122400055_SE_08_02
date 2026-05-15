const { parseRobots } = require("./index");

const contoh = `
User-agent: Googlebot
Allow: /public
Disallow: /admin
Disallow: /private

Sitemap: https://example.com/sitemap.xml
`;

const hasil = parseRobots(contoh);
console.log(JSON.stringify(hasil, null, 2));