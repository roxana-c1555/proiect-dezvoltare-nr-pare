const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  const filePath = path.resolve(__dirname, 'index.html');
  const fileUrl = `file://${filePath}`;
  await page.goto(fileUrl);

  // Introducere textul în input
  await page.type('#inputNumbers', '1 2 3 4 5 6');

  // Selectează filtrul „Numere pare”
  await page.select('#filterType', 'pare');

  // Apasă butonul de filtrare
  await page.click('button');

  // Așteaptă 5 secunde
  await new Promise(resolve => setTimeout(resolve, 5000));

  // preluare rezultat afișat
  const output = await page.$eval('#output', el => el.textContent);
  console.log('Rezultatul testului:', output);

  await browser.close();
})();
