import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


const puppeteer = require('puppeteer');

describe('Products title', () => {
  test('Title loads correctly', async () => {
	let browser = await puppeteer.launch({
	  headless: false
	});
	let page = await browser.newPage();

	page.emulate({
	  viewport: {
		width: 1200,
		height: 600
	  },
	  userAgent: ''
	});

  await page.goto('http://localhost:3000/');
  await page.click('a[href="/products"]');
  await page.waitForSelector('.products__content');

  const firstCard = await page.$eval('#product0', e => e.innerHTML);
  expect(firstCard).toBe(' Brynn ');
  
  const thirdCard = await page.$eval('#product2', e => e.innerHTML);
  expect(thirdCard).toBe(' Shiv ');
  
  await page.click('button[name=size]');
  await page.click('button[name=runners]');
  await page.click('button[class=box__button-apply]');

  await page.waitForSelector('.products__content');

  const firstCardRunner = await page.$eval('#product0', e => e.innerHTML);
  expect(firstCardRunner).toBe(' Brynn ');
  
  const thirdCardRunner = await page.$eval('#product2', e => e.innerHTML);
  expect(thirdCardRunner).toBe(' Amela ');

	browser.close();
  }, 50000);
});