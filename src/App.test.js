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

  await page.goto('http://localhost:3000/')
  await page.click('a[name=shopAllRugs]')
  await page.waitForSelector('.products__content')

  // const htmlCard = await page.$eval('.productcard__title Brynn', e => e.innerHTML);
  // expect(htmlCard).toBe('Brynn');
  
  await page.click('button[name=size]')
  await page.click('button[name=runners]')
  await page.click('button[class=box__button-apply]')

  await page.waitForSelector('.products__content')

	browser.close();
  }, 50000);
});